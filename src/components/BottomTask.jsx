
import { useContext, useState } from "react";
import { CancelTask } from "./CancelTask";

import { useAppContext } from '../Hooks/useAppContext';


export function BottomTask({}){
  const { setAddingTask, addingTask} = useAppContext()

  
  return(
    <div className="hidden lg:flex py-4
    justify-evenly items-center absolute
    w-full bottom-8 orbitron z-0">


      <button onClick={() => {setAddingTask(!addingTask)}} 
        className="flex justify-start items-center 
        bg-gradient-to-b from-black bg-gray-700 border 
        bg-opacity-50 w-2/4 mx-auto my-0 inset-y-0 text-xl
        rounded-3xl  border-white -translate-x-14 p-1">

        <img src="/img/icons/addtaskIcon.svg" 
        className='w-[40px] h-[40px]
        rounded-3xl p-1 transition-all' alt="" />

        <span>New task</span>

      </button>


    </div>
  )
}




