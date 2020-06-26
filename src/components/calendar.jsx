import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

const MainCalendar = () => {

  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    setDate(date);
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  )
}

export default MainCalendar
