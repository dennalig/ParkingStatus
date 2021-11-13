import React from 'react'

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';


const StatusEditor: React.FC<any> =(props) => {
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
            
                <div className="page"> 
                    <form className="form_style">

                        <fieldset className="input_style">
                        <label htmlFor="statusid">Id:</label>
                        <input id="statusid" type="number" min="0"
                        className="object_id">
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="statusname">Status Name:</label>
                        <input id="statusname" type="text" className="object_name">
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label htmlFor="statuscolor">Status Color:</label>
                        <input type="color" id="colorpicker" value="#0000ff">
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description">
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Status Image:</label>
                        <input id="statusimage" type="file" className="object_image">
                        </input>
                        </fieldset>
                        
                    </form>

                </div>
            }
        </div>
    )
}

export default StatusEditor;
