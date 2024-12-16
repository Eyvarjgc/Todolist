import { CancelTask } from "./CancelTask";
import {  useEffect, useState } from "react";
import { useAppContext } from '../Hooks/useAppContext';

import { useHandleTask } from "../Hooks/useHandleTask";

// CALENDAR VIEW
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';


export function EditTaskForm({taskName, taskDescription, taskId, HandleEditForm, editTask}){
  const { setAddingTask, setAddTaskMobile,setIsEditing,inputRef,date} = useAppContext()
  const {EditTask, HandleCancelTask} = useHandleTask()

  const [changeNameTask, setChangeNameTask] = useState(taskName)
  const [changeDescriptionTask, setDescriptionTask] = useState(taskDescription)
  const [warning, setWarning] = useState('')
  const [taskDate, setTaskDate] = useState(dayjs(date))
  const [popUp, setPopUp] = useState(false)
  
  useEffect(() => {
    inputRef.current.focus()
  } ,[])

 
  const objectToSave = {
  ID: taskId,
  name: changeNameTask,
  description: changeDescriptionTask,
  date:taskDate
}

  return( 

    <>


    {warning && <CancelTask  setWarning={setWarning}  hideButton={setAddTaskMobile} editTask={editTask} />}



    <div className=" flex py-4  justify-evenly items-center w-full  orbitron  ">

    <div className="flex  flex-col 
    bg-gradient-to-l from-black bg-orange-900  border 
    bg-opacity-50 w-[95%] lg:w-full  mx-auto my-0  text-base rounded-xl
    border-white  px-4 py-1 transition-all" >


      {/* INPUTS NAME - DESCRIPTION */}
      <div className="mt-2">

        <input ref={inputRef} onChange={(event) => {setChangeNameTask(event.target.value);}} 
        type="text" placeholder="Task name" defaultValue={taskName}
        className="text-xl bg-transparent px-2 focus:outline-none w-full text-white font-bold"/>

        <input onChange={(event) => {setDescriptionTask(event.target.value);}} 
        type="text" placeholder="Description" defaultValue={taskDescription}
        className="text-sm bg-transparent px-2 focus:outline-none w-full text-white font-light"/>

      </div>

      
      <div className="flex gap-4 sm:justify-between mt-4 flex-wrap m-auto w-full items-center justify-center">
        {/* INPUTS DATE AND MOOD */}

        <span className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2">
          <div class="relative">

              <button id="dateButton" onClick={() => {setPopUp(!popUp);
              }} class="px-2 lg:px-4 border text-white
          rounded-lg">
                Today
              </button>

              <div className='absolute bottom-0  lg:top-10 ring-0 z-50 bg-white rounded-xl'>
              {popUp == true &&
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateCalendar']}>
                    <DemoItem >
                      <DateCalendar value={taskDate} onChange={(newValue) => {setTaskDate(newValue); setPopUp(!popUp) } } />
                    </DemoItem>
                </DemoContainer>
              </LocalizationProvider> 
              }

                </div>
          </div>

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