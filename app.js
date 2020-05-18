const express       = require('express')
const handlebars    = require('express-handlebars')
const router        = express.Router()
const app           = express();
const path          = require('path')
const agendador     = require('./routes/agendador')
const flash         = require("connect-flash")

//Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Public
app.use(express.static(path.join(__dirname, "public")))


//Rotas
app.use('/agendador', agendador)


module.exports = app;

const port = 3351

app.listen(port, (()=> {
    console.log('Agendador iniciado')
}))

