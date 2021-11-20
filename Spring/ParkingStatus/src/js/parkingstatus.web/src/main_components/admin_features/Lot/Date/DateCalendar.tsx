import React, { useState } from 'react'

import '../../../general_style/calendar_style.css'

import StatusService from '../../../../services/StatusService';

const DateCalendar: React.FC<any> = (props) => {

    return (
        <div className="week_selection">
          <div>Enter a Lot Status Schedule for a 7-Day week.</div>
        </div>
    )
}

export default DateCalendar;