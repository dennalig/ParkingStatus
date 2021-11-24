import React, {useState, useEffect, useContext} from 'react'

import { CurrentParsedTimeContext } from './CurrentParsedTimeContext';

import FrontPageHandler from '../../Utility/FrontPageUtility/FrontPageHandler';

import './style/front_page_style.css';

//current props
// lot--> that given lot object
//currentDate --> current date
//timezone --> selected timezone
// [] status --> an array of all statuses that we will then search for
const AccordionEntry: React.FC<any> = (props) => {

    const[isActive, setIsActive] = useState(false);

    const currentDateTimeValue : Date = useContext(CurrentParsedTimeContext);

    // console.log(currentTimeValue);
    const date: Date = new Date(currentDateTimeValue);

    console.log(date.getTime());

    const findCorrespondingStatusEventDate = (lot: any) =>{
        return FrontPageHandler.findCorrespondingStatusEventDate(currentDateTimeValue, 
            props.statusEvents, lot.LotID
            );
    }

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
                        <div>Current Status: {findCorrespondingStatusEventDate(props.lot)}</div>

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
