import { useContext } from "react";
import {UserContext, TaskContext} from "../Hooks/useContexts"

export const useAppContext = () => {
    const userContext = useContext(UserContext)
    const taskContext = useContext(TaskContext)
    
    return {...userContext, ...taskContext}
  }