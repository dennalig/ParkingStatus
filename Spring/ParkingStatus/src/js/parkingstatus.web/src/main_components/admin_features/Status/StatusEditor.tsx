import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";



const StatusEditor: React.FC<any> =(props) => {
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div> 
                    Status Editor
                </div>
            }
        </div>
    )
}

export default StatusEditor;
