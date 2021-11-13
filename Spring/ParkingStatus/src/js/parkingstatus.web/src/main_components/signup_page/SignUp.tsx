import React, {useState, useEffect} from 'react'
//types
import type {FormEvent} from 'react'
import '../general_style/sign_up_login_style.css';

//services
import AdminUserService from '../../services/AdminUserService';

//TODO: understand the useEffect counterpart to ComponentDidMount

type NewUser ={
    email: string| null,
    password: string |null
}

type InvalidCredentials = {
    invalid_email: boolean ,
    invalid_password: boolean
}


export const SignUp = () => {

    const[user, setUser] = useState< NewUser | null >(null);
    const[creds, setInvalidCreds] = useState< InvalidCredentials | null>(null);
    const[enteredCreds, setCredStatus] = useState<boolean>(false);

    const run= () => {
        console.log("ran");
    }

    //user useEffect hook
    useEffect(() => {

        if(enteredCreds){
            // console.log(user);
            AdminUserService.createAdminUser(user)
                .then((response) => {
                    console.log('response: ', response)
                    return response;     
            })
            .catch(error => {
                console.log('error: ', error.response)

                run();
                return error.response.status;
                
            });
        }   
    }, [user]); // whenever array changes,we rerun hook 
    // in this case "user" is changing when we call setUser
    //[] (empty) is onmount

    var invalidEmail : boolean = false;
    var invalidPw : boolean = false;
    


    //error messages
    var emailMessage : string = 'The entered email already exists within Parking Status.';
    var pwMessage : string = 'The password entered is invalid.';

    const handleEmailValidation = async (email: string) => {
        //check that email does not already exist

            invalidEmail = false;
    }

    const handlePwValidation =  async (password: string) => {
        // check that password != null
        // console.log(password === '')

        if(password !== ''){
            invalidPw = false;
            return true;
        }
        else{// null password
            invalidPw = true;
            
        }
    }


    const handleNewAdminUserSubmission = async (event : FormEvent<HTMLFormElement>) => {
        //https://www.youtube.com/watch?v=BYsQE3Nh9IE
        event.preventDefault();
        const {newemail, newpassword} = event.target as typeof event.target & {
            newemail: {value: string}
            newpassword: {value: string}
        } // values are stored here 

        handleEmailValidation(newemail.value);
        handlePwValidation(newpassword.value);

        setInvalidCreds({
            invalid_email: invalidEmail,
            invalid_password : invalidPw
        });

        if(!invalidEmail && !invalidPw){

            setUser({
                email: newemail.value,
                password: newpassword.value
            });

            setCredStatus((true));


            // AdminUserService.createAdminUser(user);
        }

    }
        return (

            <div>
                <div className='title_style'>
                    <h1> Sign Up </h1>
                </div>
    
                <form onSubmit = {event => {handleNewAdminUserSubmission(event)}}>

                    <fieldset className="input_style">
                        <label htmlFor="email">Email:</label>

                        <input id="newemail" type="email"
                        placeholder="Enter an email here.">
                         </input>
                    </fieldset>

                    {/* Conditional render for email */}
                    {creds?.invalid_email ? 
                        <div className="error_message_style">
                            {emailMessage}</div>: null}
                    
                    <fieldset className="input_style">
                        <label htmlFor="password">Password:</label>
                        
                        <input id="newpassword" type="password"
                        placeholder="Enter a Password here.">
                         </input>
                    </fieldset>

                    {/* Conditional render for pw */}
                    {creds?.invalid_password ? 
                        <div className="error_message_style">
                            {pwMessage}</div>: null}
          
                    <fieldset className="input_style">
                    <button 
                        type="submit">Submit</button>
                    </fieldset>
         
    
                </form>

            </div>
                );
     
}
export default SignUp;