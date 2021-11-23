const config = require('./config/config')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
const Respostas = require('./infraestrutura/Resostas')

conexao.authenticate()
    .then(()=>{
        const app = config()
        app.listen(3000,()=>console.log('servidor conectado'))
    }).catch((erro)=>{
        console.log(erro)
    })
