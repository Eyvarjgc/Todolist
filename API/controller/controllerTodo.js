import TodoModel   from '../model/modelTodo.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import { REFRESH_KEY, SECRET_KEY } from '../db_config.js';

class TodoController{
  // TODO: Refresh token
  static async refreshToken(req,res) {
    const Refresh = req.headers.refreshtoken
    if (!Refresh) return res.sendStatus(401);



    jwt.verify(Refresh, REFRESH_KEY, (err,user) => {
      if (err) return res.sendStatus(403);
      const NewAccessToken = jwt.sign(user, SECRET_KEY)
      
    })

    res.send(Refresh)


    
    
      
  }

  static async test (req, res) {
    const data = await TodoModel.test()

    console.log(data);
    
    res.status(200).send({success:true, data: data})
  }


  static async getUserInfo(req,res){
    try {
      const {email} = req.user
      
      const data = await TodoModel.getUserInfo(email)
      if(data == false) return res.status(404).
      send({succes:false,message:`This user does not exists`})


      res.status(200).send(data)


    } catch (error) {
      res.status(500).json({success:false, error: error.message})
      console.log(error);
    }


  }

  static async getUserTask(req,res){
    try {
      const {email} = req.user


      const data = await TodoModel.getUserTask(email)

      
  
      res.status(200).send(data)
  
    } catch (error) {
      res.status(500).json({success:false, error: error.message})
      console.log(error);
      
    }


  }


  static async postUserTask(req,res){
    const {email} = req.user
    const body = req.body


    const data = await TodoModel.postUserTask(email, body)


    res.status(200).send(data)
  }

  static async deleteUserTask(req,res) {
    const {email} = req.user
    const {ID} = req.params
    

    const data = await TodoModel.deleteUserTask(email, ID)


    res.status(200).send(data)

  }
}


export default TodoController





