const Sequelize = require ('sequelize');
const conexao = require('./conexao');

const respostas = conexao.define('respostas',{
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },

    Resposta:{
        type:Sequelize.TEXT,
        allowNull: false
    },

    perguntaID:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

respostas.sync({force:false});

module.exports = respostas
 