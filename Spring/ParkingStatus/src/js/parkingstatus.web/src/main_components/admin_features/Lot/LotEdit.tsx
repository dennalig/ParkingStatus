import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import {  Link, RouteComponentProps } from 'react-router-dom';

import LotService from "../../../services/LotService";

import DateCalendar from './Date/DateCalendar';
import {LSSContext} from '../Lot/LSSContext';
import {LSSIDContext} from '../Lot/LSSIDContext';

import RandomDivValue from "../../inaccessible_features/RandomDivValue";

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}

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

const LotEdit: React.FC<any> =({match}) => {

    var nameMessage : string = 'The Lot name must not be empty.';


    const [idValue, setIdValue]= useState<number>(parseInt(match.params.id));
    const [lot, setLot] = useState<any>(null);

    const[updatedLot, setUpdatedLot] = useState<any>(null);

        //valid new lotstatusschedule id 
        const[validLssId, isValidLssId] = useState<boolean>(true);
        const[currentLSSId, setCurrentLSSId] = useState<number>(1);

    //conditional valid stored values
    const[validName, setValidName] = useState<boolean>(true);
    const[enteredValues, setValidValues] = useState<any>(false);

    //previously stored lots for lot status schedule id validation
    const[storedLots, setStoredLots] = useState<Array<any>>([]);
    const[storedLSSchedules, setStoredLSSchedules] = useState<Array<number>>([]);
    //for any use state where we may alter lots
    const[ranFirstStoredLots, setRanFirstStoredLots] = useState<boolean>(false);

    const apiDates : Array<APILSSDate> = [];

    useEffect(() => {
        LotService.getLotById(idValue)
            .then(res => setLot(res.data));

            LotService.getAllLots()
            .then(res => setStoredLots(res.data));

        

    }, []);

    //set current lotstatusschedule id
    useEffect(() => {
        if(lot){
            if(lot.LotStatusSchedule){
                setCurrentLSSId(lot.LotStatusSchedule.lotStatusScheduleId);
            }
        }

    }, [lot]);

    //
    useEffect(() => { // once storedLots is changed we will 
        if(storedLots.length !== 0 && !ranFirstStoredLots){ // store the lotstatusschedule ids into an array
            storedLots.forEach( e=> {
                if(e.LotStatusSchedule != null){
                    // console.log(e);
                    let currentStoredLSS = storedLSSchedules;
                    // console.log(currentStoredLSS);
                    if(lot){
                        if(lot.LotStatusSchedule){
                            if(e.LotStatusSchedule.LotStatusScheduleId !== 
                                lot.LotStatusSchedule.LotStatusScheduleId){
                                currentStoredLSS.push(e.LotStatusSchedule.LotStatusScheduleId);
                            }

                        }

                    }

                    setStoredLSSchedules(currentStoredLSS);
                    }
            });

            setRanFirstStoredLots(true);
            if(lot){
                if(lot.LotStatusSchedule){
                    isValidLssId(true);
                }
                else{
                    isValidLssId(!storedLSSchedules.includes(1));
                }
            }

            // console.log(storedLots);

        }

    }, [storedLots]);

    useEffect(() =>{
        // console.log(updatedLot);
        if(enteredValues){
            if(updatedLot.LotName === ''){
                setValidName(false);
                return;
            }

            LotService.updateLot(updatedLot.LotID , updatedLot)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error);
                });
        }
    }, [updatedLot]);

    const handleSubmit =  async (event : FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

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

            console.log(lotname.value);
            let newLSSObj : any = null; // conditionally sets the lotstatusschedule obj

            console.log(lotstatusscheduleid);
        if(lotstatusscheduleid){ // only stores non null if valid
            newLSSObj = { 
                LotStatusScheduleDates : apiDates,
                Name : lotstatusschedulename.value,
                LotId : lotid.value,
                LotStatusScheduleId : lotstatusscheduleid.value
    
            }
        }
        // console.log(apiDates);

        setUpdatedLot({
            LotStatusSchedule: newLSSObj,
            LotID : lotid.value,
            LotDescription : lotdescription.value,
            LotName : lotname.value,

            LotImage : null,
        });
        console.log(lotname.value);

        setValidName(true);
        setValidValues(true);


        // console.log("lot submitted");
    }

    const handleLSSIdChange = (event: any)=>{
        // console.log(!storedLSSchedules.includes(parseInt(event.target.value)));
        isValidLssId(!storedLSSchedules.includes(parseInt(event.target.value)));
        setCurrentLSSId(parseInt(event.target.value));
    }

        //function to retrieve info from child components
    const pullLSSDates = (dates : Array<any>)=>{
        if(dates.length !==0){ // we dont want to convert if it is null
            // console.log(dates);

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
    
    // console.log(lot.LotName);

    return (
        <div>

        {lot && 
            <div>

                <div className="page"> 
                    <form className="form_style"
                        onSubmit={e => handleSubmit(e)}>

                        <fieldset className="input_style">
                        <label htmlFor="lotid">Id:</label>
                        <input id="lotid" type="number" min="0"
                        className="object_id"
                        value={lot.LotID}>
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="lotname">Lot Name:</label>
                        <input id="lotname" type="text" className="object_name"
                            defaultValue={lot.LotName}>
                        </input>
                        </fieldset>
                        {!validName && <div className="error_message_style">{nameMessage}</div>}

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                            id="lotdescription"
                        defaultValue={lot.LotDescription}>

                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Image:</label>
                        <input id="lotimage" type="file" className="object_image"
                            defaultValue={lot.LotImage}>
                        </input>
                        </fieldset>

                        <fieldset className="input_style">
                        <label>Lot Status Schedule ID: 
                        <input id="lotstatusscheduleid" type="number" 
                            className="object_id"
                            value={lot.LotStatusSchedule ? lot.LotStatusSchedule.LotStatusScheduleId : 1} 
                            // onChange={e => handleLSSIdChange(e)}
                            />

                        </label>
 
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="lotstatusschedulename" type="text" className="object_name"
                            defaultValue={lot.LotStatusSchedule ? 
                                lot.LotStatusSchedule.Name : null}>
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
                    <LSSIDContext.Provider value={lot.LotStatusSchedule ? 
                        lot.LotStatusSchedule.LotStatusScheduleId : 1} >
                        <DateCalendar retrieveDates={pullLSSDates} preExistingDates={lot.LotStatusSchedule ? 
                            lot.LotStatusSchedule.LotStatusScheduleDates: null}/>
                    </LSSIDContext.Provider>
                </LSSContext.Provider>
                </div>

            </div>
            }
        </div>
    )
}
export default LotEdit;
