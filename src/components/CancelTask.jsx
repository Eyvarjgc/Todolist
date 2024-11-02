import { useContext } from "react"
import { TaskContext } from "../sections/TaskView"

export function CancelTask({setWarning}){

  const {setAddingTask} = useContext(TaskContext)


  return(
    <div className="">
    
    
    <span className="block  bg-black absolute z-40 left-0 right-0 bottom-0 top-0 m-auto w-full h-full bg-opacity-70"></span>

    <div className="absolute left-0 right-0 top-20    w-fit h-fit  z-50 bg-gray-500 border-orange-800 border   bg-opacity-70 m-auto p-4  rounded-3xl ">

      <div>
    <h1 className="font-bold">Discard unsaved changes? </h1>
    <p className="font-light text-sm">Your unsaved changes will be discarded.</p>

      </div>

      <div className="flex gap-4 justify-end mt-4">
        <button onClick={() => {setWarning(false)}} className="px-2 lg:px-4
          rounded-lg bg-white text-black w-fit">Cancel</button>
        <button onClick={() => {setAddingTask(false)}} className="px-2 lg:px-4 
          rounded-lg bg-orange-800 bg-opacity-50">Discard</button>

      </div>

    </div>

    </div>
 
  )
}
