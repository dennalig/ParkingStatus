import React, { useState } from 'react'

import '../../../general_style/calendar_style.css'


const DateCalendar: React.FC<any> = (props) => {

    return (
        <div className="week_selection">
          <div>Sunday</div>
          <div>Monday</div>
        </div>
    )
}

export default DateCalendar;