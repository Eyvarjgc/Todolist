import { CancelTask } from "./CancelTask";
import {  useState } from "react";
import { useAppContext } from '../Hooks/useAppContext';

import { useHandleTask } from "../Hooks/useHandleTask";


export function EditTaskForm({taskName, taskDescription, taskId, HandleEditForm, editTask}){
  const {EditTask, HandleCancelTask} = useHandleTask()

  const [changeNameTask, setChangeNameTask] = useState(taskName)
  const [changeDescriptionTask, setDescriptionTask] = useState(taskDescription)
  const [warning, setWarning] = useState('')
  const { setAddingTask, setAddTaskMobile,setIsEditing} = useAppContext()
  


 
  const objectToSave = {
  ID: taskId,
  name: changeNameTask,
  description: changeDescriptionTask,

}

  return( 

    <>


    {warning && <CancelTask  setWarning={setWarning}  hideButton={setAddTaskMobile} editTask={editTask} />}



    <div className=" flex py-4  justify-evenly items-center w-full  orbitron  ">

    <div className="flex  flex-col 
    bg-gradient-to-l from-black bg-orange-900  border 
    bg-opacity-50 w-3/4 lg:w-full  mx-auto my-0  text-base rounded-xl
    border-white  px-4 py-1 transition-all" >


      {/* INPUTS NAME - DESCRIPTION */}
      <div className="mt-2">

        <input onChange={(event) => {setChangeNameTask(event.target.value);}} 
        type="text" placeholder="Task name" defaultValue={taskName}
        className="text-xl bg-transparent px-2 focus:outline-none w-full text-white font-bold"/>

        <input onChange={(event) => {setDescriptionTask(event.target.value);}} 
        type="text" placeholder="Description" defaultValue={taskDescription}
        className="text-sm bg-transparent px-2 focus:outline-none w-full text-white font-light"/>

      </div>

      
      <div className="flex gap-4 sm:justify-between mt-4 flex-wrap m-auto w-full items-center justify-center">
        {/* INPUTS DATE AND MOOD */}
        <span className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2">
          <button  className="px-2 lg:px-4 border text-white
          rounded-lg ">Date</button>

          <button  className="px-2 lg:px-4 border text-white
          rounded-lg ">Mood</button>
        </span>

        {/* BUTTONS SAVE AND CANCEL */}
        <div className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2  " >

          <button onClick={() => {
            HandleCancelTask(changeNameTask, setWarning, taskName, editTask)}

          } 

            className="px-2 lg:px-4 rounded-lg bg-white
          text-black">Cancel</button>

          <button onClick={() => {
              setIsEditing(false)
              EditTask(objectToSave)
              HandleEditForm(false)

          }} 
          className="px-2 lg:px-4 rounded-lg bg-orange-800 
          bg-opacity-50 text-white ">Save</button>

        </div>

      </div>

    </div>


  
    
    </div>
    </>
  )
}