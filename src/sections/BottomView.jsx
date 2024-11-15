import { createContext } from "react"
import { BottomTask } from "../components"
import { useAppContext } from '../Hooks/useAppContext';

import { AddTask } from "../components/AddTask";

import { TaskRoot } from "../components/TaskRoot";

export const TaskContext = createContext()

export function BottomView(){
  const { addingTask} = useAppContext()


  return(
      <>
        {addingTask ? 
        <div className="absolute bottom-10 w-full">
        <TaskRoot>
          <AddTask  />  
        </TaskRoot>
        </div> 
        : 
        <div className="bg-red-600 z-0">< BottomTask  /> </div>
        }


      </>

  )
}