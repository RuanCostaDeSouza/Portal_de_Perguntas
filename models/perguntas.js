const conexao = require('../infraestrutura/conexao');


class Perguntas{
    adiciona(pergunta,res){
        const novaPergunta = pergunta
        const sql = 'INSERT INTO perguntas SET ?'
        conexao.query(sql, novaPergunta,(erro)=>{
            if(erro){
                res.send('ops algo deu errado')
                console.log(erro)
            }else{
                res.send('formulario enviado ao servidor')
            }
        })
    }

    
}

module.exports = new Perguntas