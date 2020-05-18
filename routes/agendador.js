const express = require('express')
const router = express.Router()



router.get('/inicio', (req, res) => {
    res.render("agendador/index")
})

router.get('/player', (req, res) => {
    res.render("agendador/player")
})

router.get('/sobre', (req, res) =>{
    res.render("agendador/sobre")
})




module.exports = router;
