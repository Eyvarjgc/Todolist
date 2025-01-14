import express from 'express'



export const createTodoRouter = () => {
  const todoRouter = express.Router()
  todoRouter.use(express.json())

  todoRouter.get('/list', (req,res) => {
    res.status(200).json({success:true, message: 'Working'})
  })


  return todoRouter
}

