import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../db_config.js';


export default function verifyToken(req,res, next){
  const authHeader = req.headers.authorization
  console.log(authHeader);
  
  const token = authHeader.split(' ')[1];
  



  if (!token) return res.status(401).json({ message: 'Access token required.' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    req.user = user;
    
    next();
  });

}