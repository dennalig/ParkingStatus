import React, {useState, useEffect, useContext} from 'react'
import RandomDivValue from "../../inaccessible_features/RandomDivValue";

import CreateButton from "../../admin_features/general/CreateButton";

import StatusService from '../../../services/StatusService';

//type imports

import { Link } from 'react-router-dom';

//contexts
import { LoginEmailContext } from '../../loginContexts/LoginEmailContext';

//default no access
import DefaultNoAccess from '../../inaccessible_features/DefaultNoAccess';


const StatusSelector : React.FC<any> = (props) => {

const [statusList, setStatusList] = useState<Array<any>>([]);
const [displayStatus, setDisplayStatus] = useState<any>(null);

//deletion value 
const [deleteSelected, setDeleteSelected] = useState<boolean>(false);

//ask the use before confirming
const[displayDeleteSure, setDisplayDeleteSure] = useState<boolean>(false);


useEffect(() => {
    StatusService.getAllStatuses()
        .then(res => setStatusList(res.data));
}, []);

//delete effect
useEffect(()=>{

    if(deleteSelected){
        // console.log(displayStatus);
        // console.log(deleteSelected);

        StatusService.deleteStatus(displayStatus.statusId)
            .then(res => console.log(res.data))
            .catch(error =>{
                console.log(error);
            });

        //reset back to false
        setDeleteSelected(false);
        setDisplayDeleteSure(false);

        //referesh page
        //https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react

        window.location.reload();

    }

    // on delete set the displayStatus back to null
}, [deleteSelected]);



const handleClick = (status: any, event: any) =>{
    // console.log(status.statusId);
    setDisplayStatus(status);
    setDisplayDeleteSure(false);
    // console.log(status);
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

// console.log(statusList);

const currentAdminUser = useContext(LoginEmailContext);

    return (
        <div>

            {/* {!props.logged_in &&
                <DefaultNoAccess/>
            } */}
    {currentAdminUser !== '' &&
        <>
            <CreateButton create_type="status" />
            <div className="page">
                    Status Selector
            </div>

            <div className="scroller">

                <ul>
                    {
                        statusList.map(status =>
                            <li key={status.statusId}>
                                <button
                                    onClick={(e) =>
                                     handleClick(status, e)}>{status.name}</button>
                            </li>)
                    }

                </ul>

            </div>


            {displayStatus && 

            <>
            <div className="element_clicked">

            {displayStatus.statusId} : {displayStatus.name}
            <br />
            Description: {displayStatus.description}
            <br />
            Color: {displayStatus.color}
            <br />
            
            </div>

            <div className="edit">

                <Link to={'/admin/edit/status/' + displayStatus.statusId}> 
                <button className="edit_button">
                        Edit 
                </button>
                </Link>
                
                <button className="delete_button"
                    onClick={e => displaySure(e)}> Delete </button>
            </div>

            {displayDeleteSure &&

                <div>
                <div className="delete_sure">
                    <b>Are you sure you want to delete status of {displayStatus.statusId}?</b>  
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
            
            
            } {/* end display object section */}

                
        
            </>
        }

            {currentAdminUser === '' &&

                <>
                    <DefaultNoAccess />
                </>

            }
        </div>


    )
}

export default StatusSelector;
