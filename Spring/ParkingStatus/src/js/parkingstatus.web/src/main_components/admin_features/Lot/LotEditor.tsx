import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";




const LotEditor: React.FC<any> =(props) => {
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div> 
                    Lot Editor
                </div>
            }
        </div>
    )
}
export default LotEditor;
