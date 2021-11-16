import React, {useState, useEffect} from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import CreateButton from "../../admin_features/general/CreateButton";
import StatusEventEdit from "./StatusEventEdit";
import StatusEventService from '../../../services/StatusEventService';


import { Link } from 'react-router-dom';

const StatusEventSelector : React.FC<any> = (props) => {

    const [statusEventList, setStatusEventList] = useState<Array<any>>([]);
    const [displayStatusEvent, setDisplayStatusEvent] = useState<any>(null);
    
    //deletion value 
    const [deleteSelected, setDeleteSelected] = useState<boolean>(false);

    //asck the use before confirming
    const[displayDeleteSure, setDisplayDeleteSure] = useState<boolean>(false);


    useEffect(() =>{
        StatusEventService.getAllStatusEvents()
            .then(res => setStatusEventList(res.data));

    }, []);

    //delete effect
    useEffect(() => {

        if(deleteSelected){
            //delete statusevent

            StatusEventService.deleteStatusEvent(displayStatusEvent.StatusEventId)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error);
                });

                setDeleteSelected(false);
                setDisplayDeleteSure(false);

                window.location.reload();
        }

    },[deleteSelected]);

    const handleClick = (statusevent: any, event: any) =>{
        // console.log(status.statusId);
        setDisplayStatusEvent(statusevent);
        setDisplayDeleteSure(false);
        // console.log(statusevent.Description);
    }

    const displaySure = async (event : any) =>{

        setDisplayDeleteSure(true);
        
        // console.log(deleteSelected);
    
    }
    
    const yesDeleteSure = async (event : any) =>{
        setDeleteSelected(true);
    }
    
    const noDeleteSure = async (event: any) => {
        setDisplayDeleteSure(false);
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

                <button className="delete_button"
                    onClick={e => displaySure(e)}> Delete </button>

                </div>

                {displayDeleteSure &&

            <div>
<               div className="delete_sure">
                    <b>Are you sure you want to delete status of {displayStatusEvent.StatusId}?</b>  
            </div>

            <div className="delete_sure">
                <button className="yes_delete"
                    onClick={e => yesDeleteSure(e)}>
                     Yes
                </button>
                <button className="no_delete"
                    onClick={e => noDeleteSure(e)}>
                     No
                </button>
            </div>


            </div>
} {/* end displayDeleteSure portion */}

                </>
            }

    
            </>
        }

          
        </div>


    )
}

export default StatusEventSelector;