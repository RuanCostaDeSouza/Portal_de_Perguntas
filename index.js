const config = require('./config/config')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        const app = config()
        tabelas.init(conexao)
        app.listen(3000,()=>console.log('servidor conectado'))
    }
})
