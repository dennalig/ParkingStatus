import React,  { useState, useEffect } from 'react'
import '../style/navigationbar.css'


import { Link } from 'react-router-dom';
import EditTimeZone from '../../admin_features/general/TimeZone/EditTimeZone';

const TimeZoneButton : React.FC<any> = (props) => {

    const[zoneEditFormIsVisible, setZoneEditFormIsVisible] = useState<boolean>(false);



    const renderSelectView = () =>{
        setZoneEditFormIsVisible(!zoneEditFormIsVisible);
    }

    const retrieveTimeZone = (timezoneName: string) =>{
        // console.log(timezoneName);
        props.retrieveTimeZone(timezoneName);
    }
    return (
        <div>
               <button 
                    className='timezone_button' onClick={renderSelectView}>
                    Edit TimeZone
                </button>

                {zoneEditFormIsVisible &&

                    <>
                     <button onClick={renderSelectView}>X</button>
                    <EditTimeZone retrieveTimeZone={retrieveTimeZone}/>
                   

                    </>

                }

        </div>
    )
}
export default TimeZoneButton;