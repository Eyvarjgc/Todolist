import { useRouteError } from "react-router-dom"
import { useEffect } from "react"
import OpenAI from "openai";
import { fetch } from "openai/_shims/index.mjs";

export function AiView(){


  // IS NOT FREE TO USAGE
  
// const openai = new OpenAI({
//    apiKey: import.meta.env.VITE_OPEN_AI,  
//   });


  // useEffect( async() => {
    
  //   const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${import.meta.env.VITE_OPEN_AI}`,
  //     },
  //     body:{
  //       "model": "gpt-4o-mini",
  //       "messages": [{"role": "user", "content": "Say this is a test!"}],
  //       "temperature": 0.7
  //     }
  //   }) 
  //   console.log(response);
    
  // }, [])



  return(
    <div className="flex flex-col orbitron ">
    
    <h1 className="">Ai view</h1>
    <p>-NOT FINISHED-</p>
    </div>
  )
}