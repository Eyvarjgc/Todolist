
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useAppContext } from '../Hooks/useAppContext';
import { useState } from 'react';

export default function CalendarView(value, changeDate){
  const {date} = useAppContext()
    
  const [taskDate, setTaskDate] = useState(dayjs(date))

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DemoContainer components={['DateCalendar']}>

          <DemoItem >
            <DateCalendar value={value} onChange={(newValue) => changeDate(newValue) } />
          </DemoItem>

      </DemoContainer>

    </LocalizationProvider> 

  )
}