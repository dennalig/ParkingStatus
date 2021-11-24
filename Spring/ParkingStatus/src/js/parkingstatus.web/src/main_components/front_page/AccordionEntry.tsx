import React, {useState, useEffect, useContext, useMemo} from 'react'

import { CurrentParsedTimeContext } from './CurrentParsedTimeContext';

import FrontPageHandler from '../../Utility/FrontPageUtility/FrontPageHandler';

import './style/front_page_style.css';

//current props
// lot--> that given lot object
//currentDate --> current date
//timezone --> selected timezone
// [] status --> an array of all statuses that we will then search for

interface EntryProps {

}
const AccordionEntry: React.FC<any> = (props) => {

    const[isActive, setIsActive] = useState(false);

    const [statusEventValue, setStatusEventValue] = useState<any>(null); // check status event state first 

    const[lssValue, setLssValue] = useState<any>(null);

    const currentDateTimeValue : Date = useContext(CurrentParsedTimeContext);

    // console.log(currentDateTimeValue);
 

    // console.log(currentTimeValue);
    const date: Date = new Date(currentDateTimeValue);

    useMemo(() =>{
    // console.log(props.lot.LotID);
       let StatusEventResult : any = null;
       FrontPageHandler.findCorrespondingStatusEventDate(currentDateTimeValue, props.statuses ,props.statusEvents, 
            props.lot.LotID)
            .then(result => setStatusEventValue(result));

            // console.log(StatusEventResult);
        FrontPageHandler.findCorrespondingLSSDate(currentDateTimeValue, props.statuses, props.lot);
        // console.log(props.statuses);

    }, [props.statuses, props.statusEvents, props.timeZone, props.currentDate]);

    

    // console.log(props.lot.LotID);
    // console.log(props.statusEvents);
    // console.log(statusValue[0]);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <>
                    <div>{props.lot.LotName}</div>
                    <div>{isActive ? '-' : '+'}</div>

                </>

            </div>

                {isActive && 
                <>
                    <div className="accordion-content">
                        <div><i>{props.lot.LotDescription}</i></div>
                        <div>Current Status: {statusEventValue[0] ? statusEventValue[0].Description: 'none'}</div>
                        

                        {props.lot.LotStatusSchedule &&
                            <div><b>{props.lot.LotStatusSchedule.Name ?
                                 props.lot.LotStatusSchedule.Name: ''}</b></div>
                        }

                        
                    </div>

                </>
                 
                }

    </div>
    )
}
export default AccordionEntry;
