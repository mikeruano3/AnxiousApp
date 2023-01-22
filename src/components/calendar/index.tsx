import React, { useEffect, useState } from "react"
import ReactCalendar from 'react-calendar'
import moment from "moment"
import { tileStyleWeekday } from "./styles"
import { ClassNames } from '@emotion/react'

export default function Calendar() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const [value, onChange] = useState(moment().toDate())
  console.log(value)

  useEffect(() => {
    console.log(moment(value).format('LLLL'))
  }, [value])

  return (
    <ClassNames>
        {({ css, cx }) => (
      <ReactCalendar
        onChange={onChange}
        value={value}
        onClickDay={(value) => console.log(value)}

        tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
        tileClassName={[tileStyleWeekday(css)]}
        //onViewChange={({ action, activeStartDate, value, view }) => alert('New view is: ', view)}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => alert('Changed view to: ', activeStartDate, view)}
      />
      )}
    </ClassNames>
  )
}