import { useAppContext } from '../Hooks/useAppContext';

export function CancelTask({setWarning, editTask }){
  const {addingTask,setAddingTask, setAddTaskMobile,setIsEditing} = useAppContext()


  return(
    <div className="">
    
    {/* Cancel Task Warning background */}
    <span className="block  bg-black fixed z-40 left-0 right-0 bottom-0 top-0 m-auto w-full h-full bg-opacity-70 "></span>

    {/* Cancel Task Warning */}

    <div className="fixed left-0 right-0 top-1/2 lg:top-20 z-50   w-fit lg:w-1/4 h-fit  bg-gray-950 border-orange-800 border   
     m-auto p-4  rounded-3xl text-white ">

      <div>
    <h1 className="font-bold">Discard unsaved changes? </h1>
    <p className="font-light text-base mt-2">Your unsaved changes will be discarded.</p>

      </div>

      <div className="flex gap-4 justify-end mt-4">
        <button onClick={() => {setWarning(false)}} className="px-2 lg:px-4 lg:py-1 
          rounded-md bg-white text-black w-fit">Cancel</button>
        <button onClick={() => {setAddingTask(false) || setAddTaskMobile(false); setIsEditing(false); editTask(false); }} className="px-2 lg:px-4 lg:py-1 
          rounded-md bg-orange-800 bg-opacity-50">Discard</button>

      </div>

    </div>

    </div>
 
  )
}
