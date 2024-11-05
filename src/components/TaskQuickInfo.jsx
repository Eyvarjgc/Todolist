import { useRouteError } from "react-router-dom"
import { useState } from "react"

export function TaskQuickInfo({task,desc }){
  const taskName = task.length > 10 ? task.slice(0, 10) : task;
  const description = desc.length >= 15 ? desc.slice(0, 15) : desc;


  

  return(
    //     
    // flex gap-1 justify-center 
    <div className="taskQuickView p-2 w-[30%] border bg-opacity-50
     flex justify-center gap-1 bg-gradient-to-r from-black
      bg-orange-900 rounded-2xl" >

      <span className=" w-fit ">
      <input id="default-checkbox" type="checkbox" value="" class="appearance-none w-4 h-4 border  border-white rounded-2xl checked:bg-white mt-2 " />

      </span>

      <span className="flex flex-wrap flex-col  w-3/4 ">

       <h2 className="font-semibold text-lg  text-wrap w-fit break-all">{taskName}</h2>
      <p className="font-thin text-opacity-55 text-gray-50 text-xs">{description}</p>

      <span className="flex text-gray-50 text-opacity-55 text-xs">
        <p>oct 13</p>
        <span>|</span>
        <p>Exciting</p>
      </span>
      </span>

      <span className="flex flex-col  w-1/6 items-end  justify-end gap-1">
        <button className="bg-black bg-opacity-70 border border-orange-700 w-8 h-8 rounded-md ">
          <img src="/img/icons/deleteIcon.svg" alt="" className="" />
        </button>

        <button className="bg-black bg-opacity-70 border border-orange-700 w-8 h-8  rounded-md ">
          <img src="/img/icons/editIcon.svg" alt="" className=""/>
        </button>
      </span>
     
    </div>

    
  )
}