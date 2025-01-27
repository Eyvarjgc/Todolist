import { useEffect, useState } from "react"
import { useAppContext } from "../Hooks/useAppContext"
import { useHandleTask } from "../Hooks/useHandleTask"
// import { EditTask } from "./EditTask"
import { AddTask } from "./AddTask"
import { useApiCall } from "../features/useApiCall"
import axios from "axios"
const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export function FormTask({children }){
  const {EditTask} = useHandleTask()
  const {taskObject, setTaskObject, isEditing, setIsEditing} = useAppContext() 
  const [warning, setWarning] = useState('')
  const [currentTask, setCurrentTask] = useState(null);
  


  function handleSaveTask(){
    setIsEditing(false)
    setCurrentTask(null)
    
  }

  function handleEditTask(task){
    setIsEditing(true)
    setCurrentTask(task)
  }


  async function onSubmit(task){
    if(isEditing){
      EditTask(task)
    }else{
      try{
        
        const Token = JSON.parse(localStorage.getItem('Token'))
        const response = await fetch(`${ENDPOINT}/todoList/addTask`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 
            "authorization": `Bearer ${Token}`
          },
          body: JSON.stringify(task),
        }); 
        
        
        setTaskObject([...taskObject, task])




      }catch(err){
        console.log(err);
        
      }
    }
    setIsEditing(false)
    setCurrentTask(null)
  }

  return( 
    <>
    {isEditing ? <EditTask initialTask={currentTask} onSubmit={onSubmit} /> 
    : <AddTask OnSaveTask={handleSaveTask}  onSubmit={onSubmit}/>  }
    </>
)
}