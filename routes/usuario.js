const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model("usuarios")
const bcryptjs = require("bcryptjs")
const nodemailer = require('nodemailer');
const passport = require("passport")

router.get("/registro", (req, res) =>{
    res.render("usuarios/registro")
})


router.post("/registro", (req, res) =>{
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome invalido"})
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "E-mail inválido"})
    }
    if(!req.body.senha1 || typeof req.body.senha1 == undefined || req.body.senha1 == null){
        erros.push({texto: "Senha invalida"})
    }
    if(req.body.senha1.length < 4){
        erros.push({texto: "Senha muito curta"})
    }
    if(req.body.senha1 != req.body.senha2){
        erros.push({texto: "As senhas são diferentes, tente novamente!"})
    }

    if(erros.length > 0){

        res.render("usuarios/registro", {erros: erros})
    
    
    }else{
        Usuario.findOne({email: req.body.email}).then((usuario) =>{
            if(usuario){
                req.flash("error_msg", "Ja existe uma conta com esse email em nosso sistema")
                res.redirect("/usuarios/registro")

            }else{
                const novoUsuario = new Usuario({
                    nome:  req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha1,
                  
                })

                bcryptjs.genSalt(10, (erro, salt) => {
                    bcryptjs.hash(novoUsuario.senha, salt, (erro, hash) =>{
                        if(erro){
                            req.flash("error_msg", "Houve um erro durante o savalmento do usuario")
                        }
                        novoUsuario.senha = hash

                        novoUsuario.save().then(() => {
                            req.flash("success_msg", `Usuario criado com sucesso, verifique o email: ${pegaEmail}`)
                            res.redirect("/")
                        }).catch((err) =>{
                            req.flash("error_msg", "houve um erro ao criar usuario, tente novamente!")
                            res.redirect("/usuarios/registro")
                        })
                    })
                })
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    segure: true,
                    auth: {
                        user: "blognode12@gmail.com",
                        pass: "Vaipracasado4"
                    }
                });
                let pegaEmail = req.body.email
                let pegaNome =  req.body.nome
                let pegaSenha = req.body.senha1
                transporter.sendMail({
                    from: "Mauricio Nunes <blognode12@gmail.com>",
                    to: pegaEmail,
                    subject: "Informações do novo usuario do Blog",
                    text: "",
                    html: `<h1>Seja muito BEM VINDO, ${pegaNome}</h1><br> Guarde suas informações de acesso:<br>
                    
                    E-mail: ${pegaEmail}<br> Senha: ${pegaSenha}
                    
                    
                    By Mauricio Nunes`
                }).then(message => {
                    console.log(message);
                }).catch(err => {
                    console.log(err);
                })

            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })
    }

})


router.get("/login", (req, res) => {
    res.render("usuarios/login")
})

router.post("/login", (req, res, next) =>{
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/usuarios/login",
        failureFlash: true
    })(req, res, next)
})


router.get("/logout", (req, res) =>{
    req.logout()
    req.flash('success_msg', "Deslogado com sucesso!")
    res.redirect("/")
})
module.exports = router