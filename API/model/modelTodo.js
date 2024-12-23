import { createPool } from 'mysql2/promise';


import { HOST, USER, PORT, DATABASE, PASSWORD } from '../db_config.js';



const CONNECTION =  createPool({
  host: HOST,
  user: USER,
  root: PORT,
  database: DATABASE,
  password: PASSWORD,

});


class TodoModel{
  static async test(){
    try {
      const [results] = await CONNECTION.query(`SELECT * FROM userProfile`)

      return results


    } catch (error) {
      console.log(error);
      
    }
  }
  static async getUser(){
    try {
      const [results] = await CONNECTION.query(`SELECT * FROM userProfile`)

      return results


    } catch (error) {
      console.log(error);
      
    }
  }


  static async getUserTask(user_email) {
    try {
      const [results] = await CONNECTION.query(
        `SELECT * from userProfileTask inner join userTask 
        on userProfileTask.task_id = userTask.ID 
         where  user_email = ? group by ID ; `, [user_email])

        return results

    } catch (error) {
      console.log(error);
      
    }

  }
}

export default TodoModel