import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import {  Link, RouteComponentProps } from 'react-router-dom';

import LotService from "../../../services/LotService";

import DateCalendar from './Date/DateCalendar';
import {LSSContext} from '../Lot/LSSContext';
import {LSSIDContext} from '../Lot/LSSIDContext';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}

const LotEdit: React.FC<any> =({match}) => {

    var nameMessage : string = 'The Lot name must not be empty.';


    const [idValue, setIdValue]= useState<number>(parseInt(match.params.id));
    const [lot, setLot] = useState<any>(null);

    useEffect(() => {
        LotService.getLotById(idValue)
            .then(res => setLot(res.data));

    }, []);

    const handleSubmit =  async (event : FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        console.log("lot submitted");
    }

        //function to retrieve info from child components
    const pullLSSDates = (dates : Array<any>)=>{

    }
    
    console.log(lot);

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

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
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
                                {lot.LotStatusSchedule &&
                                 lot.LotStatusSchedule.LotStatusScheduleId
                                }
                        </label>
 
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="lotname" type="text" className="object_name"
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
                <LSSContext.Provider value={true}>
                    <LSSIDContext.Provider value={lot.LotStatusSchedule ? 
                        lot.LotStatusSchedule.LotStatusScheduleId : 0} >
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
