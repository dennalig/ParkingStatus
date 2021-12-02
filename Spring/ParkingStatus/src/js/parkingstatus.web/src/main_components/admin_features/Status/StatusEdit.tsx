import React, {useState, useEffect} from 'react'
import type {FormEvent} from 'react'

import { Link, RouteComponentProps } from 'react-router-dom';

import RandomDivValue from "../../inaccessible_features/RandomDivValue";
import StatusService from '../../../services/StatusService';

import '../../general_style/input_style.css';

interface Props extends RouteComponentProps<{id: string}>{}

const StatusEdit: React.FC<Props> =({match}) => {

    // https://www.youtube.com/watch?v=110dW3l5GQY --> RouteComponentProps

    // console.log(match.params.id);

    var nameMessage : string = 'The Status name must not be empty.';

    const [idValue, setIdValue]= useState<number>(parseInt(match.params.id));
    const[status, setStatus] = useState<any>(null);

    //updatedStatus
    const[updatedStatus, setUpdatedStatus] = useState<any>(null);

    //condiontal on valid updated input values
    const[validName, setValidName] = useState<boolean>(true);
    const[enteredUpdateValues, setUpdateEnteredValues] = useState<boolean>(false);

    useEffect(() => {
        //gets the status that we selected
        StatusService.getStatusById(idValue)
            .then(res => setStatus(res.data));


    }, []);

    //useEffect for the updatedStatus
    useEffect(()=> {

        if(enteredUpdateValues){
            // perform updated query
            // console.log('update ready');
            StatusService.updateStatus(status.statusId, updatedStatus)
                .then(res => console.log(res.data))
                .catch(error => console.log(error));
        }

    }, [updatedStatus]);


    const handleUpdateSubmission = async (event : FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const {Name, Description, 
            Color, StatusImage, 
                StatusId} = event.target as typeof event.target &{
                    Name : {value : string}
                    Description : {value : string}
                    Color : {value: string}
                    StatusImage : {value : null}
                    // statusimagename : {value : null}
                    StatusId : {value : number}
                }
                // console.log(Name);
                if(Name.value){
                    setUpdatedStatus({
                        name : Name.value,
                        description : Description.value,
                        color : Color.value,
                        statusImage : StatusImage.value,
                        statusImageName : null,
                        statusId :  StatusId.value
                    });
                    setValidName(true);
                    setUpdateEnteredValues(true);
                }
                else{ // null name
                    // console.log('name is null');
                    setValidName(false);
                }

    };

// console.log(status);
    return (
        <div>

            {status && 
                <>
                <div className="page"> 
                    <form className="form_style"
                        onSubmit={event =>{handleUpdateSubmission(event)}}>

                        <fieldset className="input_style">
                        <label htmlFor="StatusId">Id:</label>
                        <input id="StatusId" type="number" min="0"
                            className="object_id"
                            value={status.statusId}>
                        </input>
                        </fieldset>


                        <fieldset className="input_style">
                        <label htmlFor="Name">Status Name:</label>
                        <input id="Name" type="text" className="object_name"
                            defaultValue={status.name}>
                        </input>
                        </fieldset>
                        {!validName && <div className="error_message_style">{nameMessage}</div>}

                        
                        <fieldset className="input_style">
                        <label htmlFor="Color">Status Color:</label>
                        <input type="color" id="Color" 
                            defaultValue={status.color}>
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                            id="Description"
                            defaultValue={status.description}>
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Status Image:</label>
                        <input id="StatusImage" type="file" className="object_image"
                        defaultValue={status.statusImageName}>
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
                </>
            }

            {/* TODO: Render a 'item does not exist component if there is not one of the given id' */}
                
        </div>
    )
}

export default StatusEdit;
