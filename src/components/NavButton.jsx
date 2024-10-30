import { Link } from "react-router-dom" 

export function NavButton({img, buttonValidation, to}){

  return(
    <>
    
    {buttonValidation ?   <button >

        <img src={`src/assets/icons/${img}`} 
        className='w-[40px] h-[40px] hover:bg-orange-700 hover:bg-opacity-60
        rounded-3xl p-1 transition-all hover:scale-110' alt="" />
        </button>  

        :     

        <Link to={to} >
        <img src={`src/assets/icons/${img}`}
        alt="" className='w-[40px] h-[40px]
        hover:bg-orange-700 hover:bg-opacity-60
          rounded-3xl p-1 transition-all hover:scale-110'/>
      </Link>
      
    }

      


    </>
  )
}