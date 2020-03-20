const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoServices = require('../api/todo/todoServices')
    todoServices.register(router, '/todos')//usar todos os metodos to do get e demais

    

}