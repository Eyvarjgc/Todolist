
import express from 'express'
import cors from 'cors'

import {createTodoRouter} from './routers/todo.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.use(cors('*'))

app.use('/todoList', createTodoRouter())


app.listen(PORT, () => {
  console.log(`Server running in \n http://localhost:${PORT}`);
  
})