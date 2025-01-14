import { Link } from "react-router-dom" 
import { useState } from "react";
import { FormTask } from "./TaskManage";

import { useAppContext } from '../Hooks/useAppContext';

export function NavButton({img, buttonValidation, to}){
  const {addingTask, setAddingTask, addTaskMobile, setAddTaskMobile} = useAppContext() 



  return(
    <>
    {addTaskMobile  
    && <div className="fixed w-full h-full right-32 top-0
        left-0 m-auto    inset-0 lg:bg-black lg:bg-opacity-50  ">


        <div className="fixed w-full lg:h-1/2   m-auto left-0
        lg:right-32 lg:top-0  bottom-20 lg:bottom-[10%] ">

        {/* <AddTask  hideButton={setAddTaskMobile}/>  */}

        <FormTask  />  

        </div>
      </div>
    }
 
    
    {buttonValidation ?  <button >
        <img src={`/img/icons/${img}`} onClick={() => {setAddTaskMobile(!addTaskMobile); 
        }}
        className='w-[40px] h-[40px] hover:bg-orange-700 hover:bg-opacity-60
        rounded-3xl p-1 transition-all hover:scale-110' alt="" />
      </button> 

      :

      <Link to={to} >
      <img src={`/img/icons/${img}`}
      alt="" className='w-[40px] h-[40px]
      hover:bg-orange-700 hover:bg-opacity-60
        rounded-3xl p-1 transition-all hover:scale-110'/>
      </Link>}

      


    </>
  )
}