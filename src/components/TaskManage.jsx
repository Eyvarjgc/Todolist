import { useEffect, useState } from "react"
import { useAppContext } from "../Hooks/useAppContext"
import { useHandleTask } from "../Hooks/useHandleTask"
// import { EditTask } from "./EditTask"
import { AddTask } from "./AddTask"


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


  function onSubmit(task){
    if(isEditing){
      EditTask(task)
    }else{
      setTaskObject([...taskObject, task])

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