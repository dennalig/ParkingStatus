import React, {useState} from 'react'
//types
import type {FormEvent} from 'react'
import '../general_style/sign_up_login_style.css';


type NewUser ={
    new_email: string|null,
    new_password: string |null
}

export const SignUp = () => {

    const[user, setUser] = useState< NewUser | null >(null);

    const handleEmailValidation = () => {
        setUser({
            new_email:null,
            new_password:null
        });
    }
    const handlePwValidation = () => {}

    const handleNewAdminUserSubmission = async (event : FormEvent<HTMLFormElement>) => {
        //https://www.youtube.com/watch?v=BYsQE3Nh9IE
        event.preventDefault();

        console.log(user?.new_email);

        const {newemail, newpassword} = event.target as typeof event.target & {
            newemail: {value: string}
            newpassword: {value: string}
        } // values are stored here 

        console.log(newemail.value); 
        console.log(newpassword.value);
        // handleEmailValidation();
    }

    // console.log(user?.new_email);

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

                    <fieldset className="input_style">
                        <label htmlFor="password">Password:</label>
                        
                        <input id="newpassword" type="password"
                        placeholder="Enter a Password here.">
                         </input>
                    </fieldset>
          
                    <fieldset className="input_style">
                    <button 
                        type="submit">Submit</button>
                    </fieldset>
         
    
                </form>
                
            </div>
                );
    
    
   
}
export default SignUp;