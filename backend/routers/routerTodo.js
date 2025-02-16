import { Router, json } from 'express';
import TodoController  from '../controller/controllerTodo.js';

import verifyToken from '../routers/tokenVerify.js';


const todoRouter = Router()


todoRouter.get('/test', TodoController.test)
todoRouter.post('/refresh', TodoController.refreshToken)


todoRouter.get('/userInfo',verifyToken, TodoController.getUserInfo)
todoRouter.get('/userTask',verifyToken, TodoController.getUserTask)
todoRouter.post('/addTask',verifyToken, TodoController.postUserTask)
todoRouter.put('/completeTask/:ID',verifyToken, TodoController.postCompleteTask)

todoRouter.delete('/deleteTask/:ID',verifyToken, TodoController.deleteUserTask)
todoRouter.put('/updateTask/:ID', verifyToken, TodoController.updateTask)







export default todoRouter
