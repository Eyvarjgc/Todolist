import { useContext, useState, useEffect } from "react"
import { useAppContext } from "../Hooks/useAppContext"
import { TaskQuickInfo } from "../components/TaskQuickInfo"
import dayjs from 'dayjs';

export function Today(){
  const {taskObject, day, filteredTaskObject, searchingTask, setFilteredTaskObject} = useAppContext()


    const filteredByDate = taskObject.filter((element) => {

      const currentDay= dayjs(element.date).$D
      
      return currentDay == day
    })
    const listItem = filteredByDate.map((item) => {
  
      
      
  
      return <TaskQuickInfo checked={item.checked} desc={item.description} key={item.ID} task={item.name} taskID={item.ID} date={item.date} mood={item.mood}/>
  
    }
    )



    const filteredTaskObjectByDate = filteredTaskObject.filter((element) => {

    const currentDay= dayjs(element.date).$D
    
    return currentDay == day
    }) ;

    const listItemBySearch = filteredTaskObjectByDate?.map((item) => {
      return <TaskQuickInfo checked={item.checked} desc={item.description} key={item.ID} task={item.name} taskID={item.ID} date={item.date} mood={item.mood}/>
  
    }) || {};


  return(
    <div className='orbitron absolute  w-full left-0 lg:static z-10 
    lg:p-0 '>
    <h1 className='text-xl text-center lg:text-start '>Today - Dashboard</h1>
    <div className='orbitron text-sm mt-4 z-40 flex gap-4 flex-wrap px-12 lg:px-0 '>
    {/* {filteredTaskObject.length > 0  ? filteredTaskObject.map((item) => 
    <TaskQuickInfo desc={item.description} key={item.ID} task={item.name} taskID={item.ID} date={item.date} mood={item.mood}/>
  ) : listItem } */}


    {searchingTask  === false ? listItem : filteredTaskObject.length > 0 && listItemBySearch   }






    </div>
    </div>
  )
}