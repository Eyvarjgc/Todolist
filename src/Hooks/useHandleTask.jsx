import { useRouteError } from "react-router-dom"
import { useAppContext } from "./useAppContext"
import { useState, useEffect } from "react"
import axios from "axios"



export function useHandleTask(){
  const {taskObject, setTaskObject,setAddingTask, setAddTaskMobile,setIsEditing} = useAppContext()

  const HandleCancelTask = (notEmpty, setWarning, taskName, editTask) => {

    if(notEmpty === taskName){      
      setIsEditing(false)
      editTask(false)
    }else{

      {notEmpty ? setWarning(true) : 
        setAddingTask(false) || setAddTaskMobile(false);   }

    }
  }

  async function EditTask(objectToSave){
    try {
      const {ID} = objectToSave
      const {Token} = JSON.parse(localStorage.getItem('user'))
      
      const res = await axios.put(`http://localhost:5000/todoList/updateTask/${ID}`,
        JSON.stringify(objectToSave),
        {
        headers:{
          "Content-Type": "application/json",
          "authorization": `Bearer ${Token}`
        },
      })
    
      console.log(res);
      
    
    setTaskObject((prevTask) => {
    const index = prevTask.findIndex((item) => item.ID === objectToSave.ID)
    if (index !== -1) {
      return prevTask.map((task, i) => i=== index ? { ...task, ...objectToSave} : task)
    } else{
      return [...prevTask, objectToSave]
    }
    
      
      
    })
    } catch (error) {
      console.log(error);
      
    }

  
  }

  function deleteTask(taskID){
    const filterTaskByID = taskObject.filter(Element => Element.ID != taskID)
    setTaskObject(filterTaskByID)

  }

  return {deleteTask,EditTask,HandleCancelTask}
}