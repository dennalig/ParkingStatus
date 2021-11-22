import React, {useState, useEffect, useContext,FormEvent} from 'react';

import '../../../general_style/calendar_style.css';

import LotService from '../../../../services/LotService';
import DateToUi from '../../DateToUi'; // help with day/time transfer

import {SEIDContext} from '../SEIDContext';
import { SEContext } from '../SEContext';

//array for date row
type EventDateRow={
    startDate: string | null,
    endDate: string | null,
    lotId: number | null,
    statusEventId: number,

    reactId : number
}

//storage of actual statusevent dates
type SEDate ={
    startTime: string | null,
    endTime: string | null,
    lotId: number,
    statusEventId: number,

    reactId : number
}

//pre existing API SE dates coming in for an update render
type PESEAPIDate = {
    startTime: string | null,
    statusId : number | null, // not used
    endTime: string | null,
    lotId: number,
    statusEventId: number,
    statusEventDateId: number
}

// SE Date JSON Structure
// "startTime": "2021-09-11 17:46",
// "statusId": 0,
// "endTime": "2021-09-12 6:00",
// "lotId": 1,
// "statusEventId": 1,
// "statusEventDateId": 14


const EventDateCalendar: React.FC<any> = (props) => {

    const [preExistingApiEventDates, setPreExistingApiEventDates] = 
        useState<Array<PESEAPIDate>>(props.preExistingEventDates);

    const [storedLots, setStoredLots] = useState<Array<any>>([]);

    const [eventDateRows, setEventDateRows] = useState<Array<EventDateRow>>([]); // ui date rows
    const [eventDateRowCount, setEventDateRowCount] = useState<number>(0);

    const[createdSEDates, setCreatedSEDates] = useState<Array<SEDate>>([]);

    const[saveString, setSaveString] = useState<string>('');

    useEffect(() => { // queries stored Lots on start
        LotService.getAllLots()
            .then(res => setStoredLots(res.data));
    }, []);

    //send created LSSDates to the parent component
    props.retrieveEventDates(createdSEDates);

    
//render new row
    const renderNewRow = (event: any) =>{
        let currSEDateRows = eventDateRows;
        const newSEDateRow : EventDateRow ={
            startDate: null, 
            endDate : null,
            lotId: null,
            statusEventId : idInStatusEventCreator,

            reactId : eventDateRowCount
        }

        currSEDateRows.push(newSEDateRow);
        setEventDateRows(currSEDateRows);

        setEventDateRowCount(eventDateRowCount +1);
    }

    //store the new date
    const handleSaveRowToEventDate = (event : FormEvent<HTMLFormElement>, ReactId: number) =>{
        event.preventDefault();



        //grab form elements
        const{Startdate, Starttime, Enddate, Endtime, LotId } =
            event.target as typeof event.target & {
                Startdate : {value : string}
                Starttime : {value : string}
                Enddate : {value : string}
                Endtime : {value : string}
                LotId : {value : number}

            }

        let currSEDates = createdSEDates;

        const newSEDate : SEDate ={
            startTime : Startdate.value +' '+Starttime.value,
            endTime : Enddate.value + ' ' + Endtime.value,
            lotId : LotId.value,
            statusEventId : idInStatusEventCreator,

            reactId : ReactId
        }

        currSEDates.push(newSEDate);
        setCreatedSEDates(currSEDates);
        console.log(currSEDates);

        setSaveString(saveString +'\n' +
            '[('+newSEDate.lotId+')'+newSEDate.startTime +" to "+ newSEDate.endTime + " saved.]")

    }

    //delete a date  with delete button from U.I.
    const handleDeleteEventDateRow = (event: any, reactId: number)=>{
        console.log(reactId);
    }

    const validIdInStatusEventCreator = useContext(SEContext); // checks to see that we have a valid context
    const idInStatusEventCreator = useContext(SEIDContext); // check what the id is 
    return (
        <div> {/*start entire div */}
        {validIdInStatusEventCreator &&
        <>
          <div className="week_selection"> 
            <div>Enter the Specific Dates and Times of this StatusEvent</div>
            <button onClick={e => renderNewRow(e)}>Add New Date</button>
          </div>

          <div className="">
            {saveString}
          </div>

            {eventDateRows.map(row => 
                <div className="event_date_row" key={row.reactId}>{/*start new Dates div */}

                <form onSubmit={e => handleSaveRowToEventDate(e, 
                    row.reactId)}>
                    
                    <label htmlFor="Startdate">Start Date:
                        <input type="date" id="Startdate" name="Startdate"/>
                    </label>

                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="Starttime">Start Time
                        <input type="time" id="Starttime" name="Starttime" />
                    </label>

                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="Enddate">End Date:
                        <input type="date" id="Enddate" name="Enddate"/>
                    </label>

                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="Endtime">End Time
                        <input type="time" id="Endtime" name="Endtime" />
                    </label>

                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="LotId">Lot Id:
                        <select name="LotId" id="LotId" className="object_name">
                            {storedLots &&
                                storedLots.map(lot => 
                                    <option key={lot.LotID}
                                        value={lot.LotID}>({lot.LotID}){lot.LotName}</option>
                                    )

                            }
                        </select>
                    </label>

                    <button className="date_row_button_delete" type="button"
                        onClick={e => handleDeleteEventDateRow(e, row.reactId)}>X</button>
                    <button className="date_row_button" type="submit">Save</button>

                </form>
                </div>
            
            )}
        </>

        }

        {!validIdInStatusEventCreator &&
            <>
            <div className="calendar_error_message_style">
                    Provide a Valid Status Event ID in order to edit the Status Event Dates.
            </div>

            </>
        }


        </div> 
    )
}

export default EventDateCalendar;
