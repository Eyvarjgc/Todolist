import { Link } from "react-router-dom" 
import { useContext, useState, useEffect } from "react";
import { AddTask } from "./BottomTask";
import { TaskContext } from "../sections/TaskView";
import { TaskView } from "../sections/TaskView";
import { AppContext } from "../App";

export function NavButton({img, buttonValidation, to}){
  const [addNewTaskButton, setAddNewTaskButton] = useState(false) //false
  
  const {addingTask, setAddingTask} = useContext(AppContext) 
  console.log(addingTask);
  

  return(
    <>
    {addNewTaskButton  &&    <div className="fixed w-full h-full right-32 top-0  left-0 m-auto  bg-black bg-opacity-20 z-50 inset-0">
        <div className="fixed w-full h-1/2   m-auto left-0 lg:right-32 top-0">
        <AddTask  hideButton={setAddNewTaskButton}/> : 
        
        </div>
    </div>}
 
    
    {buttonValidation ?   <button >

        <img src={`/img/icons/${img}`} onClick={() => {setAddNewTaskButton(!addNewTaskButton); 
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
      </Link>
      
    }

      


    </>
  )
}