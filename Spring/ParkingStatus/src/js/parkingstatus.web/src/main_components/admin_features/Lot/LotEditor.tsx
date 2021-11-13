import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';



const LotEditor: React.FC<any> =(props) => {
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div className="page"> 
                    <form className="form_style">

                        <fieldset className="input_style">
                        <label htmlFor="lotid">Id:</label>
                        <input id="lotid" type="number" min="0"
                        className="object_id">
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="lotname">Lot Name:</label>
                        <input id="lotname" type="text" className="object_name">
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description">
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Status Image:</label>
                        <input id="lotimage" type="file" className="object_image">
                        </input>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Lot Status Schedule ID: {"number"}</label>
 
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Lot Status Schedule Name: </label>
                        <input id="lotname" type="text" className="object_name">
                        </input>
 
                        </fieldset>
                        
                    </form>

                </div>
            }
        </div>
    )
}
export default LotEditor;
