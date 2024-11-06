import { useRouteError } from "react-router-dom"
import { useState } from "react"

export function TaskQuickInfo({task,desc }){
  const taskName = task.length > 20 ? task.slice(0, 20) : task;
  const description = desc.length >= 30 ? desc.slice(0, 30) : desc;


  

  return(
    //     
    // flex gap-1 justify-center 
    <div className="taskQuickView p-2 w-full lg:h-[45px] bg-opacity-90 
     flex  gap-1 bg-gradient-to-l from-black bg-orange-900  rounded-2xl" >

{/* Check button */}
      <span className="  ">
      <input id="default-checkbox" type="checkbox" value="" class="appearance-none w-4 h-4
       border  border-white rounded-2xl checked:bg-white  " />

      </span>


{/* Task name and descirption */}
      <span className="flex flex-wrap flex-col  w-full  justify-center ">

      <span className="w-fit ">
        <h2 className="font-semibold text-xl  text-wrap w-fit break-all capitalize">{taskName}</h2>
        <p className="font-thin text-opacity-55 text-gray-50 text-xs">{description}</p>
      </span>

      <span className="flex text-gray-50 text-opacity-55 text-xs items-end justify-end  mr-4">
        <p>oct 13</p>
        <span>|</span>
        <p>Exciting</p>
      </span>
      </span>

{/* Buttons delete and edit */}
      <span className="flex  items-center gap-4">
        <button className="bg-black bg-opacity-70 border p-1 border-orange-700 w-8 h-8 rounded-md ">
          <img src="/img/icons/deleteIcon.svg" alt="" className="" />
        </button>

        <button className="bg-black bg-opacity-70 border p-1 border-orange-700 w-8 h-8  rounded-md ">
          <img src="/img/icons/editIcon.svg" alt="" className=""/>
        </button>
      </span>
     
    </div>

    
  )
}