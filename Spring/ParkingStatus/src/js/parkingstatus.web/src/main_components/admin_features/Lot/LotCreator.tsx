import React, {useState, useEffect, useContext} from 'react'
import type { FormEvent } from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import RandomDivValue from "../../inaccessible_features/RandomDivValue";
import DateCalendar from "../Lot/Date/DateCalendar";

import LotService from '../../../services/LotService';
import StatusService from '../../../services/StatusService';

//contexts for the DateCalendar Child component
import {LSSContext} from '../Lot/LSSContext';
import {LSSIDContext} from '../Lot/LSSIDContext';
import { LoginEmailContext } from '../../loginContexts/LoginEmailContext';

import '../../general_style/input_style.css';

//default no access
import DefaultNoAccess from '../../inaccessible_features/DefaultNoAccess';


type APILSSDate = {
    startTime: string | null,
    statusId: number | null,
    endTime: string | null,
    lotStatusScheduleId: number
  }

type LotStatusScheduleobj = { 
    LotStatusScheduleDates : Array<APILSSDate> | null,
    Name : string | null,
    LotId : number,
    LotStatusScheduleId : number
}



const LotCreator: React.FC<any> =(props) => {

    var nameMessage : string = 'The Lot name must not be empty.';
    var idMessage : string = 'This Id is already assigned to a Lot.';
    var lssIdMessage : string = 'This Id is already assigned to a Lot Status Schedule.';
    
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
    const[currentLSSId, setCurrentLSSId] = useState<number>(1);
    //new Lot Status Schedule /Dates which we will recieve from the Date Calendar component or from input here
    const [newLSS, setNewLSS] = useState<any>(null);
    const [newLSSDates, setNewLotSSDates]= useState<Array<APILSSDate>>([]);


    //
    const apiDates : Array<APILSSDate> = [];


    const currentAdminUser = useContext(LoginEmailContext);

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
            isValidLssId(!storedLSSchedules.includes(1));
            // console.log(storedLots);

        }

    }, [storedLots]);


    //renders error message



    useEffect( () =>{
        if(enteredValues && validLssId){
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
                lotimage, lotstatusschedulename ,
                    lotstatusscheduleid} = event.target as typeof event.target &
                {
                        lotname : {value : string}
                        lotdescription : {value: string}
                        lotid : {value: number}
                        lotimage : {value : null}

                        lotstatusschedulename : {value : string}
                        lotstatusscheduleid : {value : number}
                        // lotimagename : {value : string}
                }

            //TODO : insert lotstatusschedule and lotstatusschedue configs here 

        // console.log(apiDates);

        let newLSSObj : any = null; // conditionally sets the lotstatusschedule obj

        if(validLssId){ // only stores non null if valid
            newLSSObj = { 
                LotStatusScheduleDates : apiDates,
                Name : lotstatusschedulename.value,
                LotId : lotid.value,
                LotStatusScheduleId : lotstatusscheduleid.value
    
            }
        }

        // console.log(newLSSObj);

        setCreatedLot({
            LotStatusSchedule: newLSSObj,
            
            LotName : lotname.value,
            LotDescription : lotdescription.value,
            LotID : lotid.value,
            LotImage : null,
            // LotImageName : lotimagename.value

        });

        // console.log(createdLot);

        // validate lot status schedule id input here before sending it off to be posted.

        setValidName(true);
        setValidId(true);

        setValidValues(true);
    }

    // console.log(createdLot);
    console.log(validLssId);

    //message to user for lot status schedule id
    const handleLSSIdChange = (event: any)=>{
        // console.log(!storedLSSchedules.includes(parseInt(event.target.value)));
        isValidLssId(!storedLSSchedules.includes(parseInt(event.target.value)));
        setCurrentLSSId(parseInt(event.target.value));
    }

    //function to retrieve info from child components
    const pullLSSDates = (dates : Array<any>)=>{

        if(dates.length !==0){ // we dont want to convert if it is null
            console.log(dates);

            apiDates.splice(0, apiDates.length); // this allows no duplicates in the array
            dates.map(reactDate => apiDates.push({
                startTime : reactDate.startTime,
                statusId : reactDate.statusId,
                endTime : reactDate.endTime,
                lotStatusScheduleId : reactDate.lotStatusScheduleId
                
            }));

            console.log(apiDates);
            
            //convert from react LSSDate w/ react Id to no api LSSDate with no react id
        }

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
            
            {/* {!props.logged_in &&
                <DefaultNoAccess/>
            } */}


    {currentAdminUser !== '' &&
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

                <LSSContext.Provider value={validLssId}>
                    <LSSIDContext.Provider value={currentLSSId} >
                    <DateCalendar retrieveDates={pullLSSDates} preExistingDates={null}/>
                    </LSSIDContext.Provider>
                </LSSContext.Provider>

                </div>

            </div>
                
            
        }

            {currentAdminUser === '' &&

                <>
                    <DefaultNoAccess />
                </>

            }
       
        </div>
    )
}
export default LotCreator;
