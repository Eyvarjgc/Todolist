import { useAppContext } from '../Hooks/useAppContext';
import { CancelTask } from "./CancelTask";
import { useContext, useEffect, useState } from "react";

import { useHandleTask } from '../Hooks/useHandleTask';
import Mood from '../components/Mood';

// CALENDAR VIEW
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';



export function AddTask({OnSaveTask, onSubmit}){
  const {taskObject, setAddingTask, setAddTaskMobile, inputRef, day, date} = useAppContext()
  const [changeNameTask, setChangeNameTask] = useState('')
  const [changeDescriptionTask, setDescriptionTask] = useState('')
  const [taskDate, setTaskDate] = useState(dayjs(date))
  const [mood, setMood] = useState('')


  const [warning, setWarning] = useState('')
  const [popUp, setPopUp] = useState(false)
  const [moodPopUp, setMoodPopUp] = useState(false)


  const {HandleCancelTask} = useHandleTask()

  // Auto Height for input  taskname and taskdescription
  const [taskHeight, setTaskHeight] = useState("auto");
  const [descHeight, setDesHeight] = useState("auto");


  const objectToSave = {
    ID: taskObject.length === 0  ? 1 : taskObject[taskObject.length - 1].ID + 1,
    checked: false,
    name: changeNameTask,
    description: changeDescriptionTask,
    date: taskDate,
    mood: mood,

  }

  const existingTasks = JSON.parse(localStorage.getItem('TASKS')) || [];




  
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
  const handleClick = () => {
    inputRef.current.focus()
  }
  useEffect(() => {
    inputRef.current.focus()

  } ,[])
  
 
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
      <form className="mt-2">
        

        <input ref={inputRef} 
        onChange={(event) => {handleTaskName(event)}}
        // style={{height: taskHeight}}
        type="text" placeholder="Task name"
        className="text-xl bg-transparent px-2 focus:outline-none w-full text-white font-bold resize-none h-10 "/>

        <textarea onChange={(event) => {handleTaskDes(event)}} 
        style={{height: descHeight}}

        type="text" placeholder="Description"
        className="text-sm bg-transparent px-2 focus:outline-none w-full text-white font-light resize-none h-8"/>

      </form>

      
      <div className="flex gap-4 sm:justify-between  flex-wrap m-auto w-full items-center justify-center">
        {/* INPUTS DATE AND MOOD */}
        <span className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2">
          
   
          <div class="relative">

              <button id="dateButton" onClick={() => {setPopUp(!popUp);
              }} class="px-2 lg:px-4 border text-white
          rounded-lg">
                Today
              </button>

              <div className='absolute bottom-0  lg:top-10 ring-0 z-50 bg-white rounded-xl '>
              {popUp == true &&
              <div className='bg-white z-50  rounded-xl absolute -bottom-10 text-black left-0'> 
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DemoContainer components={['DateCalendar']}>
                    <DemoItem >
                      <DateCalendar value={taskDate} onChange={(newValue) => {setTaskDate(newValue); setPopUp(!popUp) } } />
                    </DemoItem>
                </DemoContainer>
              </LocalizationProvider> 
              </div>
              }

                </div>
          </div>

          <button  className="px-2 lg:px-4 border text-white
          rounded-lg " onClick={() => {setMoodPopUp(!moodPopUp)}}>Mood</button>
          {moodPopUp && 
          <div className="absolute lg:left-0 mt-8 lg:mt-1">

            {/* <Mood setMood={setMood} />; */}

            <ul className="bg-white rounded-xl flex flex-col gap-1 transition-all text-black">

              <button className="hover:bg-orange-800 hover:text-white px-4 py-2 rounded-t-xl transition-all" onClick={() => {setMood('Exciting'); setMoodPopUp(false) ;
              }} >Exciting</button>
              <button className="hover:bg-orange-800 hover:text-white px-4 py-2 rounded-b-xl transition-all" onClick={() => {
                setMood('Challenging'); setMoodPopUp(false)
              }} >Challenging</button>

            </ul>
            
          </div>
          }
        </span>

        {/* BUTTONS SAVE AND CANCEL */}
        <div className="flex gap-1 md:gap-2 lg:gap-4 text-sm mt-2  " >

          <button onClick={() => {
            HandleCancelTask(changeNameTask, setWarning)}} 

            className="px-2 lg:px-4 rounded-lg bg-white
          text-black">Cancel</button>

          <button onClick={(e) => {
            e.preventDefault()
           

            OnSaveTask()
            onSubmit(objectToSave)
            setAddingTask(false) || setAddTaskMobile(false);
            // localStorage.setItem('TASKS', JSON.stringify([...existingTasks, objectToSave]))
            
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
