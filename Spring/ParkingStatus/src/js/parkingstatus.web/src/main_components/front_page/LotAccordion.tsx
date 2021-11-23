import React, {useState, useEffect, useContext} from 'react'

import ColorLegend from './ColorLegend';
import AccordionEntry from './AccordionEntry';

import './style/front_page_style.css';

import LotService from '../../services/LotService';
import StatusService from '../../services/StatusService';
import StatusEventService from '../../services/StatusEventService';

import TimeZoneService from '../../services/TimeZone/TimeZoneService';

import DateToUi from '../admin_features/DateToUi';

import FrontPageHandler from '../../Utility/FrontPageUtility/FrontPageHandler';

import { TimeZoneContext } from '../admin_features/general/TimeZone/TimeZoneContext';


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
    StatusEventDates : any ,
    Description : string | null,
    StatusEventImage: null,
    StatusEventImageName: null,
    StatusEventId : number,
    StatusId : number
}


export default function LotAccordion() {

    //data states
    const[currentDate, setCurrentDate] = useState<any>(new Date());

    const[currentTime, setCurrentTime] = useState<string>('');

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
            .then(res => setCurrentTime(res.data.datetime)); //TODO: keep track of the system time to detect a change in each minute

    }, []);
    


    useEffect(()=>{ // TODO: Detect a Change of the date as well, this may require a request at a certain point in time to the api
        
    }, [currentDate]);

    useEffect(()=>{

        // console.log(currentTime);
        DateToUi.parseCurrentTimeFromAPI(currentTime);

    }, [currentTime])


    
    return (
        <div >
            {/*https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/*/}
        
            <ColorLegend statuses={statuses}/>

            <div className="page">(Timezone:<i>{selectedTimeZone}</i>)</div>

            <div className="accordion">
            {lots.map(lot => 
                <AccordionEntry lot={lot} 
                    currentDate={currentDate} 
                    timeZone={selectedTimeZone}
                    statuses={statuses}
                    statusEvents={statusEvents}
                    />
                )

            }
            </div>



      


        </div>

        
    )
}
