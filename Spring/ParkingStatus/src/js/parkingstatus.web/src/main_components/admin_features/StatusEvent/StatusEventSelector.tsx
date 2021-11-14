import React, {useState, useEffect} from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import CreateButton from "../../admin_features/general/CreateButton";
import StatusEventEdit from "./StatusEventEdit";
import StatusEventService from '../../../services/StatusEventService';


import { Link } from 'react-router-dom';

const StatusEventSelector : React.FC<any> = (props) => {

    const [statusEventList, setStatusEventList] = useState<Array<any>>([]);
    const [displayStatusEvent, setDisplayStatusEvent] = useState<any>(null);

    useEffect(() =>{
        StatusEventService.getAllStatusEvents()
            .then(res => setStatusEventList(res.data));

    }, []);

    const handleClick = (statusevent: any, event: any) =>{
        // console.log(status.statusId);
        setDisplayStatusEvent(statusevent);
        // console.log(statusevent.Description);
    }

    // console.log(statusEventList[0].StatusEventDates[0].startTime);

    return (
        <div>

            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in &&

            <>
            
            <CreateButton create_type="statusevent" />
                <div className="page">
                Status Event Selector
                </div>

                <div className="scroller">
                <ul>
                    {
                    statusEventList.map(statusevent =>
                        <li key={statusevent.StatusEventId}>
                            <button
                                onClick={(e)=>handleClick(statusevent, e)}
                                >{statusevent.Description}</button>
                        </li>)
                    }

                </ul>
            </div>

            {displayStatusEvent &&
                <>
                <div className="element_clicked">
                    
                    {displayStatusEvent.StatusEventId} : {displayStatusEvent.Description}
                    <br />
                    Status ID : {displayStatusEvent.StatusId}
                    <br />
                    Image Name : {displayStatusEvent.StatusEventImageName}  
                </div>

                <div className="edit">
                    <Link to={'/admin/edit/statusevent/'+displayStatusEvent.StatusEventId}> 
                    <button className="edit_button">
                        Edit 
                    </button>
                    </Link>

                <button className="delete_button"> Delete </button>

                </div>

                </>
            }

    
            </>
            }
          
        </div>


    )
}

export default StatusEventSelector;