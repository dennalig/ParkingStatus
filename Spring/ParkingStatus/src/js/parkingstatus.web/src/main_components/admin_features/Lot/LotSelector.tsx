import React from 'react'
import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
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

                <div>Lot Selector</div>
            }
          
        </div>


    )
}

export default LotSelector;
