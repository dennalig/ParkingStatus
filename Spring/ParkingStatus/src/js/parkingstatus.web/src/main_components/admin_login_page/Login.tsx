import React, {useState, useEffect, FormEvent} from 'react'
import { Link } from 'react-router-dom';

import '../general_style/sign_up_login_style.css';

//services
import AdminUserService from '../../services/AdminUserService';

type AdminUser ={
    email: string| null,
    password: string |null
}

const SignIn: React.FC = () => {
    var emailMessage : string = ' does not exist within Parking Status.'; 
    var emptyEmailMessage : string = 'The email must not be empty.';
    var pwMessage : string = 'The password entered is incorrect.';

    const[user, setUser] = useState<AdminUser | null>(null);

    const[emptyEmailValue, setEmptyEmailValue] = useState<boolean>(false);
    const[validEmail, setValidEmail] = useState<boolean>(false);
    const[validPassword, setValidPassword] = useState<boolean>(false);


    const handleEmailNotNull = async (email : string) => {

        email = email.trim();
        // console.log(email);

        if(email !== ''){
            setEmptyEmailValue(false);
            return true;

        }
        else{
            setEmptyEmailValue(true);
            return false;
        }
    }

    const handleLoginAttempt = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = event.target as typeof event.target & {
            email : {value : string}
            password : {value : string}
        }

        if(await handleEmailNotNull(email.value)){
            // console.log('here');

            setUser({
                email : email.value,
                password : password.value
            });
        }

        // console.log(email.value);
        // console.log(password.value);



    }

    return (
        
        <div>
            <div className='title_style'>
                <h1> Admin Login </h1>
            </div>

            <form onSubmit={ event => {handleLoginAttempt(event)}}>

                    <fieldset className="input_style">

                    <label>Email:
                    <input id="email" type="email" 
                        placeholder="email">
                    </input>
                    </label>
                    </fieldset>

               
                <fieldset className="input_style">

                
                    <label>Password:
                        <input id="password" type="password" 
                            placeholder="password">
                        </input>
                    </label>
                
                    </fieldset>

                    <fieldset className="input_style">
                    <button 
                        type="submit">Login</button>
                    </fieldset>

            </form>
            
        </div>

    );
   
}
export default SignIn;