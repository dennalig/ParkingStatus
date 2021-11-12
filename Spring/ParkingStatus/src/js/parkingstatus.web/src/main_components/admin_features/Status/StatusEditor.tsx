import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

interface Props {
    logged_in : boolean,
}

const StatusEditor: React.FC<Props> =({logged_in}) => {
    return (
        <div>
            
            {!logged_in &&
                <DefaultNoAccess/>
            }

            {logged_in && 
                <div> 
                    Status Editor
                </div>
            }
        </div>
    )
}

export default StatusEditor;
