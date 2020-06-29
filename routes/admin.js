const express  = require("express");
const router   = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categoria = mongoose.model("categorias")
require("../models/Postagem.js")
const Postagem = mongoose.model("postagens")
const {eAdmin} = require("../helpers/eAdmin")


router.get('/', eAdmin, (req, res) => {
    res.render("admin/index")
})


router.get('/posts', eAdmin, (req, res) => {
    res.send("Pagina de Posts")
})


router.get('/categorias', eAdmin, (req, res)  => {
    Categoria.find().sort({date: 'desc'}).then((categorias) =>{
        res.render("admin/categorias", {categorias: categorias.map(categoria => categoria.toJSON())})
    }).catch((err) =>{
        req.flash("erro_msg", "houve um erro ao analisar as categorias")
        res.redirect("/admin")
    })
})

router.get('/categorias/add', eAdmin, (req, res) =>{
    res.render("admin/addcategorias")
})

router.get("/categorias/edit/:id", eAdmin, (req, res) => {
    Categoria.findOne({_id: req.params.id}).lean().then((categoria)=>{
        res.render("admin/editcategorias", {categoria:categoria})
    }).catch((err)=>{
            req.flash("error_msg", "Esta categoria não existe")
            res.redirect('/admin/categorias')
    })
})

router.post("/categorias/deletar", eAdmin, (req, res) => {
    Categoria.remove({_id: req.body.id}).then(() =>{
        req.flash("success_msg", "Categoria deletada com sucesso")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria")
        res.redirect("/admin/categorias")
    })
})


router.post("/categorias/nova", eAdmin, (req, res) =>{
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null || req.body.nome == ''){
        erros.push({texto: "Nome Invalido"})
    }

    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null || req.body.slug == ''){
        erros.push({texto: "Slug invalido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria com nome muito pequeno"})
    }

    if(erros.length > 0){
       res.render("admin/addcategorias", {erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categoria(novaCategoria).save().then(() =>{
            req.flash("success_msg", "Categoria salva com sucesso")
            res.redirect("/admin/categorias")
        }).catch((err) =>{
            req.flash("error_msg", "Erro ao salvar categoria, tente novamente")
            res.redirect("/admin")
        })

    }


})

router.post("/categorias/edit", eAdmin, (req, res) =>{
const erros = []
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == '' || req.body.nome == null || req.body.nome <= 2){
        erros.push({texto: "O nome da categoria precisa estar preenchido!"})
    }
    
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null || req.body.slug == '' || req.body.slug <= 2){
        erros.push({texto: "O Slug precisa estar preenchido!"})
    }

    if(erros.length > 0){
        res.render("admin/editcategorias", {erros: erros })
    }else{

        Categoria.findOne({_id: req.body.id}).then((categoria)=>{
        
                
            categoria.nome = req.body.nome
            categoria.slug = req.body.slug
    
            categoria.save().then(() =>{
                req.flash("success_msg", "Categoria editada com sucesso!")
                res.redirect("/admin/categorias")
            }).catch(() =>{
                res.flash("error_msg", "Erro ao editar categoria")
                res.redirect("/admin/categorias")
            })
    
        }).catch((err) =>{
            req.flash("error_msg", "Houve um erro ao editar a categoria!")
            res.redirect("/admin/categorias")
        })
        
    }


    

})

router.get("/postagens", eAdmin, (req, res) => {

    Postagem.find().lean().populate("categoria").sort({data:"desc"}).then((postagens)=>{
        res.render("admin/postagens", ({postagens: postagens}))
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as postagens")
        res.redirect("/admin")
    })

    
})

router.get("/postagens/add", eAdmin, (req, res) => {
    Categoria.find().lean().then((categorias) => {
        res.render("admin/addpostagem", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulario")
        res.redirect("/admin")
    })
})

router.post("/postagens/nova", eAdmin, (req, res) => {
    var erros = []
    if(req.body.categoria == "0"){
        erros.push({texto: "Categoria invalida, registre uma categoria"})
    }

    if(erros.length > 0){
        res.render("admin/addpostagem", {erros: erros})
    }else{
        const novaPostagem = {
            titulo:     req.body.titulo,
            descricao:  req.body.descricao,
            conteudo:   req.body.conteudo,
            categoria:  req.body.categoria,
            slug:       req.body.slug
        }
        new Postagem(novaPostagem).save().then(()=>{
            req.flash("success_msg", "Postagem criado com sucesso!")
            res.redirect("/admin/postagens")
        }).catch((err) =>{
            req.flash("error_msg", "Houve um erro no salvamento da postagem")
            res.redirect("/admin/postagens")
        })
    }
})

router.get("/postagens/edit/:id", eAdmin, (req, res) =>{
    Postagem.findOne({_id: req.params.id}).lean().then((postagem) =>{

        Categoria.find().lean().then((categorias) => {
            res.render("admin/editpostagens", {categoria: categorias, postagem: postagem})

        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao listar as categorias")
            res.redirect("/admin/postagens")
        })

    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro ao carregar o formulario de edição")
        res.redirect("/admin/postagens")
    })
    
})


router.post("/postagens/edit", eAdmin, (req, res) => {

    Postagem.findOne({_id: req.body.id}).then((postagem) => {
        postagem.titulo     = req.body.titulo
        postagem.slug       = req.body.slug
        postagem.descricao  = req.body.descricao
        postagem.conteudo   = req.body.conteudo
        postagem.categoria  = req.body.categoria


        postagem.save().then(() =>{
            req.flash("success_msg", "Postagem editada com sucesso!")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar o post")
            res.redirect("/admin/postagens")
        })
    })


}) 


router.get("/postagens/deletar/:id", eAdmin, (req, res) => {
    Postagem.remove({_id: req.params.id}).then(() =>{
        req.flash("success_msg", "Postagem deletada com sucesso!")
        res.redirect('/admin/postagens')
    }).catch((err) =>{
        req.flash("error_msg", "Houve um erro ao deletar a postagem!")
        res.redirect("/admin/postagens")
    })
})



router.get("/agendador", eAdmin, (req, res) =>{
    res.render('admin/player')
})

module.exports = router;