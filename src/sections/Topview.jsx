import { UserProfile } from "../features/UserProfile"
import { SearchInput } from "../features/SearchInput"


export function Topview(){


  return(
  <>
    <nav className="w-full py-4 flex justify-evenly items-center orbitron ">

      <img src="/img/todoLogo.webp" 
      alt="temporal logo" 
      className="w-[30px] rounded-3xl sm:w-[40px] "/>


  <form class=" w-2/4">   
    <SearchInput />
  </form>

   <UserProfile />


    </nav>
    </>
  )
}