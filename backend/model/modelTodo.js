import { createPool } from 'mysql2/promise';


import { HOST, USER, DB_PORT, DATABASE, PASSWORD } from '../db_config.js';
import { query } from 'express';



const CONNECTION =  createPool({
  host: HOST,
  user: USER,
  root: DB_PORT,
  database: DATABASE,
  password: PASSWORD,

});


class TodoModel{
  static async test(){
    try {
      const [results] = await CONNECTION.query(`
        SELECT * FROM userProfile`)

      return results


    } catch (error) {
      console.log(error);
      
    }
  }
  static async getUser(){
    try {
      const [results] = await CONNECTION.query(`
        SELECT * FROM userProfile`)

      return results


    } catch (error) {
      console.log(error);
      
    }
  }
  static async getUserInfo(user_email) {
    try {
      
      const [results] = await CONNECTION.query(
        `SELECT * from userProfile WHERE email = ? `,
         [user_email])

        
      if(results[0].length < 1) return false

      return results

    } catch (error) {
      if(error.code == 'ER_NO_SUCH_TABLE'){
        throw new Error
        ('This user does not have tasks yet')
      }
      throw error
    }

  }

  static async getUserTask(user_email) {
    try {
      const [results] = await CONNECTION.query(
        `SELECT * from userProfileTask inner join userTask 
        on userProfileTask.task_id = userTask.ID 
        where  user_email = ? group by ID ; `,
        [user_email])



        return results

    } catch (error) {
      if(error.code == 'ER_NO_SUCH_TABLE'){
        throw new Error
        ('This user does not have tasks yet')
      }
      throw error
    }

  }

  static async postUserTask(user_email, body) {
    try {
      const {ID, checked,name,description,date,mood} = body
      
      
      const [resultAddingTask] = await 
      CONNECTION.query(`
      INSERT INTO userTask(
      ID,checked,name,description,date,mood) 
      VALUES(?, ?,?,?,?,?); `,
      [ID, checked,name,description,date,mood])
  
      const [resultAddingTaskToUser] = await 
      CONNECTION.query(`
        INSERT INTO userProfileTask(
        user_email, task_id)
        VALUES( ?, ? ) ;`,
         [user_email, ID])

        
        
        
      
      



    } catch (error) {
      console.log(error);
      
    }

  }

  static async deleteUserTask(user_email,ID) {
    try {


      const query = `DELETE FROM userProfileTask where task_id = ?`
      CONNECTION.query(query, [ID])
      
      const query_ = `DELETE FROM userTask where ID = ?`
      CONNECTION.query(query_, [ID])

      return `Task has been succesfully deleted`

    } catch (error) {
      throw error
    }


  }

  static async updateTask(email,ID, data){
    try {
      const {
        checked,
        name,
        description,
        date,
        mood} = data

        

      const [result] = await CONNECTION.query(`select * from userTask where ID = ?`, [ID])
      if(result == 0) return false

      const query = 'UPDATE userTask SET checked = ?, name = ?, description = ?, date = ?, mood = ? WHERE ID = ?'
      
      await CONNECTION.query(query, [checked, name,description,date,mood, ID] )

      return `Task has been successfully updated`
      


    } catch (error) {
      throw error
    }
  }

}

export default TodoModel