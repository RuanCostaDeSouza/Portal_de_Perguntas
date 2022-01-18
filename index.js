const config = require('./config/config')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
const Respostas = require('./infraestrutura/Resostas')

const PORT = process.env.PORT || 3000

conexao.authenticate()
    .then(()=>{
        const app = config()
        app.listen(PORT,()=>console.log(`servidor conectado ${PORT}`))
    }).catch((erro)=>{
        console.log(erro)
    })
