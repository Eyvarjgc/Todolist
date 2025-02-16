// UTILS
import { BrowserRouter, Routes,Route,useLocation } from 'react-router-dom'
// import { useGoogleLogin  , googleLogout } from '@react-oauth/google';
// import axios from 'axios';

// PAGES
import { Homepage } from './pages/Homepage';
import { Today } from './pages/Today'
import { ErrorPage } from './pages/ErrorPage'
import { Login } from './features/Login'
import { Topview } from './sections/Topview';
import { Finished } from './pages/Finished';
import { CurrentDate } from './utils/Date';
import { AiView } from './sections/AiView';
import { NavItem } from './sections/NavItem';
import { BottomView } from './sections/BottomView';


import { UserProvider } from './Hooks/useContexts';
import { TaskProvider } from './Hooks/useContexts';



function App() {
  const location = useLocation()


  


  


  return (
    <div className=' text-white  '>
    <TaskProvider>
      <UserProvider>
        


      { location.pathname === '/login' ? <Login /> :

      <>

      <Topview />

      <section 
      className='w-full py-4 flex   text-black mt-8'>

        <section className='w-[21%] p-4'>

        
        <NavItem/>


        </section>

        <section className='text-white w-full lg:w-1/2  font-mono lg:text-4xl  '>
          <Routes >
            <Route path='/' element={<Homepage  />} />
            <Route path='/today' element={<Today />} />
            <Route path='/login' element={<Login />} />
            <Route path='/finished' element={<Finished/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </section>

        {/* <section className='hidden text-white lg:flex
        bg-gradient-to-b from-orange-950 bg-black
        bg-opacity-30 w-1/4 h-96 ml-5 rounded-3xl p-4  border '>

          <AiView/> 

        </section> */}

      </section>

      <div><BottomView /></div>

    </> }


<CurrentDate />


      </UserProvider>
    </TaskProvider>
    </div>
  )
}

export default App
