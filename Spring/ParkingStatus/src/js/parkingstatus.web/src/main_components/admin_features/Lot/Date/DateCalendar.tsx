import React, { useState, useEffect, useContext } from 'react'

import '../../../general_style/calendar_style.css'

import StatusService from '../../../../services/StatusService';

import { LSSContext } from '../LSSContext';
import {LSSIDContext} from '../LSSIDContext';

type Date = {
  startDate: string,
  endDate: string,
  statusId: number,
  lotStatusScheduleId: number
}

const DateCalendar: React.FC<any> = (props) => {

  const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);

  const [dateRows, setDateRows] = useState<Array<any>>([]);



  useEffect(() => { // queries storedstatuses on start

    StatusService.getAllStatuses()
      .then(res => setStoredStatuses(res.data));

  }, []);


  const renderNewRow = (event: any) => {
      let currDates = dateRows;
      currDates.push(1);
      setDateRows(currDates);
  }

  console.log(dateRows);


  const validIdInLotCreator = useContext(LSSContext); // boolean context
  const idInLotCreator = useContext(LSSIDContext);//number context

  //TODO: query all statuses 

  return (
    <div>
      {validIdInLotCreator &&
        <>
          <div className="week_selection">
            <div>Enter a Lot Status Schedule for a 7-Day week:</div>
            <button onClick={e => renderNewRow(e)}>Add New Date</button>
          </div>

          {dateRows.map(row => {
            <div className="date_row" key={row}>

              <form>

                <label htmlFor="startday">Start Day:
                  <select id="startday" name="startday" >
                    <option value="Sun" selected={true}>Sun</option>
                    <option value="Mon">Mon</option>
                    <option value="Tue">Tue</option>
                    <option value="Wed">Wed</option>
                    <option value="Thur">Thur</option>
                    <option value="Fri">Fri</option>
                    <option value="Sat">Sat</option>
                  </select>
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="starttime">Start Time
                  <input type="time" id="starttime" name="starttime" />
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="endday">End Day:
                  <select id="endday" name="endday" >
                    <option value="Sun" selected>Sun</option>
                    <option value="Mon">Mon</option>
                    <option value="Tue">Tue</option>
                    <option value="Wed">Wed</option>
                    <option value="Thur">Thur</option>
                    <option value="Fri">Fri</option>
                    <option value="Sat">Sat</option>
                  </select>
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="endtime">End Time
                  <input type="time" id="endtime" name="endtime" />
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="statusid">Status Id:
                  <select id="statusid" name="statusid" className="object_name">
                    {storedStatuses &&
                      storedStatuses.map(status =>
                        <option key={status.statusId}
                          value={status.statusId}>({status.statusId}) {status.name}</option>
                      )
                    }
                  </select>
                </label>
                <button className="date_row_button" >X</button>
                <button className="date_row_button" type="submit">Save</button>

              </form>
            </div>
          })

          }
        </>

      } 
      {/* end valid LSSId section */}

      {!validIdInLotCreator &&
          <div className="calendar_error_message_style">
              Provide a Valid Lot Status Schedule ID in order to edit the Lot Status Schedule.
          </div>
      }




    </div>

  )
}

export default DateCalendar;