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
  startTime: string | null,
  endTime: string | null,
  statusId: number | null,
  lotStatusScheduleId: number,

  reactId: number // TODO : sort out removing this value when posting to backend 
                  // on lot creator component convert this to LSSD without react id so that it will
                  //successfully post to backend
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

  //parent component function to send the dates to the LotCreator
  props.retrieveDates(createdLSSDates);


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
  const handleSaveRowToDate = (event : FormEvent<HTMLFormElement>, ReactId : number)=> {
    event.preventDefault();

    const {Startday, Starttime, Endday, Endtime, StatusId} =
      event.target as typeof event.target & {
        Startday : {value : string}
        Starttime : {value : string}
        Endday : {value : string}
        Endtime : {value : string}
        StatusId : {value : number}
      }

      // new lSSDate in our array
      let currLSSDates = createdLSSDates;
      // console.log(StatusId.value);
      const newLSSDate : LSSDate = {
        startTime : Startday.value +' '+Starttime.value,
        endTime : Endday.value +' '+Endtime.value,
        statusId: StatusId.value,
        lotStatusScheduleId : idInLotCreator,
        reactId : ReactId
      };

      currLSSDates.push(newLSSDate);
      setCreatedLSSDates(currLSSDates);
      props.retrieveDates(createdLSSDates); // call props function if we are saving a date
    // console.log("Save row of : " + reactId);
  }

  //deletes a current date row and checks to see if there is a corresponding
  const handleDeleteDateRow = (event : any, reactId : number) => {
      console.log(reactId);
      //delete stored LSS first if it exists 
      const arrIndexFound = createdLSSDates.findIndex(lssdate => lssdate.reactId === reactId);
      // console.log(arrIndexFound);

      //if we already saved that one that we deleted
      if(arrIndexFound !== -1){ // -1 is default for if it is not found
        let currLSSDates = createdLSSDates;
        currLSSDates.splice(arrIndexFound, 1);
        setCreatedLSSDates(currLSSDates);
        props.retrieveDates(createdLSSDates);
      }

      //delete ui element in array 
      const indexFound = dateRows.findIndex(dateRow => dateRow.reactId === reactId);
      let currDateRows = dateRows;
      currDateRows.splice(indexFound, 1) // splice operator --> https://love2dev.com/blog/javascript-remove-from-array/
      setDateRowCount(dateRowCount-1);
      setDateRows(currDateRows);

  }

  // console.log(dateRows);
  // console.log(createdLSSDates);


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

                <label htmlFor="Startday">Start Day:
                  <select id="Startday" name="Startday" >
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
                <label htmlFor="Starttime">Start Time
                  <input type="time" id="Starttime" name="Starttime" />
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="Endday">End Day:
                  <select id="Endday" name="Endday" >
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
                <label htmlFor="Endtime">End Time
                  <input type="time" id="Endtime" name="Endtime" />
                </label>

                &nbsp;&nbsp;&nbsp;
                <label htmlFor="StatusId">Status Id:
                  <select id="StatusId" name="StatusId" className="object_name">
                    {storedStatuses &&
                      storedStatuses.map(status =>
                        <option key={status.statusId}
                          value={status.statusId}>({status.statusId}) {status.name}</option>
                      )
                    }
                  </select>
                </label>
                <button className="date_row_button_delete" type="button"
                  onClick={e => handleDeleteDateRow(e, row.reactId)}>X</button>
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