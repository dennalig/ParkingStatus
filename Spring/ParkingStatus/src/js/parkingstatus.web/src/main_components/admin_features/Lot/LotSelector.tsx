import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import CreateButton from "../../admin_features/general/CreateButton";
import LotService from '../../../services/LotService'


const LotSelector : React.FC<any> = (props) => {

    const [lotList, setLotList] = useState<Array<any>>([]);
    const [displayLot, setDisplayLot] = useState<any>(null);


    useEffect(()=>{
        LotService.getAllLots()
            .then(res => setLotList(res.data));
    }, [])

    // console.log(lotList[0].LotName);
    // console.log(props.logged_in);

    const handleClick = (lot: any, event: any) =>{
        // console.log(status.statusId);
        setDisplayLot(lot);
        console.log(lot);
    }
    

    return (
        <div>

            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in  &&

                <>

                <CreateButton create_type="lot"/>
                <div className="page">
                    Lot Selector
                </div>

                <div className="scroller">
                <ul>
                    {
                        lotList.map(lot =>
                            <li key={lot.LotID}>
                                <button 
                                 onClick={(e)=>
                                    handleClick(lot,e)}>
                                        {lot.LotName}</button>
                            </li>)
                    }

                </ul>
                </div>

                {displayLot &&

                <>
                    <div className="element_clicked">
                        {displayLot.LotID} : {displayLot.LotName}
                        <br />
                        Description: {displayLot.LotDescription}
                        <br />
                        Image: {displayLot.LotImageName}
                        <br />

                    </div>

                    <div className="edit">

                    <Link to={'/admin/edit/lot/' + displayLot.LotID}> 
                        <button className="edit_button">
                            Edit 
                        </button>
                    </Link>

                    <button className="delete_button"> Delete </button>
                    </div>
                </>

                    
                }


                </>

            }
          
        </div>


    )
}

export default LotSelector;
