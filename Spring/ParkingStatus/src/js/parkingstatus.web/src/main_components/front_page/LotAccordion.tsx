import React, {useState, useEffect, useContext, useMemo} from 'react'

import ColorLegend from './ColorLegend';
import AccordionEntry from './AccordionEntry';

import './style/front_page_style.css';

import LotService from '../../services/LotService';
import StatusService from '../../services/StatusService';
import StatusEventService from '../../services/StatusEventService';

import TimeZoneService from '../../services/TimeZone/TimeZoneService';

import DateToUi from '../admin_features/DateToUi';



import { TimeZoneContext } from '../admin_features/general/TimeZone/TimeZoneContext';
import {CurrentParsedTimeContext} from './CurrentParsedTimeContext';


type LotStatusSchedule = {
    LotStatusScheduleDates : Array<any>,
    Name : string | null,
    LotStatusScheduleId : number | null
    LotId : number
}

type Lot ={
    LotStatusSchedule: any,
    LotID: number,
    LotDescription: string | null,
    LotName: string,

    LotImage: null
}

type Status = {
    name: string,
    description: string | null, 
    color: string,
    statusImage: null,
    statusImageName : null,
    statusId : number
}

type StatusEvent = {
    StatusEventDates : Array<any> ,
    Description : string | null,
    StatusEventImage: null,
    StatusEventImageName: null,
    StatusEventId : number,
    StatusId : number
}


export default function LotAccordion() {

    //data states
    const[currentDate, setCurrentDate] = useState<Date>(new Date());

    const[currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

    const[currentParsedTime, setCurrentParsedTime] = useState<string>('');

    const[lots, setLots] = useState<Array<Lot>>([]);
    const[statuses, setStatuses] = useState<Array<Status>>([]);
    const[statusEvents, setStatusEvents] = useState<Array<StatusEvent>>([]);

    const selectedTimeZone = useContext(TimeZoneContext);
    // console.log(selectedTimeZone);



    //TODO: Allow for setting of a certain timezone

    var today : Date = new Date();
    // console.log(today);

    //query all objects 
    useEffect(() => {
        LotService.getAllLots()
            .then(res => setLots(res.data));

            StatusService.getAllStatuses()
            .then(res => setStatuses(res.data));

            StatusEventService.getAllStatusEvents()
            .then(res => setStatusEvents(res.data));

            TimeZoneService.getCurrentTimeOfTimeZone(selectedTimeZone)
            .then(res => setCurrentDateTime(res.data.datetime))
            .catch(error => console.log(error));
        

    }, []);

    //useMemo seemed to work here  -->https://www.youtube.com/watch?v=lStfMBiWROQ

    // useEffect(() => {

    //     StatusService.getAllStatuses()
    //         .then(res => setStatuses(res.data));


    // }, [lots]);

    // useEffect(() => {

    //     StatusEventService.getAllStatusEvents()
    //         .then(res => setStatusEvents(res.data));
    // },[statuses]);

    // useEffect(()=>{
    //     TimeZoneService.getCurrentTimeOfTimeZone(selectedTimeZone)
    //     .then(res => setCurrentDateTime(res.data.datetime))
    //     .catch(error => console.log(error)); //TODO: keep track of the system time to detect a change in each minute


    // }, [statusEvents]);


// console.log(lots);
// console.log(statuses);
// console.log(statusEvents);
// console.log(currentDateTime);

console.log(new Date());
    
    return (
        <div >
            {/*https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/*/}
        
            <ColorLegend statuses={statuses}/>

            <div className="page">(Timezone:<i>{selectedTimeZone}</i>)</div>

            <div className="accordion">
                
            {lots.map(lot => (

                <CurrentParsedTimeContext.Provider value={currentDateTime} key={lot.LotID}>
                    <AccordionEntry key={lot.LotID} lot={lot} 
                        currentDate={currentDate} 
                        timeZone={selectedTimeZone}
                        statuses={statuses}
                        statusEvents={statusEvents}
                    />
                </CurrentParsedTimeContext.Provider>
            ))

            }
            </div>



      


        </div>

        
    )
}
