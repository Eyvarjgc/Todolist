import { useRouteError } from "react-router-dom"
import { useAppContext } from "./useAppContext"
import { useState, useEffect } from "react"



export function useHandleTask(){
  const {taskObject, setTaskObject} = useAppContext()

  

  function EditTask(taskId, objectToSave){

    setTaskObject((prevTask) => {
    const index = prevTask.findIndex((item) => item.ID === taskId)

    if (index !== -1) {
      return prevTask.map((task, i) => i=== index ? { ...task, ...objectToSave} : task)
    } else{
      return [...prevTask, objectToSave]
    }
    
      
      
    })

  
  }

  function deleteTask(taskID){
    const filterTaskByID = taskObject.filter(Element => Element.ID != taskID)
    setTaskObject(filterTaskByID)

  }

  return {deleteTask,EditTask}
}