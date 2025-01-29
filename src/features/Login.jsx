
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
    <div className='w-full py-4 flex   text-black mt-8  flex-col '>

    <div className='w-full flex py-4 items-center orbitron text-white gap-4 sm:gap-24  justify-center'>
      <img src="/public/img/Tofacio.png" alt="" className='w-[50px]  sm:w-[80px] '/>
      <h1 className=' text-xl md:text-2xl lg:text-3xl'>Topafist</h1>
    </div>



    <div className='flex flex-col lg:flex-row orbitron mx-auto mt-24 lg:mt-28 w-4/5 lg:gap-72 gap-40 items-center justify-center '>
    <div className='flex-col gap-8 items-center justify-center text-center'>
      <h1 className='text-3xl  lg:text-5xl text-white mb-8'>Sign in</h1>

    <GoogleLogin size={'large'} shape='pill' text='signin_with'  width="100"  
        onSuccess={credentialResponse => {
        handleLogin(credentialResponse)

      }}
       cookiePolicy={'single_host_origin'}
      useOneTap

       onError={() => {
         console.log('Login Failed');
        }}
      />

    </div>

      <img src="/public/img/ilus1.png" alt="" className='w-72 lg:w-96'/>



    </div>



    {/* <button className='border-2 px-24 py-2 flex justify-center items-center 
    rounded-md hover:bg-slate-100 transition-all'
    onClick={() => login()}>
      <img src="/img/googleIcon.webp" alt="" className='w-[30px]' />
      <span className='font-bold'>Continue with Google</span> </button> */}





    </div>
  )
}