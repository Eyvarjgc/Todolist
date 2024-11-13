import { createContext } from "react"
import { BottomTask, AddTask } from "../components"
import { useAppContext } from '../Hooks/useAppContext';


export const TaskContext = createContext()

export function TaskView(){
  const {setTaskObject, setAddingTask, addingTask} = useAppContext()

 




  

  return(
      <div className="">
        {addingTask ? 
        <AddTask  /> : 
       

        
        < BottomTask  />
        
        }
      </div>

  )
}