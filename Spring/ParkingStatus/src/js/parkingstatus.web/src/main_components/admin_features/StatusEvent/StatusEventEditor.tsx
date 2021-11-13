import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";


const StatusEventEditor: React.FC<any> =(props) => {
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div> 
                    Status Event Editor
                </div>
            }
        </div>
    )
}

export default StatusEventEditor;
