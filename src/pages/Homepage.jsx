import { useState, useEffect, } from 'react';
import axios from 'axios';
import { AddTask } from '../components';
import { TaskQuickInfo } from '../components/TaskQuickInfo';

export function Homepage({taskObject}){
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)


  


  const listItem =taskObject.map((item,index) => 
    <TaskQuickInfo desc={item.description} key={index} task={item.name} />
  )
  

  return(
    <div className='orbitron   absolute  w-full left-0   lg:static    z-10 
     lg:p-0 '>
    <h1 className='text-xl text-center lg:text-start '>Dashboard</h1>
    <div className='orbitron text-sm mt-4 z-40 flex gap-8 flex-wrap '>
    {listItem}
    
    

    </div>
    </div>
  )
}