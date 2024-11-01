import { Topview } from '../sections/Topview';
import { useState, useEffect, } from 'react';
import axios from 'axios';

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
    <div className='orbitron'>
    <h1 className=''>Dashboard</h1>
    <div className='orbitron text-sm mt-4'>
    {listItem}


    </div>
    </div>
  )
}