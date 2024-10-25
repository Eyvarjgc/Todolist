// UTILS
import { BrowserRouter, Routes,Route, Link,useNavigate,useLocation } from 'react-router-dom'
import { useGoogleLogin  , googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useState,createContext, useEffect} from 'react'

// PAGES
import { Homepage } from './pages/homepage'
import { Today } from './pages/Today'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './pages/Login'
import { Topview } from './pages/Topview';
export const APPContext  = createContext();


function App() {
  const [ user, setUser ] = useState('');
  const [ profile, setProfile ] = useState('');

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
    <div className='z-20'>
    
    <APPContext.Provider value={{setUser,setProfile,user,profile}}>
    {location.pathname === '/login' ? <Login /> :
    <>
      <Topview />

      <div className='flex gap-8 flex-col'>
        <Link to="/" >Home</Link>
        <Link to="/today">Today</Link>
      </div>



      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/today' element={<Today />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </>}



    </APPContext.Provider>

    </div>
  )
}

export default App
