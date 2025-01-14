


export default function Mood({setMood}){


  return(
    <ul className="bg-white rounded-xl flex flex-col gap-1 transition-all text-black">

      <button className="hover:bg-orange-800 hover:text-white px-4 py-2 rounded-t-xl transition-all" onClick={setMood('Exciting')} >Exciting</button>
      <button className="hover:bg-orange-800 hover:text-white px-4 py-2 rounded-b-xl transition-all" onClick={setMood('Challenging')} >Challenging</button>

    </ul>
  )
}