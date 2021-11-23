const conexao = require('./conexao')
const Sequelize = require('sequelize')

const tabelas = conexao.define('Perguntas',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    titulo:{
        type:Sequelize.STRING,
        allowNull: false,
    },

    descricao:{
        type:Sequelize.TEXT,
        allowNull: false,
    }
})

tabelas.sync({force:false}).then(()=>{
    console.log('Conectado')
}).catch((erro)=>console.log(erro))


module.exports = tabelas
