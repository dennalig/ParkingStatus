import React, {useState, useEffect} from 'react'
import ColorLegend from './ColorLegend';

import LotService from '../../services/LotService';
import StatusService from '../../services/StatusService';
import StatusEventService from '../../services/StatusEventService';

import DateToUi from '../admin_features/DateToUi';


export default function LotAccordion() {

    const[currentDate, setCurrentDate] = useState<any>(new Date());

    //TODO: Allow for setting of a certain timezone

    var today : Date = new Date();
    console.log(today.getMinutes());

    useEffect(()=>{

    }, [currentDate]);
    
    return (
        <div >
            {/*https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/*/}
        
            <ColorLegend />

        <div className="page">
            Lot Accordion

            <div>
                {currentDate.toString()}
            </div>


        </div>
      


        </div>

        
    )
}
