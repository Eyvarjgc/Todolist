// UTILS
import { BrowserRouter, Routes,Route, Link,useNavigate,useLocation } from 'react-router-dom'
import { useGoogleLogin  , googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useState,createContext, useEffect, useContext} from 'react'

// PAGES
import { Homepage } from './pages/Homepage';
import { Today } from './pages/Today'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './features/Login'
import { Topview } from './sections/Topview';
import { Finished } from './pages/Finished';
import { CurrentDate } from './utils/Date';
import { AiView } from './sections/AiView';
import { BottomTask, AddTask } from './components/BottomTask';
import { NavItem } from './sections/NavItem';
import { TaskView } from './sections/TaskView';



export const UserContext  = createContext();
export const AppContext = createContext()

function App() {
  const [ user, setUser ] = useState(null);
  const [ profile, setProfile ] = useState('');
  const [day, setDay] = useState('');
  const [activeTask, setActiveTask] = useState('')
  const [taskObject, setTaskObject] = useState([])
  const [addingTask, setAddingTask] = useState(false)


  

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
    // z-20 for what ?
    <div className=' text-white  '>
    
    <AppContext.Provider value={{taskObject,setTaskObject,setAddingTask, addingTask}}>
    <UserContext.Provider value={{setUser,setProfile,user,profile,setDay}}>
    
    {location.pathname === '/login' ? <Login /> :
    
    <>

      <Topview />

      <section className='w-full py-4 flex   text-black mt-8 
      '>

      <section className='w-[21%] p-4'>

        
      <NavItem day={day}/>


      </section>

      <section className='text-white w-full lg:w-1/2  font-mono lg:text-4xl  '>
      <Routes >
        <Route path='/' element={<Homepage taskObject={taskObject} />} />
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

      <div>

      <TaskView />

      </div>
    </>}


    <CurrentDate />
    </UserContext.Provider>
    </AppContext.Provider>
    </div>
  )
}

export default App
