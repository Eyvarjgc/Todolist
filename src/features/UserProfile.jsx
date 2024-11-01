import { useContext, useState } from "react"
import { UserContext } from "../App"
import { googleLogout } from "@react-oauth/google"




export function UserProfile(){

  const {profile, setProfile} = useContext(UserContext)
  const [profileView, setProfileView] = useState(false)
  
  const logOut = () => {
    googleLogout();
    localStorage.removeItem('user')
    setProfile(null);
    navigate('/login')
  };

  return(
    <div className="">
       {profile &&
      <>

      <button onClick={() => {setProfileView(!profileView)}}
      className="inline-flex w-fit items-center justify-end  gap-2 
      text-white  transition-all p-1 rounded-xl userProfile group 
       lg:translate-x-20 relative ">
        
        <img
        src={profile.picture} alt="" 
        className="w-[30px] sm:w-[40px] rounded-3xl  group-hover:opacity-50"/>

        <p className="font-medium userName hidden md:block 
        group-hover:opacity-50 transition-all">| {profile.given_name}</p>
        
        <span className="hidden sm:block group-hover:opacity-50
        transition-all "><img src="/src/assets/icons/lowArrow.png"
        alt="" className="w-[20px]"/></span>


        <ul className=" bg-gray-700 bg-opacity-45 userOptions
        rounded-3xl text-white  z-50 shadow-md hidden px-2">
          <li className="p-2 ">

            <button className="flex justify-start items-center gap-3
             w-full p-2 font-light rounded-md hover:bg-gray-800 ">
            <img src="/src/assets/icons/themeIcon.png" alt="" className="w-[20px]" />
            <span>Theme</span>
            </button>

          </li>

        <hr className="w-full"/>

          <li className="p-2"> 

            <button onClick={logOut} className="flex justify-start items-center 
            w-full  gap-3 font-light p-2 rounded-md hover:bg-gray-800">
              <img src="/src/assets/icons/logoutIcon.png" alt="" className="w-[20px]" />
              <span>Log out</span>
            </button> 

          </li>
        </ul>
        
      </button> 

      </>
    }
    </div>
  )
}