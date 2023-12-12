//imports
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const https = require('https')
const database = require("./database/database")
const Registro = require("./database/registro")
const { randomInt } = require('crypto')
const app = express();
const fs = require(`fs`);
const cors = require('cors');



//database
database.connection.authenticate().then(() => { console.log("conectado!") }).catch((msgErro) => {
    console.log(msgErro);
})

//port
const portaServidor = 3000
app.use(express.json())
app.use(cookieParser())
database.connection.sync( function(){
  console.log("Banco de dados conectado.");
})

const corsOptions = {
    origin: ['http://127.0.0.1:5500'],
    methods: 'GET,POST'
  };

  app.use(cors(corsOptions));

  var options =  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  }

  https.createServer(options, app).listen(portaServidor,()=>{
    console.log("Servidor conectado na porta "+ portaServidor);
  });

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



//check user
async function findRegCPF(cpf){

  try{
     await database.connection.sync();

     const pessoasEncontradas = await Registro.findAll({
      where:{cpf:Registro.cpf}
     })
     console.log('Usuários encontrados:', usuarios);
  }catch (error){
    console.error('Erro ao buscar usuários:', error);
  }

}


//post's
app.post('/auth/register/', async (req, res) => {
    const { cpf, nome, email, senha, confirmaSenha, dataNasc, bairro, rua, telefone, cep } = req.body

    //create pass
    const salt = await bcrypt.genSalt(12)

    const passwordHash = await bcrypt.hash(senha, salt)


    try {
      await database.connection.sync()



      //create register
      const register = await Registro.Registro.create({
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

        //saving user
        await register.save()


        const mensagem1 = 'Sucesso ao cadastrar'
        res.status(201).send()//redirecionar tela de inicio logado

    } catch (error) {
        console.log(error);
        const mensagem2 = 'Erro ao cadastrar, estes dados já estão cadastrados, tente fazer o login'
        res.status(500).send(`
        <html>
        <style>
        .button-return{

          padding: 10px 20px; /* Padding interno */
          font-size: 16px; /* Tamanho da fonte */
          background-color: #3498db; /* Cor de fundo */
          color: #fff; /* Cor do texto */
          border: none; /* Remover a borda */
          border-radius: 5px; /* Arredondamento dos cantos */
          cursor: pointer; /* Cursor ao passar por cima */
          transition: background-color 0.3s ease;
          position: absolute;
          top:50%;
          left:50%;
          transform: translate (-50%, -50%);
        }

        </style>
      <body>

      <button class="button-return" onclick="voltar()">Clique Aqui para Voltar</button>
        <script>
          alert('${mensagem2}');

          function voltar() {
            window.history.back(); // Método que retorna para a tela anterior
          
          }
        </script>

      </body>
    </html>
        `)//colocar um botao para voltar ao registrob 
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
