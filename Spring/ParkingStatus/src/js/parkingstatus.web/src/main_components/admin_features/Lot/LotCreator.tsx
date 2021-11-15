import React, {useState, useEffect} from 'react'
import type { FormEvent } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';


const LotCreator: React.FC<any> =(props) => {
    
    const[createdLot, setcreatedLot] = useState<any>(null);

    const handleLotSubmission = async (event : FormEvent<HTMLFormElement>) =>{
        // https://stackoverflow.com/questions/50193227/basic-react-form-submit-refreshes-entire-page
        event.preventDefault(); // stops page from reloading
        console.log("lot submitted");
    }

    //JSON Structure for LOT
    //  LotStatusSchedule: {
    //     LotStatusScheduleDates:[
    //         {
    //             startTime, lotStatusScheduleDateId, 
    //                 lotStatusScheduleId, endTime, statusId
    //         }
    //     Name, LotStatusScehduleId , LotId    ---> lotstatusschedule fields
    //     ]
        
    //     LotName, LotDescription, LotID, LotImage, LotImageName  --> Lot fields 
    // }

    //
    
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div className="page"> 
                    <form className="form_style"
                        onSubmit={event=> {handleLotSubmission(event)}}>

                        <fieldset className="input_style">
                        <label htmlFor="LotID_">Id:</label>
                        <input id="LotID_" type="number" min="1"
                            className="object_id">
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="LotName_">Lot Name:</label>
                        <input id="LotName_" type="text" className="object_name">
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                            id="LotDescription_">
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Image:</label>
                        <input id="LotImage_" type="file" className="object_image">
                        </input>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Status Schedule ID: {"number"}</label>
 
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="Name_" type="text" className="object_name">
                        </input>
                        </fieldset>


                    <fieldset className="input_style">
                        <Link to="/admin/select/lot">
                        <button >Cancel
                        </button>
                        </Link>
                    <button 
                        type="submit">Save</button>
                    </fieldset>
                        
                    </form>

                </div>
            }
        </div>
    )
}
export default LotCreator;
