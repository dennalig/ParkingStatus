import React, {useState, useEffect, FormEvent} from 'react';

import '../../../general_style/calendar_style.css';

import LotService from '../../../../services/LotService';
import DateToUi from '../../DateToUi'; // help with day/time transfer

//array for date row
type EventDateRow={
    startDate: string | null,
    endDate: string | null,
    lotId: number,
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
  
    return (
        <div>
            
        </div>
    )
}

export default EventDateCalendar;
