import { Link } from "react-router-dom";

export function TodayButton({date}){

        

  return(
    <>
       <Link to="/today" > 
          <button className='w-[35px] h-[35px] flex flex-col  bg-white rounded-xl text-black  justify-center items-center todayButton hover:bg-orange-700 hover:bg-opacity-60  p-1 transition-all hover:text-white'>
            <p className='mt-1 text-lg'>{date}</p>
          </button>
        </Link>

    </>
  )
}