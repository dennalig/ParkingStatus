import React, {useState, useEffect, useContext} from 'react'
import ColorLegend from './ColorLegend';


import LotService from '../../services/LotService';
import StatusService from '../../services/StatusService';
import StatusEventService from '../../services/StatusEventService';

import DateToUi from '../admin_features/DateToUi';

import { TimeZoneContext } from '../admin_features/general/TimeZone/TimeZoneContext';


export default function LotAccordion() {

    const[currentDate, setCurrentDate] = useState<any>(new Date());

    //TODO: Allow for setting of a certain timezone

    var today : Date = new Date();
    console.log(today);

    useEffect(()=>{

    }, [currentDate]);

    const selectedTimeZone = useContext(TimeZoneContext);
    console.log(selectedTimeZone);
    
    return (
        <div >
            {/*https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/*/}
        
            <ColorLegend />

        <div className="page">
            Lot Accordion

            <div>
                
            </div>


        </div>
      


        </div>

        
    )
}
