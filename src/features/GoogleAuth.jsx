// import React from 'react';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { useEffect, useState } from 'react';
// import axios from 'axios'

// const GoogleAuth = () => {
//   const [credential, setCredential] = useState()
//   const [loginData,   setLoginData] = useState()


//  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;




//   const handleLogin = async (googleData) => {
//     const res = await axios.post('http://localhost:5000/google-login', {
//     token: googleData.credential},

//     {headers: {
//       'Content-Type': 'application/json'
//     }},
//   );
   
//     console.log('logeado');
    
//     setLoginData(res);
//     localStorage.setItem('loginData', JSON.stringify(res));
//     };

//   return (
//    <GoogleOAuthProvider clientId={clientId}>
//      <GoogleLogin

//        onSuccess={credentialResponse => {
//         setCredential(credentialResponse)
//         handleLogin(credentialResponse)
//       }}
//        cookiePolicy={'single_host_origin'}
//       useOneTap

//        onError={() => {
//          console.log('Login Failed');
//        }}
//      />
//    </GoogleOAuthProvider>
//    );
//  };
// export default GoogleAuth;