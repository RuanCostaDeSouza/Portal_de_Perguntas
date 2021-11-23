const perguntas = require('../models/perguntas');
const Tabela = require('../infraestrutura/tabelas');
const conexao = require('../infraestrutura/conexao');
const resposta = require('../infraestrutura/Resostas');

module.exports = app =>{

    app.get('/',(req,res)=>{
        const sei = req.body
        res.send('pagina inicial' + sei)
        console.log(sei)
    })
    
    app.get('/formulario',(req,res)=>{
        res.render('index')

    })

    app.post('/formulario',(req,res)=>{
        

        let nome = req.body.nome
        let titulo = req.body.titulo
        let descricao = req.body.descricao
        
        perguntas.adiciona(nome, titulo, descricao,res)
    })

    app.get('/allquests',(req,res)=>{
        perguntas.lista(res)
       
    })

    app.get('/pergunta/:id',(req,res)=>{
        const id = req.params.id
        perguntas.buscaID(id,res)
    })

    app.post('/resposta',(req,res)=>{
        const nome = req.body.nome
        const resposta = req.body.resposta
        const id = req.body.idResposta

        perguntas.adicionaResposta(nome,resposta,id,res)


    })
}
