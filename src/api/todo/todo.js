const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.todoSchema({
    description:{ //descricao da tarefa obrigatoria
        type:String,
        required:true
    },
    done:{//se a tarefa esta concluia ou nao
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {//data de cricao do registro
        type: Date,
        default: Date.now
    }
})

module.exports = restful.model('Todo', todoSchema)//exporta o esquemas