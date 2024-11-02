import { useState, useEffect, } from 'react';
import axios from 'axios';
import { AddTask } from '../components';


export function Homepage({taskObject}){
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)


  


  const listItem = taskObject.map((item,index) => 
    <div key={index} className='bg-black border-orange-800 border p-2 rounded-2xl'>
      <p className='font-bold'>{item.name}</p>
      <p className='font-light'>{item.description}</p>
    </div>
  )

  

  return(
    <div className='orbitron  absolute  w-full left-0  lg:relative '>
    <h1 className='text-xl text-center lg:text-start'>Dashboard</h1>
    <div className='orbitron text-sm mt-4 z-40 flex gap-8 flex-wrap'>
    {listItem}

    

    </div>
    </div>
  )
}