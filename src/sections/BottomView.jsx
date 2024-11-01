import { useState,  useContext, createContext } from "react"
import { BottomTask, AddTask } from "../components"
import { AppContext } from "../App"

export const TaskContext = createContext()

export function BottomView(){
  const [addingTask, setAddingTask] = useState()

  const {setTaskObject} = useContext(AppContext)

 
  function handleTask(){
    setAddingTask(true)
  }



  const states = {
    setAddingTask,
    setTaskObject,
  }

  

  return(
    <TaskContext.Provider value={states} >
      <div className="">
        {addingTask ? 
        <AddTask /> : 
        
        < BottomTask  handleTask={handleTask}/>
        
        }
      </div>

    </TaskContext.Provider>
  )
}