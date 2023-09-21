const sequelize = require("sequelize");
const database = require("./database");

const Registro = database.connection.define('Registro', {
    cpf: {
        type: sequelize.TEXT,
        allowNull: false
    },
    nome: {
        type: sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: sequelize.TEXT,
        allowNull: false
    },
    senha: {
        type: sequelize.TEXT,
        allowNull: false
    },
    confirmaSenha: {
        type: sequelize.TEXT,
        allowNull: false
    },
    dataNasc: {
        type: sequelize.TEXT,
        allowNull: false
    },
    bairro: {
        type: sequelize.TEXT,
        allowNull: false
    },
    rua: {
        type: sequelize.TEXT,
        allowNull: false
    },
    telefone: {
        type: sequelize.TEXT,
        allowNull: false
    },
    cep: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

Registro.sync({force: false}).then(()=>{});

module.exports = Registro; 