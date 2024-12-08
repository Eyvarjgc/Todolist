import { createContext, useContext, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ profile, setProfile ] = useState(null);
  const [day, setDay] = useState(null);

  const Provider_Values = {
    user, setUser,
    profile, setProfile,
    day, setDay,

  }
  
  

  return (
    <UserContext.Provider value={Provider_Values}>
      {children}
    </UserContext.Provider>
  )
}

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [activeTask, setActiveTask] = useState('')
  const [taskObject, setTaskObject] = useState([])
  const [addingTask, setAddingTask] = useState(false)
  const [addTaskMobile, setAddTaskMobile] = useState(false)
  const [ isEditing, setIsEditing] = useState(false)

 

  const Provider_Values  = {
    activeTask, setActiveTask,
    taskObject, setTaskObject,
    addingTask, setAddingTask,
    addTaskMobile, setAddTaskMobile,
    isEditing, setIsEditing,
    
  }
  return(

  <TaskContext.Provider value={Provider_Values}>
    {children}
  </TaskContext.Provider>

  )
}