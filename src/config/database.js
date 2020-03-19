const mongoose = require('mongoose') //mapeamento dos objetos em js e objetos par ao mongo , quanto para a abrir a coneccao
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
