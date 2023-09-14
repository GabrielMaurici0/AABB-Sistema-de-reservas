require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const database = require("./database/database")
const Registro = require("./database/registro")
const { randomInt } = require('crypto')
const app = express();


//database
database.connection.authenticate().then(() => { console.log("conectado!") }).catch((msgErro) => {
    console.log(msgErro);
})

app.listen(3001)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

//get's
app.get("/", (req, res) => {
    res.render("main.ejs")
})
app.get("/main.ejs", (req, res) => {
    res.render("main.ejs")
})
app.get("/login.ejs", (req, res) => {
    res.render("login.ejs")
})

app.get("/register.ejs", (req, res) => {
    res.render("register.ejs")
})

app.get("/salao.ejs", (req, res) => {
    res.render("salao-festa.ejs")
})

app.get("/tennis.ejs", (req, res) => {
    res.render("tennis.ejs")
})

app.get("/reservas.ejs", (req, res) => {
    res.render("reservas.ejs")
})

app.get("/reserva-tenis.ejs", (req, res) => {
    res.render("reserva-tenis.ejs")
})

app.get("/historia.ejs", (req, res) => {
    res.render("historia.ejs")
})

app.get("/futebol.ejs", (req, res) => {
    res.render("futebol.ejs")
})

app.get("/beach-tennis.ejs", (req, res) => {
    res.render("beach-tennis.ejs")
})

app.get("/admin", (req, res)=>{
    res.render("admin.ejs")
})
//post's
app.post('/auth/register/', async (req,res)=>{
    const {cpf, nome, email, senha, confirmaSenha, dataNasc, bairro, rua, telefone, cep} = req.body

    const userExists = await Registro.findOne({cpf:cpf})

    if (userExists) {
        cadastropf.setCustomValidity('Este usuário já está cadastrado');
    }

    const cadastropf = document.register.querySelector('input[name=cpf]');
})






// app.post("/salvarReg", (req, res) => {
//     var cpf = req.body.cpf
//     var nome = req.body.nome
//     var email = req.body.email
//     var senha = req.body.senha
//     var confirmaSenha = req.body.confirmaSenha
//     var dataNasc = req.body.dataNasc
//     var bairro = req.body.bairro
//     var rua = req.body.rua
//     var telefone = req.body.telefone
//     var cep = req.body.cep

//     Registro.create({
//         cpf: cpf,
//         nome: nome,
//         email: email,
//         senha: senha,
//         confirmaSenha: confirmaSenha,
//         dataNasc: dataNasc,
//         bairro: bairro,
//         rua: rua,
//         telefone: telefone,
//         cep: cep
//     }).then(()=>{
//         res.redirect("/")
//     })
// })
