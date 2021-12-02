import React, {useState, useEffect, useContext} from 'react'
import type {FormEvent} from 'react'

import { Link } from 'react-router-dom';

import RandomDivValue from "../../inaccessible_features/RandomDivValue";
import StatusService from "../../../services/StatusService";

import '../../general_style/input_style.css';

//contexts
import { LoginEmailContext } from '../../loginContexts/LoginEmailContext';

const StatusCreator: React.FC<any> = (props) => {

    var nameMessage : string = 'The Status name must not be empty.';
    var idMessage : string = 'This Id is already assigned to a status.';

    const [createdStatus, setCreatedStatus] = useState<any>(null);// status state

    const [validName, setValidName] = useState<boolean>(true);
    const[validId, setValidId] = useState<boolean>(true);
    const [enteredValues, setValidValues] = useState<any>(false); // boolean to see if we entered our values

    //for subitting new status
    useEffect( ()=>{

        if(enteredValues){ // detects that submit has been clicked 
            // console.log(createdStatus);
            StatusService.createStatus(createdStatus)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error);
                    if(createdStatus.name === ''){
                        setValidName(false);
                        
                    }
                    else{
                        //check id if not createdStatus
                        setValidId(false);
                    }


                });
            
            setValidValues(false);
        }

    }, [createdStatus]);


    const handleStatusSubmission = async (event : FormEvent<HTMLFormElement>) =>{
        // console.log('submit');
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
        
        setCreatedStatus({
            name : Name.value,
            description : Description.value,
            color : Color.value,
            statusImage : StatusImage.value,
            statusImageName : null,
            statusId :  StatusId.value
        });

        setValidName(true);
        setValidId(true);

        setValidValues(true);

        // console.log(createdStatus);
    };

//json order
    // name, description, 
    //             color, statusimage, 
    //                 statusimagename, statusid


    const currentAdminUser = useContext(LoginEmailContext);

    return (
        <div>
            
            {/* {!props.logged_in &&
                <DefaultNoAccess/>
            } */}

   
            {currentAdminUser !== '' &&
                <>
                <div className="page"> 
                    <form className="form_style"
                        onSubmit ={event => {handleStatusSubmission(event)}}>

                        <fieldset className="input_style">
                        <label htmlFor="StatusId">Id:</label>
                        <input id="StatusId" type="number" min="1"
                        defaultValue="1"
                        className="object_id">
                        </input>
                        </fieldset>

                                                
                        {!validId && 
                        <div className="error_message_style">
                            {idMessage}</div>
                        }


                        <fieldset className="input_style">
                        <label htmlFor="Name">Status Name:</label>
                        <input id="Name" type="text" className="object_name">
                        </input>
                        </fieldset>

                        {!validName && <div className="error_message_style">{nameMessage}</div>}

                        
                        <fieldset className="input_style">
                        <label htmlFor="Color">Status Color:</label>
                        <input type="color" id="Color" >
                        </input>
                        </fieldset>

                        
                        <fieldset className="input_style">
                        <label >Description:</label>
                        <textarea className="object_description"
                            id="Description">
                        </textarea>
                        </fieldset>

                        <fieldset className="input_style">
                        <label >Status Image:</label>
                        <input id="StatusImage" type="file" 
                            className="object_image">
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
            
        </div>
    )
}

export default StatusCreator;
