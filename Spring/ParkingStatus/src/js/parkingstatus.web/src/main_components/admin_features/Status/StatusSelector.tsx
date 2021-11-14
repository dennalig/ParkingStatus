import React, {useState, useEffect} from 'react'
import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import CreateButton from "../../admin_features/general/CreateButton";

import StatusService from '../../../services/StatusService';
import StatusEdit from '../Status/StatusEdit';

//type importd

import { Link } from 'react-router-dom';


const StatusSelector : React.FC<any> = (props) => {

const [statusList, setStatusList] = useState<Array<any>>([]);
const [displayStatus, setDisplayStatus] = useState<any>(null);


useEffect(() => {
    StatusService.getAllStatuses()
        .then(res => setStatusList(res.data));
}, []);



const handleClick = (status: any, event: any) =>{
    // console.log(status.statusId);
    setDisplayStatus(status);
    console.log(status);
}

// console.log(statusList);

    return (
        <div>

            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in &&

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
                
                <button className="delete_button"> Delete </button>
            </div>
            </>
            
            
            }

                
            </>
            }
          
        </div>


    )
}

export default StatusSelector;
