const sequelize = require("sequelize");
const connection = require("./database");

const Registro = connection.define('Registro', {
    cpf: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false
    },
    dataNasc: {
        type: sequelize.DATE,
        allowNull: false
    },
    bairro: {
        type: sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    cep: {
        type: sequelize.INTEGER,
        allowNull: false
    }
})

Registro.sync({force: false}).then(()=>{});

module.exports = Registro; 