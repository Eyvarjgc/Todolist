import { NavButton } from '../components/NavButton';
import { TodayButton } from '../components/TodayButton';
import { useAppContext } from '../Hooks/useAppContext';

export function NavItem(){
  const {day} = useAppContext()
  return(
    <ul className=' flex gap-3 flex-row w-fit items-center justify-center 
    bg-gradient-to-r from-black bg-orange-900 bg-opacity-55  
    fixed md:absolute bottom-1 right-0 left-0 p-2 border rounded-xl 
    mx-auto my-0 opacity-90 z-50
     lg:flex-col lg:relative '>
        <NavButton  img={'homeBlack.svg'} to={'/'}  />
        <NavButton buttonValidation img={'addBlack.png'} />
        <TodayButton date={day} />
        <NavButton  img={'doneeBlack.png'} to={'/finished'}/>
    </ul>
  )
}