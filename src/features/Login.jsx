
import { useGoogleLogin,GoogleLogin  } from '@react-oauth/google';
import { useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {useAppContext} from '../Hooks/useAppContext';
const ENDPOINT = import.meta.env.VITE_ENDPOINT;



export function Login(){
  const {user, profile, setUser, setProfile} = useAppContext()
  
  const navigate = useNavigate()

  

async function getNewToken(){
  const Refresh = JSON.parse(localStorage.getItem('Refresh'))

  const res = await axios.post('http://localhost:5000/todoList/refreshToken', {
    refreshToken: Refresh
  }, {header:{ 
    'Content-Type': 'application/json'} 
  })

  console.log(res);
  

}


const handleLogin = async (googleData) => {
  
  const res = await axios.post(`${ENDPOINT}/google-login`, {
  token: googleData.credential},
  {headers: {
  'Content-Type': 'application/json',
  },
  });

  
  setProfile(res.data);
  localStorage.setItem('user', JSON.stringify(res.data));
  localStorage.setItem('Token', JSON.stringify(res.data.Token));
  localStorage.setItem('Refresh', JSON.stringify(res.data.Refresh));

  navigate('/')
  };

  const getWithToken = async() => {
    const Refresh = JSON.parse(localStorage.getItem('Refresh'))
    const Token = JSON.parse(localStorage.getItem('Token'))

    const res = axios.get(`${ENDPOINT}/todoList/userInfo`, {
      header:{
        'Content-Type': 'application/json',
        'authorization': `Bearer ${Token}`
      }})

    console.log(res);
  }
  
    



  // const newToken = await getNewToken()

  // console.log(newToken);
  


  return(
    <>
    <GoogleLogin

        onSuccess={credentialResponse => {
          
          
        handleLogin(credentialResponse)
      }}
       cookiePolicy={'single_host_origin'}
      useOneTap

       onError={() => {
         console.log('Login Failed');
       }}
     />



    {/* <button className='border-2 px-24 py-2 flex justify-center items-center 
    rounded-md hover:bg-slate-100 transition-all'
    onClick={() => login()}>
      <img src="/img/googleIcon.webp" alt="" className='w-[30px]' />
      <span className='font-bold'>Continue with Google</span> </button> */}





    </>
  )
}