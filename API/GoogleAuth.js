import express, { json } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { createPool } from 'mysql2/promise';
import cors from 'cors';
import todoRouter from './routers/routerTodo.js';

const CONNECTION =  createPool({
  host: '127.0.0.1',
  user: 'root',
  root: '3306',
  database: 'todo',
  password:'E2y0v0a4R==',

});


const app = express();
const PORT = 5000;
const client = new OAuth2Client();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(json());
app.use(cookieParser());
app.use(cors('*'))

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/google-login', async (req, res) => {
  
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    //audience: process.env.CLIENT_ID,
  });
  console.log(ticket)
  const { name, email, picture } = ticket.getPayload();

  const [responseAPi] =await CONNECTION.query(`SELECT EXISTS(SELECT * FROM userProfile WHERE email = ?  );`, [email])

  const [validation] = responseAPi
  const {[Object.keys(validation)[0] ] : exists} = validation

  const id = crypto.randomUUID()

  if(exists === 1){console.log('Usuario existente');
  }
  if(exists != 1){
    await CONNECTION.query(`INSERT INTO userProfile(id,email,name, picture) VALUES
      (?,?,?,?);`, [id,email,name,picture])
  }

  


  res.status(201);
  res.json({ id, name, email, picture });
});

app.use('/todoListApp', todoRouter)


app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));