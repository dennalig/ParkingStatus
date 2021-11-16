import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { Link, RouteComponentProps } from 'react-router-dom';

import StatusEventService from '../../../services/StatusEventService';
import StatusService from '../../../services/StatusService';
import LotService from '../../../services/LotService';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}

const StatusEventEdit: React.FC<Props> =({ match }) => {

    const [idValue, setIdValue] = useState<number>(parseInt(match.params.id));
    const [statusEvent, setStatusEvent] = useState<any>(null);

    //secondary states
    const [storedStatuses, setStoredStatuses] = useState<Array<any>>([]);
    const [selectedStatus, setSelectedStatus] = useState<any>(null);

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


    // useEffect(() =>{
    //     StatusService.getStatusById(statusEvent.StatusId)
    //         .then(res => setSelectedStatus(res.data));
            
    // }, [statusEvent])
    // console.log(statusEvent);
    // console.log(storedStatuses);
    
    return (
        <div>
            
            {statusEvent && 
                <div className="page"> 
                <form className="form_style">

                    <fieldset className="input_style">
                    <label htmlFor="statuseventid">Id:</label>
                    <input id="statuseventid" type="number" min="0"
                    className="object_id"
                    defaultValue={statusEvent.StatusEventId}>
                    </input>
                    </fieldset>

                    <fieldset className="input_style">
                    <label >Description:</label>
                    <textarea className="object_description"
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
            }
        </div>
    )
}

export default StatusEventEdit;
