const Todo = require('./todo')

Todo.methods([
    'get',
    'post',
    'put',
    'delete'
])

Todo.updateOptions({//rodar as att
    new:true,
    runValidators:true
})

module.exports = Todo