const conexao = require('../infraestrutura/conexao');
const tabela = require('../infraestrutura/tabelas')


class Perguntas{
    adiciona(nome,titulo,descricao,res){
        tabela.create({
            nome:nome,
            titulo:titulo,
            descricao:descricao
        }).then(res.redirect('/allquests')).catch((erro)=>console.log(erro))
    }

    lista(res){
        tabela.findAll({raw:true, order:[['id','DESC']]}).then(perguntas=>{
            res.render('listaPerguntas',{
                perguntas:perguntas
            })
        })
    }

    buscaID(perguntaPesquisada,res){
        const id = perguntaPesquisada
        tabela.findOne({where:{id:id}}).then(perguntas=>{
            if(perguntas !=undefined){
                res.render('pergunta',{
                    pergunta:perguntas
                })
            }else{
                res.send('Pergunta não encontrada!')
            }
        })
    }

    
}

module.exports = new Perguntas