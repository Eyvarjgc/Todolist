import { useRouteError } from "react-router-dom"
import { useState,useContext } from "react"
import { useHandleTask } from "../Hooks/useHandleTask";
import { useAppContext } from "../Hooks/useAppContext";

import { AddTask } from "./BottomTask";

export function TaskQuickInfo({task,desc,taskID }){
  const {deleteTask, editTask} = useHandleTask()
  const {edittingTask, setEdittingTask} = useAppContext()
  const [isEditing, setIsEditing ] = useState(false)

  const taskName = task.length > 20 ? task.slice(0, 20) : task;
  const description = desc.length >= 30 ? desc.slice(0, 30) : desc;

  
  
  
  

  return(

  <>
  {isEditing ?    
   <div className="taskQuickView p-2 w-full h-12 md:h-[45px] bg-opacity-90 
      flex  gap-1 bg-red-900  rounded-xl " >
 
       <span className="  ">
       <input id="default-checkbox" type="checkbox" value="" class="appearance-none w-4 h-4
        border  border-white rounded-2xl checked:bg-white mt-1 " />
 
       </span>
 
 
       <span className="flex w-full flex-wrap items-center justify-between">
 
       <span className="w-fit gap-0">
         <p className="font-semibold text-wrap w-fit break-all capitalize text-[10px]  sm:text-sm transition-all ">{taskName}</p>
         <p className="font-thin text-opacity-55 text-gray-50 text-[8px] sm:text-xs  transition-all hidden md:block">{description}</p>
       </span>
 
       <span className=" text-gray-50 text-opacity-55 text-[10px] md:text-xs mr-4  transition-all flex">
         <p>oct 13</p>
         <span>|</span>
         <p>Exciting</p>
       </span>
       </span>
 
       <span className="flex  items-center gap-2 md:gap-4 transition-all">
         <button  onClick={() => {deleteTask(taskID)}}
         className="bg-black bg-opacity-70 border p-1 border-orange-700
          w-6  md:w-7 md:h-7 rounded-md ">
           <img src="/img/icons/deleteIcon.svg" alt="" className="" />
         </button>
 
         <button onClick={() => {setIsEditing(!isEditing)}} 
         className="bg-black bg-opacity-70 border p-1 border-orange-700
          w-6 md:w-7 md:h-7  rounded-md " data-taskid={taskID}>
           <img src="/img/icons/editIcon.svg" alt="" className=""/>
         </button>
       </span>
      
     </div> 

  

     :  

        <div className="taskQuickView p-2 w-full h-12 md:h-[45px] bg-opacity-90 
      flex  gap-1 bg-gradient-to-l from-black bg-orange-900  rounded-xl " >
 
       <span className="  ">
       <input id="default-checkbox" type="checkbox" value="" class="appearance-none w-4 h-4
        border  border-white rounded-2xl checked:bg-white mt-1 " />
 
       </span>
 
 
       <span className="flex w-full flex-wrap items-center justify-between">
 
       <span className="w-fit gap-0">
         <p className="font-semibold text-wrap w-fit break-all capitalize text-[10px]  sm:text-sm transition-all ">{taskName}</p>
         <p className="font-thin text-opacity-55 text-gray-50 text-[8px] sm:text-xs  transition-all hidden md:block">{description}</p>
       </span>
 
       <span className=" text-gray-50 text-opacity-55 text-[10px] md:text-xs mr-4  transition-all flex">
         <p>oct 13</p>
         <span>|</span>
         <p>Exciting</p>
       </span>
       </span>
 
       <span className="flex  items-center gap-2 md:gap-4 transition-all">
         <button  onClick={() => {deleteTask(taskID)}}
         className="bg-black bg-opacity-70 border p-1 border-orange-700
          w-6  md:w-7 md:h-7 rounded-md ">
           <img src="/img/icons/deleteIcon.svg" alt="" className="" />
         </button>
 
         <button onClick={() => {setIsEditing(!isEditing)}} 
         className="bg-black bg-opacity-70 border p-1 border-orange-700
          w-6 md:w-7 md:h-7  rounded-md " data-taskid={taskID}>
           <img src="/img/icons/editIcon.svg" alt="" className=""/>
         </button>
       </span>
      
     </div>}
  </>
 
    
    


  )
}