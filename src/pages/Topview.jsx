import { useRouteError } from "react-router-dom"
import { useContext, useState } from "react"
import { APPContext } from "../App"
import { googleLogout } from "@react-oauth/google"


export function Topview(){
  const {profile, setProfile} = useContext(APPContext)
  const [profileView, setProfileView] = useState(false)



  const logOut = () => {
    googleLogout();
    localStorage.removeItem('user')
    setProfile(null);
    navigate('/login')
  };

  return(
    <>
    <nav className="w-full    py-4 flex justify-evenly items-center">
      <img src="/img/todoLogo.webp" alt="temporal logo" className="w-[30px] rounded-3xl sm:w-[40px] "/>



      <form class=" w-2/4">   
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm bg-gradient-to-b from-black bg-gray-700 bg-opacity-50 text-white rounded-3xl " placeholder="Search Tasks" required />
    </div>
</form>


        

      {profile &&
      <>

      <button onClick={() => {setProfileView(!profileView)}}
      className="inline-flex w-fit items-center justify-end  gap-2 
      text-white  transition-all 
       p-1 rounded-xl userProfile group 
       lg:translate-x-20 relative ">
        
        <img  src={profile.picture} alt="" className="w-[30px] sm:w-[40px] rounded-3xl  group-hover:opacity-50"   />
        <p className="font-medium userName hidden md:block 
        group-hover:opacity-50 transition-all">| {profile.given_name}</p>
        
        <span className=" hidden sm:block group-hover:opacity-50 
        transition-all "><img src="/img/lowArrow.png" alt="" className="w-[20px]"/></span>


        
        <ul className=" bg-gray-700 bg-opacity-45 userOptions  rounded-3xl 
        text-white  z-50 shadow-md hidden px-2">

          <li className="p-2 ">
            <button className="flex justify-start items-center gap-3 w-full p-2 font-light rounded-md
            hover:bg-gray-800 ">
            <img src="/img/themeIcon.png" alt="" className="w-[20px]" />
            <span>Theme</span>
            </button>
          </li>
        <hr className="w-full"/>
          <li className="p-2"> 
            <button onClick={logOut} className="flex justify-start items-center 
            w-full  gap-3 font-light p-2 rounded-md hover:bg-gray-800">

              <img src="/img/logoutIcon.png" alt="" className="w-[20px]" />
              <span>Log out</span>

            </button> 
          </li>

        </ul>
        
      </button> 
      
      

      </>
    }

      

    </nav>
    
    </>
  )
}