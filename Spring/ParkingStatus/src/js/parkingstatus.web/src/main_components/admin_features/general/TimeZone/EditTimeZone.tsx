
import React, {useState, useEffect, useContext, createContext, FormEvent} from 'react'


import TimeZoneService from '../../../../services/TimeZone/TimeZoneService';


const EditTimeZone: React.FC<any> = (props) => {

    const[allTimeZones, setAllTimeZones] = useState<Array<any>>([]);

    const[selectedTimeZone, setSelectedTimeZone] = useState<string | null>("EST");

    useEffect(() =>{

        TimeZoneService.getAllTimeZones()
            .then(res => setAllTimeZones(res.data));


    }, []);

    useEffect(()=>{
        props.retrieveTimeZone(selectedTimeZone);
    }, [selectedTimeZone]);

    const setTimeZone =(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        const { selectedTimeZone } = event.target as typeof event.target & {
            selectedTimeZone : { value: string}
        } 

        // console.log(selectedTimeZone.value);

        setSelectedTimeZone(selectedTimeZone.value);
    }


    return (
        <div className="edit_timezone">
            Edit Desired Timezone here

  
            <form className="form_style" onSubmit={e => setTimeZone(e)}> 
                <fieldset className="input_style">
                    <select id="selectedTimeZone" className="reference_object_id"
                        defaultValue={"EST"}>
                        <option value={"EST"} key={"EST"} selected>{"EST"}</option>

                        { 
                            allTimeZones.map(timezone => 
                                <option key={timezone} value={timezone}> {timezone}</option>)
                        }
                    </select>
                </fieldset>

                <fieldset className="input_style">
                <button type="submit">Save</button>
                </fieldset>
            </form>
 

        </div>
    )
}
export default EditTimeZone;