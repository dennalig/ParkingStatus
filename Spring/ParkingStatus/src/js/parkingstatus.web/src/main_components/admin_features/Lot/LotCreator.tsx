import React, {useState, useEffect} from 'react'
import type { FormEvent } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import DateCalendar from "../Lot/Date/DateCalendar";

import LotService from '../../../services/LotService';
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';


const LotCreator: React.FC<any> =(props) => {

    var nameMessage : string = 'The Lot name must not be empty.';
    var idMessage : string = 'This Id is already assigned to a Lot.';
    var lssIdMessage : string = 'This Id is already assigned to a Lot Status Schedule.'
    
    const[createdLot, setCreatedLot] = useState<any>(null);

    const[validName, setValidName] = useState<boolean>(true);
    const[validId, setValidId] = useState<boolean>(true);
    const[enteredValues, setValidValues] = useState<any>(false);

    //previously stored lots for lot status schedule id validation
    const[storedLots, setStoredLots] = useState<Array<any>>([]);
    const[storedLSSchedules, setStoredLSSchedules] = useState<Array<number>>([]);
    //for any use state where we may alter lots
    const[ranFirstStoredLots, setRanFirstStoredLots] = useState<boolean>(false);

    //valid new lotstatusschedule id
    const[validLssId, isValidLssId] = useState<boolean>(true);
    //new Lot Status Schedule /Dates which we will recieve from the Date Calendar component or from input here
    const [newLSS, setNewLSS] = useState<any>(null);
    const [newLSSDates, setNewLotSSDates]= useState<Array<any>>([]);

    useEffect(() => {
        //at the very beginning we will query all lots
        LotService.getAllLots()
            .then(res => setStoredLots(res.data));
    }, []);

    useEffect(() => { // once storedLots is changed we will 
        if(storedLots.length !== 0 && !ranFirstStoredLots){ // store the lotstatusschedule ids into an array
            storedLots.forEach( e=> {
                if(e.LotStatusSchedule != null){
                    // console.log(e);
                    let currentStoredLSS = storedLSSchedules;
                    // console.log(currentStoredLSS);
                    currentStoredLSS.push(e.LotStatusSchedule.LotStatusScheduleId);
                    setStoredLSSchedules(currentStoredLSS);
                    }
            });

            setRanFirstStoredLots(true);
            isValidLssId(!storedLSSchedules.includes(1))
            // console.log(storedLots);

        }

    }, [storedLots]);


    //renders error message



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

        // validate lot status schedule id input here before sending it off to be posted.

        setValidName(true);
        setValidId(true);

        setValidValues(true);
    }

    //message to user
    const handleLSSIdChange = (event: any)=>{
        // console.log(!storedLSSchedules.includes(parseInt(event.target.value)));
        isValidLssId(!storedLSSchedules.includes(parseInt(event.target.value)));
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
            <div>
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
                        <label >Lot Status Schedule ID:</label>
                        <input id="lotstatusscheduleid" type="number" 
                            className="object_id"
                            min="1"
                            defaultValue="1" 
                            onChange={e => handleLSSIdChange(e)}/>
                        </fieldset>

                        {!validLssId && <div className="error_message_style">{lssIdMessage}</div>}

                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="lotstatusschedulename" type="text" className="object_name">
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
                
                <div>
                    <DateCalendar hasLSSId={false}/>
                </div>

            </div>
                
            }

       
        </div>
    )
}
export default LotCreator;
