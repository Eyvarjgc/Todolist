import TodoModel   from '../model/modelTodo.js';

class TodoController{
  static async test (req, res) {
    const data = await TodoModel.test()

    console.log(data);
    
    res.status(200).send({success:true, data: data})
  }

  static async getUserTask(req,res){
    const {user_email} = req.params
    
    const data = await TodoModel.getUserTask(user_email)

    res.status(200).send(data)

  }

  static async postUserTask(req,res){
    const {ID, checked, name, description,date, mood } = req.body
    
    const data = await TodoModel.getUserTask(user_email)

    res.status(200).send(data)

  }
}


export default TodoController