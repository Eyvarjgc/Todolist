import { useState, useEffect, } from 'react';
import axios from 'axios';
import { AddTask } from '../components';

import { TaskContext } from "../sections/TaskView";
import { AppContext } from "../App"

export function Homepage({taskObject}){
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)


  


  const listItem = taskObject.map((item,index) => 
    <div key={index}>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  )

  

  return(
    <div className='orbitron  absolute  w-full left-0  lg:relative '>
    <h1 className='text-xl text-center lg:text-start'>Dashboard</h1>
    <div className='orbitron text-sm mt-4 '>
    {listItem}

    

    </div>
    </div>
  )
}