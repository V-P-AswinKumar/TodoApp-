const PrismaClient  = require('@prisma/client').PrismaClient

const client  = new PrismaClient() 


const getAllList = async (req,res) =>{
    try{

        const data  = await client.todo.findMany({}) ;
        res.status(200).send({data})
    }  
    catch(err){
        res.status(500).send({message:"internal server error"})
    }  
}
const createTodo = async (req,res) =>{
    try{
        const {todo}  = req.body 
        console.log(req.body)
        const data  = await client.todo.create({
            data:{
                content:todo
            }
        });
        res.status(200).send({data})
    }  
    catch(err){
        console.log(err)
        res.status(500).send({message:"internal server error"})
    }  
}
const updateTodo = async (req,res) =>{
    try{
        const {id,todo} = req.body 
        const data  = await client.todo.update({
            where:{
                id
            },
            data:{
                content:todo
            }
        });
        res.status(200).send({data})
    }  
    catch(err){
        res.status(500).send({message:"internal server error"})
    }  
}
 const deleteTodo = async (req,res) =>{
    try{
        const {id} = req.params
        const data  = await client.todo.delete({where:{id:+id}}) ;
        res.status(200).send({data})
    }  
    catch(err){
        res.status(500).send({message:"internal server error"})
    }  
}

module.exports = {
  getAllList,
  createTodo,
  updateTodo,
  deleteTodo
}
