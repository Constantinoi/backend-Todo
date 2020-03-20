const port = 3003

const bodyParser = require('body-parser')//faz o body do corpo da requisicao 
const express = require('express')//servidor web
const server = express()//iniciar o express criando um instancia
const allowCors = require('./cors')

//apos instaciar criar middline
server.use(bodyParser.urlencoded({ extended: true }))// submissao de formularios
server.use(bodyParser.json())
server.use(allowCors)//vai permite que a requisicao venha de uma determinada origem

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server