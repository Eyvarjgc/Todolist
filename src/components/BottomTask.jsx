
import { useContext, useState } from "react";
import { CancelTask } from "./CancelTask";


import { AppContext } from "../App";
import { TaskContext } from "../sections/TaskView";




export function BottomTask({handleTask}){

  return(
    <div className="hidden lg:flex py-4  justify-evenly items-center absolute w-full bottom-8 orbitron">

      


    <button onClick={handleTask} 
    className="flex justify-start items-center 
   bg-gradient-to-b from-black bg-gray-700 border 
   bg-opacity-50 w-2/4 mx-auto my-0 inset-y-0 text-xl rounded-3xl  border-white -translate-x-14 p-1">
      <img src="/img/icons/addtaskIcon.svg" 
      className='w-[40px] h-[40px] 
        rounded-3xl p-1 transition-all
        ' alt="" />
      
      <span>New task</span>
    </button>


    </div>
  )
}

export function AddTask({hideButton}){
  const [changeNameTask, setChangeNameTask] = useState('')
  const [changeDescriptionTask, setDescriptionTask] = useState('')
  const [warning, setWarning] = useState('')

  const {taskObject, setTaskObject, setAddingTask} = useContext(AppContext)


  


  const objectToSave = {
    name: changeNameTask,
     description: changeDescriptionTask
  }

  const handleCancelTask = (notEmpty) => {

      {notEmpty ? setWarning(true) : setAddingTask(false)}
  }

  const handleCancelTaskButton2 = (notEmpty) => {

    {notEmpty ? setWarning(true) : hideButton(false)}
}

  
  return(
    <>

      {/*Warning = True, then i`ll show the warning */}
      {warning && <CancelTask  setWarning={setWarning} hideButton={hideButton} />}

      <div className=" flex py-4  justify-evenly items-center absolute w-full bottom-10 orbitron  ">
        
      <div className="flex  flex-col 
      bg-gradient-to-b from-black bg-gray-700 border 
      bg-opacity-10 0 w-3/4 lg:w-2/4  mx-auto my-0  text-xl rounded-xl
        border-white lg:-translate-x-14 px-4 py-1 " >

        <div className="mt-2">

          <input onChange={(event) => {setChangeNameTask(event.target.value);
          }} type="text" placeholder="Task name"
          className="text-xl bg-transparent px-2 focus:outline-none w-full text-white font-bold"/>

          <input onChange={(event) => {setDescriptionTask(event.target.value);
          }} type="text" placeholder="Description"
          className="text-sm bg-transparent px-2 focus:outline-none w-full text-white font-light"/>

        </div>


      <div className="flex gap-4 sm:justify-between mt-4 flex-wrap m-auto w-full items-center justify-center">

        <span className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2">
        
          <button  className="px-2 lg:px-4 border text-white
          rounded-lg ">Date</button>

          <button  className="px-2 lg:px-4 border text-white
          rounded-lg ">Mood</button>

        </span>



        <div className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2  " >

        <button onClick={() => {handleCancelTask(changeNameTask) || handleCancelTaskButton2(changeNameTask)}} className="px-2 lg:px-4
          rounded-lg bg-white text-black">Cancel</button>
          
          
        <button onClick={() => {setTaskObject([...taskObject,objectToSave]); setAddingTask(false) || hideButton(false);
        }} className="px-2 lg:px-4 
          rounded-lg bg-orange-800 bg-opacity-50 text-white ">Save</button>

        </div>

      </div>
      </div>


    
      
      </div>
    </>

  )
}