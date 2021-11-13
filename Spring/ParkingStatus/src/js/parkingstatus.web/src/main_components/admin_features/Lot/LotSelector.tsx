import React from 'react'
import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import CreateButton from "../../admin_features/general/CreateButton";
import { parentPort } from 'worker_threads';


const LotSelector : React.FC<any> = (props) => {

    console.log(props.loginState);

    return (
        <div>

            {!props.loginState &&
                <DefaultNoAccess/>
            }

            {props.loginState  &&

                <>

                <CreateButton create_type="lot"/>
                <div className="page">
                    Lot Selector
                </div>

                <div className="scroller">
                    scroller
                </div>

                <div className="element_clicked">
                    element_clicked
                </div>

                </>

            }
          
        </div>


    )
}

export default LotSelector;
