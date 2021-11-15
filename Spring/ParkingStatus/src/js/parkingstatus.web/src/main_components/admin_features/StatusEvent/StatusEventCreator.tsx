import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import StatusEventService from '../../../services/StatusEventService';
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';

const StatusEventCreator: React.FC<any> =(props) => {

    const handleStatusEventSubmission = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    }

    //JSON structure for STATUSEVENT
    // {
    //     StatusEventDates : [
    //         {
    //             startTime, statusEventDateId, 
    //                 lotId, endTime, 
    //                     statusEventId, statusId
    //         } --> statusEventDate values
    //     ]

    //     Description, StatusEventImage, StatusEventImageName,   
    //         StatusEventId, StatusId    --> StatusEvent attributes
    // }

    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div className="page"> 
                <form className="form_style"
                    onSubmit={e => handleStatusEventSubmission(e)}>

                    <fieldset className="input_style">
                    <label htmlFor="statuseventid">Id:</label>
                    <input id="statuseventid" type="number" min="0"
                        className="object_id">
                    </input>
                    </fieldset>

                    <fieldset className="input_style">
                    <label >Description:</label>
                    <textarea className="object_description">
                    </textarea>
                    </fieldset>

                    <fieldset className="input_style">
                    <label htmlFor="statusid">Status Id:</label>
                    <select id="statusid" 
                    className="object_id">
                    </select>
                    </fieldset>

                    <fieldset className="input_style">
                    <label >Status Event Image:</label>
                    <input id="statusimage" type="file" className="object_image">
                    </input>
                    </fieldset>

                    <fieldset className="input_style">
                        <Link to="/admin/select/lot">
                        <button >Cancel
                        </button>
                        </Link>
                    <button 
                        type="submit">Save</button>
                    </fieldset>
                        
                    
                </form>

            </div>
            }
        </div>
    )
}

export default StatusEventCreator;
