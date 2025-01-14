import { useContext, useState, useEffect } from "react"
import { useAppContext } from "../Hooks/useAppContext"
import { TaskQuickInfo } from "../components/TaskQuickInfo"

export function Finished(){
  const {taskObject, filteredTaskObject, searchingTask} = useAppContext()

  
   
  const filteredByFinished = taskObject.filter((element) => {
    return element.checked == true
  })

  

  const filteredTaskObjectByFinished = filteredTaskObject.filter((element) => {
    return element.checked == true
  })

  
  const listItemByFinished = filteredTaskObjectByFinished.map((item) => {

    return <TaskQuickInfo 
    checked={item.checked}
     desc={item.description}
      key={item.ID} task={item.name}
       taskID={item.ID} date={item.date}
        mood={item.mood}/>

  }
  )

  


  // VALIDATION IF SEARCHINPUT IS FALSE
  const listItem = filteredByFinished.map((item) => {

    return <TaskQuickInfo 
    checked={item.checked}
     desc={item.description}
      key={item.ID} task={item.name}
       taskID={item.ID} date={item.date}
        mood={item.mood}/>

  }
  )

  return(
    <div className='orbitron absolute  w-full left-0   lg:static    z-10 
    lg:p-0 '>
   <h1 className='text-xl text-center lg:text-start '>Finished - Dashboard</h1>
   <div className='orbitron text-sm mt-4 z-40 flex gap-4 flex-wrap px-12 lg:px-0 '>

   {searchingTask === false ? listItem : filteredTaskObject.length > 0 && listItemByFinished }
    
    

    </div>
    </div>
  )
}