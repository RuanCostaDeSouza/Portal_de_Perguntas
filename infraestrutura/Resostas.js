const Sequelize=require('sequelize')
const conexao = require('./conexao')

const resposta = conexao.define('Respostas',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Resposta:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    perguntaID:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

resposta.sync({force:false});

module.exports = resposta