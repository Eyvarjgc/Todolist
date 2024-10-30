import { NavButton } from './NavButton';
import { TodayButton } from './TodayButton';

export function NavItem({day}){

  return(
    <>
       <NavButton  img={'homeIcon.svg'} to={'/'} />
        <NavButton buttonValidation img={'addtaskIcon.svg'} />
        <TodayButton date={day} />
        <NavButton  img={'doneIcon.svg'} to={'/finished'}/>
    </>
  )
}