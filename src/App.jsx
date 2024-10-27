// UTILS
import { BrowserRouter, Routes,Route, Link,useNavigate,useLocation } from 'react-router-dom'
import { useGoogleLogin  , googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useState,createContext, useEffect, useContext} from 'react'

// PAGES
import { Homepage } from './pages/homepage'
import { Today } from './pages/Today'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './pages/Login'
import { Topview } from './pages/Topview';
import { Finished } from './pages/Finished';
import { TodayButton } from './components/TodayButton';
import { CurrentDate } from './utils/Date';
import { AiView } from './pages/AiView';


export const APPContext  = createContext();


function App() {
  const [ user, setUser ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [day, setDay] = useState('');



  

  const navigate = useNavigate()
  const location = useLocation()

  
  

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });
  


  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if(storedUser){
      
      setProfile(JSON.parse(storedUser))

      
    }
    else{
      navigate('/login')

    }
  }, [])
  
  

  return (
    <div className='z-20 text-white'>
    
    <APPContext.Provider value={{setUser,setProfile,user,profile,setDay}}>
    {location.pathname === '/login' ? <Login /> :
    <>

      <Topview />

      <section className='w-full py-4 flex   text-black mt-8 
      '>

      <section className='w-[21%] p-4'>
      <ul className=' flex gap-3 flex-row w-fit items-center justify-center 
      bg-gradient-to-r from-black bg-orange-900 bg-opacity-55  
      absolute bottom-4 right-0 left-0 p-2 border rounded-xl 
      mx-auto my-0 opacity-90 
       lg:flex-col lg:relative '>


        <Link to="/" ><img src="/img/homeIcon.svg" alt="" className='w-[40px] h-[40px] hover:bg-orange-700 hover:bg-opacity-60 rounded-3xl p-1          transition-all hover:scale-110'/></Link>

        <button><img src="img/addtaskIcon.svg" className='w-[40px] h-[40px] hover:bg-orange-700 hover:bg-opacity-60 rounded-3xl p-1 transition-all hover:scale-110' alt="" /></button>

        <TodayButton date={day} />

        <Link to="/finished"><img src="/img/doneIcon.svg" alt="" className='w-[40px] h-[40px] hover:bg-orange-700 hover:bg-opacity-60 rounded-3xl p-1 transition-all hover:scale-110'/></Link>
        
      </ul>
      </section>
      
      <section className='text-white lg:w-1/2 font-mono lg:text-4xl'>

      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/today' element={<Today />} />
        <Route path='/login' element={<Login />} />
        <Route path='/finished' element={<Finished/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      </section>

      <section className='hidden text-white lg:flex bg-gradient-to-b 
      from-orange-950 bg-black bg-opacity-30 w-1/4 ml-5 rounded-3xl 
      p-4 border '>
      <AiView/> 

      </section>

      </section>

    </>}


    <CurrentDate />

    </APPContext.Provider>

    </div>
  )
}

export default App
