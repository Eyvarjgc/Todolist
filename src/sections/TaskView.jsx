import { createContext } from "react"
import { BottomTask, AddTask } from "../components"
import { useAppContext } from '../Hooks/useAppContext';


export const TaskContext = createContext()

export function TaskView(){
  const {setTaskObject, setAddingTask, addingTask} = useAppContext()

 
  function handleTask(){
    setAddingTask(!addingTask)

  }



  

  return(
      <div className="">
        {addingTask ? 
        <AddTask  /> : 
       

        
        < BottomTask  handleTask={handleTask}/>
        
        }
      </div>

  )
}