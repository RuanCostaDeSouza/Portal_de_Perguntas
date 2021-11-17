const perguntas = require('../models/perguntas');

module.exports = app =>{

    app.get('/',(req,res)=>{
    
        res.render('index')

    })
    app.get('/',(req,res)=>{

        res.send('formulario enviado')

    })

    app.post('/formulario',(req,res)=>{
        let nome = req.body.nome
        let titulo = req.body.titulo
        let descricao = req.body.descricao
        let email = req.body.email

        const novaPergunta={
            nome:nome,
            titulo:titulo,
            email:email,
            descricao:descricao,
        }

        perguntas.adiciona(novaPergunta,res)
        
    })
}
