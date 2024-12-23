import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'host',
  root: '3306',
  database: 'todo',
  password:'E2y0v0a4R==',

});

export class AuthModel{
  static async Login(){
    try{

    }catch(err){
      throw err
    }
  }
}
