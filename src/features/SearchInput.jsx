import { useAppContext } from "../Hooks/useAppContext";


export function SearchInput(){
  const {taskObject, setFilteredTaskObject, setSearchingTask, searchingTask} = useAppContext()



  const searchTask = (value) => {


    const filteredTask = taskObject.filter(item => {
      return item.name.includes(value)
    })
    setFilteredTaskObject(filteredTask)
    
  }



  return(
    <div class="relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm bg-gradient-to-b from-black bg-gray-700 bg-opacity-50 text-white rounded-3xl " placeholder="Search Tasks" required  
        onChange={(e) => {
    setSearchingTask(true)

          searchTask(e.currentTarget.value);
          
          {e.currentTarget.value.trim() === '' &&  setSearchingTask(false);}
          
          
          }}/>
    </div>
  )
}