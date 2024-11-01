import { AppContext } from "../App"
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
    <>
    
    <h1>Dashboard - Today task</h1>
    <div className='orbitron text-sm mt-4'>

    {listItem}

    </div>



    

    </>
  )
}