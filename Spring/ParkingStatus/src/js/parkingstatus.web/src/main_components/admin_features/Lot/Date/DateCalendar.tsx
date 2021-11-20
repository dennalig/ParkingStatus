import React, { useState, useEffect, useContext, FormEvent } from 'react'

import '../../../general_style/calendar_style.css'

import StatusService from '../../../../services/StatusService';

import { LSSContext } from '../LSSContext';
import { LSSIDContext } from '../LSSIDContext';

//for ui array storage
type DateRow = {// parse day from time on the dates
  startDate: string | null,
  endDate: string | null,
  statusId: number | null,
  lotStatusScheduleId: number,

  reactId: number
}

//storage of actual lot status schedule date
type LSSDate ={
  startDate: string | null,
  endDate: string | null,
  statusId: number | null,
  lotStatusScheduleId: number,

  reactId: number
}

//TODO: store the reactId also in the stored 

const DateCalendar: React.FC<any> = (props) => {

  const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);

  const [dateRows, setDateRows] = useState<Array<DateRow>>([]); // ui date rows
  const [dateRowCount, setDateRowCount] = useState<number>(0);


  const[createdLSSDates, setCreatedLSSDates] = useState<Array<LSSDate>>([]);

  useEffect(() => { // queries storedstatuses on start

    StatusService.getAllStatuses()
      .then(res => setStoredStatuses(res.data));

  }, []);


  //Add new Date button trigger (nothing  --> new UI Date row)
  const renderNewRow = (event: any) => {
    let currDateRows = dateRows;
    const newDateRow: DateRow = {
      startDate: null,
      endDate: null,
      statusId: null,
      lotStatusScheduleId: idInLotCreator,
      reactId: dateRowCount
    };

    currDateRows.push(newDateRow);
    setDateRows(currDateRows);

    setDateRowCount(dateRowCount + 1);
  }

  //each date row's save button (ui date row --> new lotstatusscheduledate)
  const handleSaveRowToDate = (event : FormEvent<HTMLFormElement>, reactId : number)=> {
    event.preventDefault();
    console.log("Save row of : " + reactId);
  }

  //deletes a current date row and checks to see if there is a corresponding
  const handleDeleteDateRow = (event : any) => {

  }

  // console.log(dateRows);


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

{/* iterorates through date row */}
          {dateRows.map(row =>

            <div className="date_row" key={row.reactId}>

              <form onSubmit={e => handleSaveRowToDate(e, row.reactId)}>

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
                <button className="date_row_button_delete" >X</button>
                <button className="date_row_button" type="submit">Save</button>

              </form>
            </div>

          )

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