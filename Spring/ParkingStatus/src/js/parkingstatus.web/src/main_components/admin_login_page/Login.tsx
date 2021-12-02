import React, {useState, useEffect, FormEvent, useContext} from 'react'
import { Link } from 'react-router-dom';

import { LoginEmailContext } from '../../main_components/loginContexts/LoginEmailContext';
//contexts
import '../general_style/sign_up_login_style.css';

//services
import AdminUserService from '../../services/AdminUserService';

type AdminUser ={
    email: string,
    password: string
}

const SignIn: React.FC<any> = (props) => {
    var emailMessage : string = ' does not exist within Parking Status.'; 
    var emptyEmailMessage : string = 'The email must not be empty.';
    var pwMessage : string = 'The password entered is incorrect.';

    const[user, setUser] = useState<AdminUser>({email : '', password : ''});

    const[enteredCreds, setEnteredCreds] = useState<boolean>(false);

    const[emptyEmailValue, setEmptyEmailValue] = useState<boolean>(false);
    const[validEmail, setValidEmail] = useState<boolean>(false);
    const[validPassword, setValidPassword] = useState<boolean>(false);

    const[loginAttemptValue, setLoginAttemptValue] = useState<number>(0);

    useEffect(()=>{

        if(enteredCreds){
            // console.log('login Attempt');
            // console.log(user);
            AdminUserService.validateLoginAttempt(user?.email, user?.password)
                .then(res => setLoginAttemptValue(res));
        }

        setEnteredCreds(false);


    }, [user]);

    useEffect(() => {

        if(loginAttemptValue === 1){
            props.handleLogin(user.email);
        }

    }, [loginAttemptValue])


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

            setEnteredCreds(true);

            setUser({
                email : email.value,
                password : password.value
            });
        }

        // console.log(email.value);
        // console.log(password.value);



    }

    const currentAdminUser = useContext(LoginEmailContext);
    console.log(currentAdminUser);
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