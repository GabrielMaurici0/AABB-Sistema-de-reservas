const sequelize = require("sequelize");
const database = require("./database");

const Registro = database.connection.define('Registro', {
    cpf: {
        type: sequelize.STRING(512),
        allowNull: false,
        unique:true
    },
    nome: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    email: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    senha: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    confirmaSenha: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    dataNasc: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    bairro: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    rua: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    telefone: {
        type: sequelize.STRING(512),
        allowNull: false
    },
    cep: {
        type: sequelize.STRING(512),
        allowNull: false
    }
})

Registro.sync({force: false}).then(()=>{});

module.exports = Registro; 