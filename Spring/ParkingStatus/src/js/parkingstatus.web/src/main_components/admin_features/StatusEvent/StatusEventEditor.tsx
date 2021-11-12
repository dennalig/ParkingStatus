import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

interface Props {
    logged_in : boolean,
}

const StatusEventEditor: React.FC<Props> =({logged_in}) => {
    return (
        <div>
            
            {!logged_in &&
                <DefaultNoAccess/>
            }

            {logged_in && 
                <div> 
                    Status Event Editor
                </div>
            }
        </div>
    )
}

export default StatusEventEditor;
