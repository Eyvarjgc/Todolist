import { useContext, useState, useEffect } from "react"


export function Today(){
  const {taskObject} = useContext(AppContext)
  const listItem = taskObject.map((item,index) => 
    <div key={index}>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  )


   return(
    <div className='orbitron  absolute  w-full left-0  lg:relative '>
    <h1 className='text-xl text-center lg:text-start'>Dashboard - Today task</h1>
    <div className='orbitron text-sm mt-4'>

    {listItem}

    </div>



    

    </div>
  )
}