import express, { json } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { createPool } from 'mysql2/promise';
import cors from 'cors';
import todoRouter from './routers/routerTodo.js';


import { SECRET_KEY, REFRESH_KEY, HOST,USER, DB_PORT,DATABASE,PASSWORD } from './db_config.js';

const CONNECTION =  createPool({
  host: HOST,
  user: USER,
  root: DB_PORT,
  database: DATABASE,
  password: PASSWORD,

});


const app = express();
const PORT = 5000;
const client = new OAuth2Client();

app.use(json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}))


todoRouter.use(json())

app.use('/todoList', todoRouter)


app.post('/google-login', async (req, res) => {
  try {
    
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      //audience: process.env.CLIENT_ID,
    });
    const {  name, email, picture } = ticket.getPayload();

    const [responseAPi] =await CONNECTION.query(`SELECT EXISTS(SELECT * FROM userProfile WHERE email = ?  );`, [email])
  
    const [validation] = responseAPi
    const {[Object.keys(validation)[0] ] : exists} = validation

    const id = crypto.randomUUID()
    if(exists != 1){
  
      const query = `INSERT INTO userProfile(id,email,name, picture) VALUES
      (?,?,?,?);`

      CONNECTION.query(query, [id,email,name,picture])

      const JWT_TOKEN = jwt.sign({
        email:email,
      }, SECRET_KEY, {
        expiresIn: '1h'
      })

      const REFRESH_TOKEN = jwt.sign({
        email:email,}, 
        REFRESH_KEY, 
        {expiresIn: '7d'})
  

      res.send({Refresh: REFRESH_TOKEN, Token: JWT_TOKEN, id, name, email, picture });
      
  
    }else{
      const JWT_TOKEN = jwt.sign({
        email:email,
      }, SECRET_KEY, {
        expiresIn: '1h'
      })
  
      const REFRESH_TOKEN = jwt.sign({
        email:email,}, REFRESH_KEY, 
        {expiresIn: '7d'})
  

      res.send({Refresh: REFRESH_TOKEN, Token: JWT_TOKEN, id, name, email, picture });
    }



  } catch (error) {
    throw error
  }
  

    
});




app.listen(PORT, () => console.log(`Server running on PORT : http://localhost:${PORT}`));