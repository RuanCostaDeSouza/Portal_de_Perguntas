const conexao = require('./conexao')


class tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarPergunta()
    }

    criarPergunta(){
        const sql = 'CREATE TABLE IF NOT EXISTS perguntas(id int NOT NULL AUTO_INCREMENT,nome varchar(50) NOT NULL, titulo varchar (100), descricao text, PRIMARY KEY (id))'
        
        this.conexao.query(sql, (erro) =>{

            if (erro){
            
            console.log(erro)
            
            } else {
            
            console.log('tabelas inicializadas com sucesso!!!')
            
            }
            
             })}
}

module.exports = new tabelas