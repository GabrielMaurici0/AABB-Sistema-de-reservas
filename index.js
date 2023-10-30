//imports
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

//port
app.listen(3001)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//setting of view
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

//routes
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
    res.render("register.ejs");
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

app.get("/admin", (req, res) => {
    res.render("admin.ejs")
})


//post's
app.post('/auth/register/', async (req, res) => {
    const { cpf, nome, email, senha, confirmaSenha, dataNasc, bairro, rua, telefone, cep } = req.body


    
//check user



    
     const checkCPF = await Registro.findOne({where:{cpf:cpf}});



    //create pass
    const salt = await bcrypt.genSalt(12)

    const passwordHash = await bcrypt.hash(senha, salt)


    //create register
    const register = new Registro({
        cpf,
        nome,
        email,
        senha: passwordHash,
        confirmaSenha: passwordHash,
        dataNasc,
        bairro,
        rua,
        telefone,
        cep
    })

    try {

        //saving user
        await register.save()


        const mensagem1 = 'Sucesso ao cadastrar'
        res.status(201).send(`
        <html>
      <body>
        <script>
          alert('${mensagem1}');
        </script>
      </body>
    </html>
        `)//colocar para ficar na tela de registro

    } catch (error) {
        console.log(error);
        const mensagem2 = 'Erro ao cadastrar'
        res.status(500).send(`
        <html>
      <body>
        <script>
          alert('${mensagem2}');
        </script>
      </body>
    </html>
        `)//colocar para ficar na tela de registro
    }
})

//login user
app.get("auth/login", async (req, res) => {

    const { cpf, senha } = req.body


    //check if user exists
    const user = await Registro.findOne({ cpf: cpf })

    if (!user) {
        return res.status(404).console.log("Este cpf não está cadastrado");
    }

    //check if password match
    const checkPass = await bcrypt.compare(senha, user.senha)

    if (!checkPass) {
        return res.status(422).console.log("Senha Inválida");
    }
})



//adicionar nodemailer
