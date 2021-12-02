import React, {useState, useEffect, useContext} from 'react'

import {Link} from 'react-router-dom'

import RandomDivValue from "../../inaccessible_features/RandomDivValue";
import CreateButton from "../../admin_features/general/CreateButton";
import LotService from '../../../services/LotService'


//contexts
import { LoginEmailContext } from '../../loginContexts/LoginEmailContext';

const LotSelector : React.FC<any> = (props) => {
    
    const [lotList, setLotList] = useState<Array<any>>([]);
    const [displayLot, setDisplayLot] = useState<any>(null);

    const [deleteSelected, setDeleteSelected] = useState<boolean>(false);
    
    const [displayDeleteSure, setDisplayDeleteSure] = useState<boolean>(false);


    useEffect(()=>{
        LotService.getAllLots()
            .then(res => setLotList(res.data));
    }, []);

    //delete use effect

    useEffect(() =>{

        if(deleteSelected){
            //delete lot 

            LotService.deleteLot(displayLot.LotID)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error);
                });
            
            //set dispslay 
            setDeleteSelected(false);
            setDisplayDeleteSure(false);

            window.location.reload();
        }

    },[deleteSelected]);

    // console.log(lotList[0].LotName);
    // console.log(props.logged_in);

    const handleClick = (lot: any, event: any) =>{
        // console.log(status.statusId);
        setDisplayLot(lot);
        setDisplayDeleteSure(false); // --> for if a different value is clicked
        // console.log(lot);
    }

    const displaySure = async (event: any) => {

        setDisplayDeleteSure(true);
    }

    const yesDeleteSure = async (event: any) => {
        setDeleteSelected(true);
    }

    const noDeleteSure = async (event: any) => {
        setDisplayDeleteSure(false);
    }


    const currentAdminUser = useContext(LoginEmailContext);
    // console.log(currentAdminUser);

    return (
        <div>

            {/* {!props.logged_in &&
                <DefaultNoAccess/>
            } */}

         

                

            {currentAdminUser !== '' &&
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

                    <button className="delete_button"
                        onClick={e => displaySure(e)}>
                         Delete 
                    </button>
                    </div>
                    {displayDeleteSure &&

                        <div>
                        <div className="delete_sure">
                            <b>Are you sure you want to delete status of {displayLot.LotID}?</b>  
                        </div>

                        <div className="delete_sure">
                            <button className="yes_delete"
                                onClick={e => yesDeleteSure(e)}>
                                Yes
                            </button>
                            <button className="no_delete"
                                onClick={e => noDeleteSure(e)}>
                                No
                            </button>
                        </div>


                        </div>
                    }
                </>

                }
            </>
              }
            

            
          
        </div>


    )
}

export default LotSelector;
