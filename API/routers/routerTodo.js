import { Router, json } from 'express';
import TodoController  from '../controller/controllerTodo.js';


const todoRouter = Router()

todoRouter.use(json())

todoRouter.get('/test', TodoController.test)
todoRouter.get('/userTask/:user_email', TodoController.getUserTask)
// todoRouter.post('/addTask/:user_email', TodoController.getUserTask)






export default todoRouter
