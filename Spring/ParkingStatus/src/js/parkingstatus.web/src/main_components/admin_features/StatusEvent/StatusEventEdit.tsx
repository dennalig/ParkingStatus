import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { Link, RouteComponentProps } from 'react-router-dom';

import StatusEventService from '../../../services/StatusEventService';
import StatusService from '../../../services/StatusService';
import LotService from '../../../services/LotService';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import EventDateCalendar from './Date/EventDateCalendar';
import {SEContext} from "./SEContext";
import {SEIDContext} from "./SEIDContext";

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}


type APISEDate = {
    startTime: string | null,
    statusId : 0, // not used
    endTime: string | null,
    lotId: number,
    statusEventId: number
}
const StatusEventEdit: React.FC<Props> =({ match }) => {
    

    const [idValue, setIdValue] = useState<number>(parseInt(match.params.id));
    const [statusEvent, setStatusEvent] = useState<any>(null);

    //new updated one that we will store
    const[updatedStatusEvent, setUpdatedStatusEvent] = useState<any>(null);

    const[enteredValues, setValidValues] = useState<any>(false);

    //secondary states
    const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);
    const [selectedStatus, setSelectedStatus] = useState<any>(null);

    const apiSEDates : Array<APISEDate> = [];

    //runs on first go
    useEffect(()=>{
        StatusEventService.getStatusEventById(idValue)
            .then(res => setStatusEvent(res.data));

        //secondary setting
        StatusService.getAllStatuses()
            .then(res => setStoredStatuses(res.data));
        
            // take this and loop through until we found ours

    }, []);

    //secondary querying for statuses we will need to do lots too --> passes in changed statusEvent
    useEffect(() => {

        if(statusEvent !=null){
            // console.log(statusEvent);
            StatusService.getStatusById(statusEvent.StatusId)
                    .then(res => setSelectedStatus(res.data));


        }

    }, [statusEvent]);

    //for when we submit the updated status event

    useEffect(()=> {

        if(enteredValues){
            //submit new updatedStatusEvent

            StatusEventService.updateStatusEvent(updatedStatusEvent.StatusEventId, updatedStatusEvent)
                .then(res => console.log(res.data))
                .catch(error =>{
                    console.log(error);
                });
        }

    }, [updatedStatusEvent]);

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


        //assign any new statusevent dates
        let newSEDatesObj : Array<any> = apiSEDates;

        setUpdatedStatusEvent({
            StatusEventDates : newSEDatesObj,

            Description: description.value,
            StatusEventImage : null,
            StatusEventImageName : null,
            StatusEventId : statuseventid.value,
            StatusId : statusid.value
        });

        setValidValues(true);
    }

    const pullSEDates = (seDates : Array<any>) => {
        // pulls any new saved dates from the event date calendar

        if(seDates.length !== 0){//// we dont want to convert if it is null
            console.log(seDates);

            apiSEDates.splice(0, apiSEDates.length); // this allows no duplicates in the array
            
            seDates.map(reactSEDate => apiSEDates.push({
                startTime : reactSEDate.startTime,
                statusId: 0,
                endTime : reactSEDate.endTime, 
                lotId : reactSEDate.lotId,
                statusEventId : reactSEDate.statusEventId
            }));

            console.log(apiSEDates);
        }
    }


    // useEffect(() =>{
    //     StatusService.getStatusById(statusEvent.StatusId)
    //         .then(res => setSelectedStatus(res.data));
            
    // }, [statusEvent])
    // console.log(statusEvent);
    // console.log(storedStatuses);
    
    return (
        <div>
            
            {statusEvent && 

            <div>
                <div className="page"> 
                <form className="form_style"
                    onSubmit={e => handleStatusEventSubmission(e)}>

                    <fieldset className="input_style">
                    <label htmlFor="statuseventid">Id:</label>
                    <input id="statuseventid" type="number" min="0"
                    className="object_id"
                    value={statusEvent.StatusEventId}>
                    </input>
                    </fieldset>

                    <fieldset className="input_style">
                    <label >Description:</label>
                    <textarea className="object_description"
                        id="description"
                        defaultValue={statusEvent.Description}>
                    </textarea>
                    </fieldset>

                    <fieldset className="input_style">
                    <label htmlFor="statusid">Status Id:</label>
                    <select id="statusid" className="reference_object_id">
                        <option id="default" key ={statusEvent.StatusId} 
                            value={statusEvent.StatusId} selected>
                            ({statusEvent.StatusId }) 
                                {(selectedStatus != null ? 
                                    selectedStatus.name: '')}</option>

                        {
                        storedStatuses.map(status => 
                                <option key={status.statusId} 
                                    value={status.statusId}>({status.statusId}){status.name} </option>
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

                </div>

                <div>
                <SEContext.Provider value={true}>
                    <SEIDContext.Provider value={statusEvent.StatusEventId}>
                        <EventDateCalendar retrieveEventDates={pullSEDates} 
                            preExistingEventDates={statusEvent.StatusEventDates}/>
                    </SEIDContext.Provider>
                </SEContext.Provider>
                </div>
            </div>
            }
        </div>
    )
}

export default StatusEventEdit;
