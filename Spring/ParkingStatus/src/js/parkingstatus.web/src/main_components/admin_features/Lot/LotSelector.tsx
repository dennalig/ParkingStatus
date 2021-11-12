import React from 'react'
import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import CreateButton from "../../admin_features/general/CreateButton";

interface Props {
    logged_in : boolean,
}

const LotSelector : React.FC<Props> = ({logged_in}) => {

    return (
        <div>

            {!logged_in &&
                <DefaultNoAccess/>
            }

            {logged_in &&

                <>

                <CreateButton create_type="lot"/>
                <div className="page">
                    Lot Selector
                    </div>

               

              
                
                </>

            }
          
        </div>


    )
}

export default LotSelector;
