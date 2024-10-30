
export function BottomTask(){

  return(
    <div className="hidden lg:flex py-4  justify-evenly items-center absolute w-full bottom-8">

      


    <button className="flex justify-start items-center 
   bg-gradient-to-b from-black bg-gray-700 border 
   bg-opacity-50 w-2/4 mx-auto my-0 inset-y-0 text-xl rounded-3xl  border-white -translate-x-14 p-1">
      <img src="src/assets/icons/addtaskIcon.svg" 
      className='w-[40px] h-[40px] 
        rounded-3xl p-1 transition-all
        ' alt="" />
      
      <span>New task</span>
    </button>


    </div>
  )
}

export function AddTask(){

  return(
  <div className=" flex py-4  justify-evenly items-center absolute w-full bottom-20">

    <div className="flex  flex-col 
    bg-gradient-to-b from-black bg-gray-700 border 
    bg-opacity-50 w-3/4 lg:w-2/4  mx-auto my-0  text-xl rounded-xl  border-white lg:-translate-x-14 px-4 py-1" >

      <div className="">

        <p className="text-xl">Task name</p>
        <p className="text-base">Description</p>

      </div>


     <div className="flex justify-between mt-4">

      <span className="flex gap-4 text-sm mt-2">
      
        <button className="px-2 lg:px-4 border 
        rounded-lg ">Date</button>

        <button className="px-2 lg:px-4 border 
        rounded-lg ">Mood</button>

      </span>



      <div className="flex gap-4 text-sm mt-2  " >

      <button className="px-2 lg:px-4
        rounded-lg bg-white text-black">Cancel</button>
        
      <button className="px-2 lg:px-4 
        rounded-lg bg-orange-800 bg-opacity-50">Save</button>

      </div>

     </div>
    </div>


  </div>
  )
}