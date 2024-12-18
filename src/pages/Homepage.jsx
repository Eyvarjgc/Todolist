import { useState } from 'react';
import axios from 'axios';


import { TaskQuickInfo } from '../components/TaskQuickInfo';
import { useAppContext } from '../Hooks/useAppContext';
import SearchTask from '../components/SearchTask';
import { ListItem } from '@mui/material';

export function Homepage(){
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const {taskObject, filteredTaskObject, searchingTask} = useAppContext()

  const existingTasks = JSON.parse(localStorage.getItem('TASKS')) || [];

  
  
  
  const listItem =taskObject.map((item) => 
    
    <TaskQuickInfo checked={item.checked} desc={item.description} key={item.ID} task={item.name} taskID={item.ID} date={item.date} mood={item.mood}/>
    
  )
  
  

  

  
 
  return(
    <div className='orbitron absolute  w-full left-0   lg:static    z-10 
     lg:p-0 '>
    <h1 className='text-xl text-center lg:text-start '>Dashboard</h1>
    <div className='orbitron text-sm mt-4 z-40 flex gap-4 flex-wrap px-12 lg:px-0 '>

  

    {searchingTask === false ? listItem : filteredTaskObject.map((item) => 
    
    <TaskQuickInfo checked={item.checked} desc={item.description} key={item.ID} task={item.name} taskID={item.ID} date={item.date} mood={item.mood}/>
    
  ) }


   

    </div>
    </div>
  )
}