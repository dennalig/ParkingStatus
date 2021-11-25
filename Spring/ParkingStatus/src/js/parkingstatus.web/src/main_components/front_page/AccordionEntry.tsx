import React, {useState, useEffect, useContext, useMemo} from 'react'

import { CurrentParsedTimeContext } from './CurrentParsedTimeContext';

import FrontPageHandler from '../../Utility/FrontPageUtility/FrontPageHandler';

import './style/front_page_style.css';
import './ColorLegend';


//current props
// lot--> that given lot object
//currentDate --> current date
//timezone --> selected timezone
// [] status --> an array of all statuses that we will then search for

interface EntryProps {

}
const AccordionEntry: React.FC<any> = (props) => {

    const[isActive, setIsActive] = useState(false);

    const [statusEventValue, setStatusEventValue] = useState<Array<any>>([]); // check status event state first 

    const[lssValue, setLssValue] = useState<Array<any>>([]);

    const[statusColor , setStatusColor] = useState<string>('grey');

    const currentDateTimeValue : Date = useContext(CurrentParsedTimeContext);

    

    console.log(currentDateTimeValue);
    // console.log('here');
 

    // console.log(currentTimeValue);
    const date: Date = new Date(currentDateTimeValue);

    useEffect(() =>{
    // console.log(props.lot.LotID);
       let StatusEventResult : any = null;
       FrontPageHandler.findCorrespondingStatusEventDate(currentDateTimeValue, props.statuses ,props.statusEvents, 
            props.lot.LotID)
            .then(result => setStatusEventValue(result));

            // console.log(StatusEventResult);
        FrontPageHandler.findCorrespondingLSSDate(currentDateTimeValue, props.statuses, props.lot)
            .then(result =>setLssValue(result));
        // console.log(props.statuses);

    }, [props.statuses, props.statusEvents, props.timeZone, props.currentDate]);

    
    useEffect(() =>{
        if(statusEventValue !== null){
            if(statusEventValue[2] !== null){
                // console.log(statusEventValue[2]?.color);
                setStatusColor(statusEventValue[2]?.color);
                //https://stackoverflow.com/questions/40735406/checking-for-undefined-in-react
                //?. helps
            }
         
        }


    },[statusEventValue]);

    useEffect(()=> {
        
        if(lssValue !== null  && statusEventValue[2]=== null){
            
            if(lssValue[1] !== null){
                
                setStatusColor(lssValue[1]?.color);
 
                // setStatusColor(lssValue[1].color);
            }
        }
    },[lssValue])

    // console.log(props.lot.LotID);
    // console.log(props.statusEvents);
    // console.log(statusValue[0]);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}
                style={{
                    backgroundColor: statusColor
                }}>
                <>
                    <div>{props.lot.LotName}</div>
                    <div>{isActive ? '-' : '+'}</div>

                </>

            </div>

                {isActive && 
                <>
                    <div className="accordion-content">
                        <div><i>{props.lot.LotDescription}</i></div>
                        {/* nested ternary */}
                        <div>Current Status: {statusEventValue[0] ? statusEventValue[0].Description :
                             (lssValue[0] ? <i>{lssValue[1].description}</i> : 'none')}
                             <div className="display_box" 
                                style={{ backgroundColor: statusColor}}>&nbsp; &nbsp; </div>
                             </div>
                        

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
