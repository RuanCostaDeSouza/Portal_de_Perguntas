const Sequelize = require('sequelize')

const conexao = new Sequelize('portalPerguntas', 'root', 'Dolly3000',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = conexao