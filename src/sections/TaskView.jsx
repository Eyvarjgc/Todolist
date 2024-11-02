import { useState,  useContext, createContext } from "react"
import { BottomTask, AddTask, NavButton } from "../components"
import  { AppContext } from "../App"
import { CancelTask } from "../components/CancelTask"

export const TaskContext = createContext()

export function TaskView(){
  const {setTaskObject, setAddingTask, addingTask} = useContext(AppContext)

 
  function handleTask(){
    // setAddingTask(true)
    setAddingTask(!addingTask)

  }



  const states = {
    setTaskObject,
    handleTask,
    setAddingTask,
    addingTask
  }

  

  return(
    <TaskContext.Provider value={states} >
      <div className="">
        {addingTask ? 
        <AddTask  /> : 
       

        
        < BottomTask  handleTask={handleTask}/>
        
        }
      </div>

    </TaskContext.Provider>
  )
}