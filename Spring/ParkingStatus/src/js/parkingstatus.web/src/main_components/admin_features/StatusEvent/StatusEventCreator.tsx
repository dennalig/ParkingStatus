import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import EventDateCalendar from './Date/EventDateCalendar';
import {SEContext}  from './SEContext';
import {SEIDContext} from './SEIDContext';

import StatusEventService from '../../../services/StatusEventService';
import StatusService from '../../../services/StatusService';


import '../../general_style/input_style.css';

type APISEDate = {
    startTime: string | null,
    statusId : 0, // not used
    endTime: string | null,
    lotId: number,
    statusEventId: number
}

const StatusEventCreator: React.FC<any> =(props) => {

    var idMessage : string = 'This Id is already assigned to a status event.';

    const[createdStatusEvent, setCreatedStatusEvent]= useState<any>(null);
    const[createdSEId, setCreatedSEIId] = useState<number>(1);

    const[validId, setValidId] = useState<boolean>(true);
    

    const[enteredValues, setValidValues] = useState<any>(false);

    //previously stored SE's for SE id validation
    const[storedStatusEvents, setStoredStatusEvents] = useState<Array<any>>([]);
    const[storedSEIds, setStoredSEIds] = useState<Array<number>>([]);


    //all statuses we have to work with 
    const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);

    const [newSEDates, setNewSEDates] = useState<Array<APISEDate>>([]);

    const apiSEDates : Array<APISEDate> = [];

    //runs on first go
    useEffect(() => {
                //secondary object requests 
        StatusService.getAllStatuses()
            .then(res => setStoredStatuses(res.data));

        StatusEventService.getAllStatusEvents()
            .then(res => setStoredStatusEvents(res.data));
    }, []);

    //runs once we have stored status events from previous
    useEffect(() =>{

        if(storedStatusEvents.length !== 0){
            let currentSEIds = storedSEIds;

            storedStatusEvents.forEach( e =>{
                currentSEIds.push(e.StatusEventId)
            });

            setStoredSEIds(currentSEIds);
            setValidId(!storedSEIds.includes(1));
        }

    }, [storedStatusEvents]);


    //runs when we create a status event
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

            setValidValues(true);
    } //end handle submission

    //message to user for status event id
    const handleSEIdChange = (event: any)=>{
        setValidId(!storedSEIds.includes(parseInt(event.target.value)));
        setCreatedSEIId(parseInt(event.target.value));
    }

    const pullSEDates = (seDates : Array<any>) => {
        // pulls any new saved dates from the event date calendar

        if(seDates.length !== 0){//// we dont want to convert if it is null
            console.log(seDates);

            apiSEDates.splice(0, apiSEDates.length); // this allows no duplicates in the 
            
            seDates.map(reactSEDate => apiSEDates.push({
                startTime : reactSEDate.startTime,
                statusId: 0,
                endTime : reactSEDate.endTime, 
                lotId : reactSEDate.lotId,
                statusEventId : reactSEDate.statusEventId
            }));
        }
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
            <div>
                <div className="page"> 
                <form className="form_style"
                    onSubmit={e => handleStatusEventSubmission(e)}>

                    <fieldset className="input_style">
                    <label htmlFor="statuseventid">Id:</label>
                    <input id="statuseventid" type="number" 
                        min="1"
                        defaultValue="1"
                        className="object_id"
                        onChange={e => handleSEIdChange(e)}>
                    </input>
                    </fieldset>

                    {!validId && <div className="error_message_style">{idMessage}</div>}

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
                        <Link to="/admin/select/statusevent">
                        <button >Cancel
                        </button>
                        </Link>
                    <button 
                        type="submit">Save</button>
                    </fieldset>
                        
                    
                </form>
                </div> {/* End form div*/}

                <div>{/* Start Calendar div*/}
                <SEContext.Provider value={validId}>
                    <SEIDContext.Provider value={createdSEId}>
                        <EventDateCalendar retrieveDates={pullSEDates} preExistingEventDates={null}/>
                    </SEIDContext.Provider>
                </SEContext.Provider>

                </div>
            </div>
            }
        </div>
    )
}

export default StatusEventCreator;
