import { useRouteError } from "react-router-dom"
import { useAppContext } from "./useAppContext"
import { useState, useEffect } from "react"



export function useHandleTask(){
  const {taskObject, setTaskObject} = useAppContext()

  function editTask(event){
    // const taskByID = taskObject.map(Element => (Element.ID === taskID ? ))



    console.log(event);

  }

  function deleteTask(taskID){
    const filterTaskByID = taskObject.filter(Element => Element.ID != taskID)
    setTaskObject(filterTaskByID)

  }

  return {deleteTask,editTask}
}