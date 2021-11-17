import React, {useState, useEffect} from 'react'
import type { FormEvent } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import DateCalendar from "../Lot/Date/DateCalendar";

import LotService from '../../../services/LotService';
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';


const LotCreator: React.FC<any> =(props) => {

    //TODO: Check if sub ids already exist on frontend 
    var nameMessage : string = 'The Lot name must not be empty.';
    var idMessage : string = 'This Id is already assigned to a Lot.';
    
    const[createdLot, setCreatedLot] = useState<any>(null);

    const[validName, setValidName] = useState<boolean>(true);
    const[validId, setValidId] = useState<boolean>(true);
    const[enteredValues, setValidValues] = useState<any>(false);

    useEffect( () =>{

        if(enteredValues){
            // console.log(createdLot);

            if(createdLot.LotName ===''){
                setValidName(false);
                return;
            }
            LotService.createLot(createdLot)
                .then(res => console.log(res.data))
                .catch(error =>{
                    console.log(error);
                    setValidId(false);
                });
        }

    }, [createdLot]);

    const handleLotSubmission = async (event : FormEvent<HTMLFormElement>) =>{
        // https://stackoverflow.com/questions/50193227/basic-react-form-submit-refreshes-entire-page
        event.preventDefault(); // stops page from reloading
       
        const{ lotname, lotdescription, lotid, 
                lotimage} = event.target as typeof event.target &
                {
                        lotname : {value : string}
                        lotdescription : {value: string}
                        lotid : {value: number}
                        lotimage : {value : null}
                        // lotimagename : {value : string}
                }

            //TODO : insert lotstatusschedule and lotstatusschedue configs here 

        setCreatedLot({
            LotStatusSchedule: null,
            
            LotName : lotname.value,
            LotDescription : lotdescription.value,
            LotID : lotid.value,
            LotImage : null,
            // LotImageName : lotimagename.value

        });

        setValidName(true);
        setValidId(true);

        setValidValues(true);
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
                        <label htmlFor="lotid">Id:</label>
                        <input id="lotid" type="number" min="1"
                            defaultValue="1"
                            className="object_id">
                        </input>
                        </fieldset>

                        {!validId && <div className="error_message_style">{idMessage}</div>}


                        <fieldset className="input_style">
                        <label htmlFor="lotname">Lot Name:</label>
                        <input id="lotname" type="text" className="object_name">
                        </input>
                        </fieldset>

                        {!validName && <div className="error_message_style">{nameMessage}</div>}

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                            id="lotdescription">
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Image:</label>
                        <input id="lotimage" type="file" className="object_image">
                        </input>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Status Schedule ID: {"number"}</label>
 
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="lotstatusschedulename" type="text" className="object_name">
                        </input>
                        </fieldset>

                        <DateCalendar />


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
