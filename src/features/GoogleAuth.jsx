import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios'

const GoogleAuth = () => {
  const [credential, setCredential] = useState()
  const [loginData,   setLoginData] = useState()


 const clientId = '474232570989-vtdkosng66s4ea9jalgnnhnqrdnn318v.apps.googleusercontent.com';


 
//  useEffect(  () => {
//   try{
//     console.log(credential);
    
//     const res = axios.post('http://localhost:4000/google-login', JSON.stringify({token: credential.credential}), {
//       headers:{
//         "Content-Type": "application/json"
//       }
//     })

//     console.log(res);
    
    

//   }catch(err){
//     console.log(err);
    
//   }

//   } ,[credential])

  const handleLogin = async (googleData) => {
    const res = await axios.post('http://localhost:5000/google-login', {
    token: googleData.credential},

    {headers: {
      'Content-Type': 'application/json'
    }},
  );
   
      
    setLoginData(res);
    localStorage.setItem('loginData', JSON.stringify(res));
    };

  return (
   <GoogleOAuthProvider clientId={clientId}>
     <GoogleLogin

       onSuccess={credentialResponse => {
        setCredential(credentialResponse)
        handleLogin(credentialResponse)
      }}
       cookiePolicy={'single_host_origin'}
      useOneTap

       onError={() => {
         console.log('Login Failed');
       }}
     />
   </GoogleOAuthProvider>
   );
 };
export default GoogleAuth;