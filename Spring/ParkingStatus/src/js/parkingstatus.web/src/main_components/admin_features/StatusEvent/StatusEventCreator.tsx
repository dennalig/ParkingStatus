import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import StatusEventService from '../../../services/StatusEventService';
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';

const StatusEventCreator: React.FC<any> =(props) => {

    const[createdStatusEvent, setCreatedStatusEvent]= useState<any>(null);

    const[validId, setValidId] = useState<boolean>(true);
    const[validStatusId, setValidStatusId] = useState<boolean>(true);
    const[enteredValues, setValidValues] = useState<any>(false);


    //secondary states
    const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);

    useEffect ( () =>{

        // console.log(createdStatusEvent);
        
        //main request
        if(enteredValues){
            StatusEventService.createStatusEvent(createdStatusEvent)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error);

                    setValidId(false);
                });
        }


        //secondary object requests 
        StatusService.getAllStatuses()
            .then(res => setStoredStatuses(res.data));
    }, [createdStatusEvent]);

    const handleStatusEventSubmission = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const{ description, statuseventimage,
                statuseventid, statusid } = event.target as typeof event.target &
            {
                description : {value : string}
                statuseventimage : {value : null}
                // statuseventimagename :  {value : string}
                statuseventid : {value : number}
                statusid : {value : number}
            }

            setCreatedStatusEvent({
                StatusEventDates : null,
        
                Description: description.value,
                StatusEventImage : null,
                StatusEventImageName : null,
                StatusEventId : statuseventid.value,
                StatusId : statusid.value
            });

            setValidId(true);
            setValidValues(true);
    } //end handle submission

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
                    <input id="statuseventid" type="number" 
                        min="1"
                        defaultValue="1"
                        className="object_id">
                    </input>
                    </fieldset>

                    <fieldset className="input_style">
                    <label >Description:</label>
                    <textarea className="object_description"
                        id="description">
                    </textarea>
                    </fieldset>

                    <fieldset className="input_style">
                    <label htmlFor="statusid">Status Id:</label>
                    <select id="statusid" 
                        className="object_id">
                            {
                                storedStatuses.map(status => 
                                    <option key={status.statusId}
                                        value={status.statusId}>({status.statusId}) {status.name}</option>
                                        )
                            }
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
