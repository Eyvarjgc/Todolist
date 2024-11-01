
import { useGoogleLogin  , googleLogout } from '@react-oauth/google';
import { useState,useContext, useEffect} from 'react'
import {UserContext} from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export function Login(){
  const {user, profile, setUser, setProfile} = useContext(UserContext)
  const navigate = useNavigate()
  

  



const login = useGoogleLogin({
  
  onSuccess: (codeResponse) => setUser(codeResponse) ,
  onError: (error) => console.log('Login Failed:', error)
});


useEffect(
  () => {
      if (user) {
        
        
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                  setProfile(res.data);
                  localStorage.setItem('user', JSON.stringify(res.data))
                  navigate('/')
              })
              .catch((err) => console.log(err));

      }
  },
  [ user ]
);






  return(
    <>
    <button className='border-2 px-24 py-2 flex justify-center items-center 
    rounded-md hover:bg-slate-100 transition-all'
    onClick={() => login()}>
      <img src="/img/googleIcon.webp" alt="" className='w-[30px]' />
      <span className='font-bold'>Continue with Google</span> </button>





    </>
  )
}