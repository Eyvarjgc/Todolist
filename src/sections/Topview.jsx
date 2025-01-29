import { UserProfile } from "../features/UserProfile"
import { SearchInput } from "../features/SearchInput"


export function Topview(){


  return(
  <>
    <nav className="w-full py-4 flex justify-evenly items-center orbitron ">

      <img src="/img/Tofacio.png" 
      alt="temporal logo" 
      className="w-[30px]  sm:w-[60px] "/>


  <form class=" w-2/4">   
    <SearchInput />
  </form>

   <UserProfile />


    </nav>
    </>
  )
}