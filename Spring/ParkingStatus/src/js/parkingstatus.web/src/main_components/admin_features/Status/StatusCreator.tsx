import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";

import '../../general_style/input_style.css';


const StatusCreator: React.FC<any> =(props) => {

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
                        <input type="color" id="colorpicker" >
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

                        <fieldset className="input_style">
                            
                        <Link to="/admin/select/status">
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

export default StatusCreator;
