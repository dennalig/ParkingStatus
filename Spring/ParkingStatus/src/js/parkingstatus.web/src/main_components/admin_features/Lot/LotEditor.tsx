import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';



const LotEditor: React.FC<any> =(props) => {

    const handleSubmit = () =>{
        console.log("lot submitted");
    }
    
    return (
        <div>
            
            {!props.logged_in &&
                <DefaultNoAccess/>
            }

            {props.logged_in && 
                <div className="page"> 
                    <form className="form_style"
                        onSubmit={handleSubmit}>

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
export default LotEditor;
