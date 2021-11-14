import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { Link, RouteComponentProps } from 'react-router-dom';

import DefaultNoAccess from "../../inaccessible_features/DefaultNoAccess";
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}

const StatusEdit: React.FC<Props> =({match}) => {

    // https://www.youtube.com/watch?v=110dW3l5GQY --> RouteComponentProps

    // console.log(match.params.id);

    const [idValue, setIdValue]= useState<number>(parseInt(match.params.id));
    const[status, setStatus] = useState<any>(null);

    useEffect(() => {
        StatusService.getStatusById(idValue)
            .then(res => setStatus(res.data));

    }, []);

// console.log(status);
    return (
        <div>

            {status && 
                <>
                <div className="page"> 
                    <form className="form_style">

                        <fieldset className="input_style">
                        <label htmlFor="statusid">Id:</label>
                        <input id="statusid" type="number" min="0"
                        className="object_id"
                        defaultValue={status.statusId}>
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="statusname">Status Name:</label>
                        <input id="statusname" type="text" className="object_name"
                        defaultValue={status.name}>
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label htmlFor="statuscolor">Status Color:</label>
                        <input type="color" id="colorpicker" 
                        defaultValue={status.color}>
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                        defaultValue={status.description}>
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Status Image:</label>
                        <input id="statusimage" type="file" className="object_image"
                        defaultValue={status.statusImageName}>
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
                </>
            }

            TODO: Render a 'item does not exist component if there is not one of the given id'
                
        </div>
    )
}

export default StatusEdit;
