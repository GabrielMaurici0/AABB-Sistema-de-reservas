const sequelize = require('sequelize');

const connection = new sequelize('aabb','aabb','root',{
    host: 'localhost',
    dialect: 'mysql',
    define:{
        timestamp:false
    }
});

module.exports = connection;