import { createContext } from "react"
import { BottomTask } from "../components"
import { useAppContext } from '../Hooks/useAppContext';


import { FormTask } from "../components/TaskManage";

export const TaskContext = createContext()

export function BottomView(){
  const { addingTask} = useAppContext()


  return(
      <>
        {addingTask ? 
        <div className="absolute bottom-10 w-full">
          <FormTask />
        </div> 
        : 
        <div className=" z-0">< BottomTask  /> </div>
        }


      </>

  )
}