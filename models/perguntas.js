const conexao = require('../infraestrutura/conexao');
const tabela = require('../infraestrutura/tabelas')
const resposta = require('../infraestrutura/Resostas')


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
                resposta.findAll({where:{
                    perguntaID:id
                }}).then(respostas=>{
                    res.render('pergunta',{
                        pergunta:perguntas,
                        resposta: respostas
                    })
                })
               
            }else{
                res.send('Pergunta não encontrada!')
            }
        })
    }
    adicionaResposta(nome, Resposta,id,res){
        resposta.create({
            nome:nome,
            Resposta:Resposta,
            perguntaID:id
        }).then(res.redirect('./pergunta/'+id)).catch(erro=>console.log(erro))
    }

    
}

module.exports = new Perguntas