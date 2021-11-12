import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";


interface Props {
    logged_in : boolean,
}

const LotEditor: React.FC<Props> =({logged_in}) => {
    return (
        <div>
            
            {!logged_in &&
                <DefaultNoAccess/>
            }

            {logged_in && 
                <div> 
                    Lot Editor
                </div>
            }
        </div>
    )
}
export default LotEditor;
