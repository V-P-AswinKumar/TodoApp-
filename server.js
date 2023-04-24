const express = require('express') 

const app = express() 
const PORT  = 52002 
const controller= require('./controller')

app.use(express.json());
app.route('/api/todo').get(controller.getAllList).post(controller.createTodo).put(controller.updateTodo)
app.route('/api/todo/:id').delete(controller.deleteTodo);
                




app.listen(PORT,()=>{
    console.log(' the app up and running ')
})