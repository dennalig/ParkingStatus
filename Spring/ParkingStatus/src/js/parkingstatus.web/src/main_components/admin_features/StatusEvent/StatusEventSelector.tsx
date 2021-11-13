import React from 'react'
import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import CreateButton from "../../admin_features/general/CreateButton";


const StatusEventSelector : React.FC<any> = (props) => {

    return (
        <div>

            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in &&

            <>
            
            <CreateButton create_type="statusevent" />
                <div className="page">
                Status Selector
                </div>
    
            </>
            }
          
        </div>


    )
}

export default StatusEventSelector;