const { sequelize, DataTypes } = require('sequelize');
const database = require("./database");

const Registro = database.connection.define('Registro', {
    cpf: {
        type: DataTypes.STRING(512),
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    confirmaSenha: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    dataNasc: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    rua: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(512),
        allowNull: false
    }
})

Registro.sync({force: false}).then(()=>{});

module.exports = {Registro} 