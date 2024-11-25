import { useAppContext } from '../Hooks/useAppContext';
import { CancelTask } from "./CancelTask";
import { useContext, useState } from "react";

import { useHandleTask } from '../Hooks/useHandleTask';


export function AddTask({OnSaveTask, onSubmit}){
  const [changeNameTask, setChangeNameTask] = useState('')
  const [changeDescriptionTask, setDescriptionTask] = useState('')
  const [warning, setWarning] = useState('')
  const {HandleCancelTask} = useHandleTask()
  const {taskObject, setAddingTask, setAddTaskMobile} = useAppContext()

  // Auto Height for input  taskname and taskdescription
  const [taskHeight, setTaskHeight] = useState("auto");
  const [descHeight, setDesHeight] = useState("auto");


  const objectToSave = {
    ID: taskObject.length === 0  ? 1 : taskObject[taskObject.length - 1].ID + 1,
    name: changeNameTask,
    description: changeDescriptionTask,

  }

 

  const handleTaskName = (event) => {
    const { value, scrollHeight } = event.target;
    setChangeNameTask(value);
    
    setTaskHeight(`${scrollHeight}px`);
  };
    
  const handleTaskDes = (event) => {
    const { value, scrollHeight } = event.target;
    setDescriptionTask(value);
    
    setDesHeight(`${scrollHeight}px`);
  };


return(
  <>
    {/*Warning = True, then i`ll show the warning */}
    {warning && <CancelTask  setWarning={setWarning} />}
    
    <div className=" flex py-4  justify-evenly items-center w-full  orbitron  ">

    <div className="flex  flex-col 
    bg-gradient-to-b from-black bg-gray-700 border 
    bg-opacity-10 w-[80%] lg:w-2/4  mx-auto my-0  text-xl rounded-xl
    border-white lg:-translate-x-14 px-4 py-1  h-fit" >


      {/* INPUTS NAME - DESCRIPTION */}
      <div className="mt-2">

        <input  onChange={(event) => {handleTaskName(event)}}
        // style={{height: taskHeight}}
        type="text" placeholder="Task name"
        className="text-xl bg-transparent px-2 focus:outline-none w-full text-white font-bold resize-none h-10 "/>

        <textarea onChange={(event) => {handleTaskDes(event)}} 
        style={{height: descHeight}}

        type="text" placeholder="Description"
        className="text-sm bg-transparent px-2 focus:outline-none w-full text-white font-light resize-none h-8"/>

      </div>

      
      <div className="flex gap-4 sm:justify-between  flex-wrap m-auto w-full items-center justify-center">
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
            HandleCancelTask(changeNameTask, setWarning)}} 

            className="px-2 lg:px-4 rounded-lg bg-white
          text-black">Cancel</button>

          <button onClick={() => {

            OnSaveTask()
            onSubmit(objectToSave)
            setAddingTask(false) || setAddTaskMobile(false);
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
