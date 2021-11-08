import React, {useState} from 'react'

import '../general_style/sign_up_login_style.css';


type NewUser ={
    new_email: string,
    new_password: string
}

export const SignUp = () => {

    const[user, setUser] = useState<NewUser|null>(null);

    const handleEmailValidation = () => {
        setUser({
            new_email:'newemail@gmail.com',
            new_password:'pw'
        });
    }
    const handlePwValidation = () => {}

    const handleNewAdminUserSubmission = () => {
        console.log('here');
        handleEmailValidation();
    }

        return (

            <div>
                <div className='title_style'>
                    <h1> Sign Up </h1>
                </div>
    
                <form>
                <div className="input_style">
    
                    <label>Email:
                    <input id="newEmail" type="email"
                        placeholder="Enter an email here.">
                    </input>
                    </label>
    
                </div>
    
                <div className="input_style">
                <label>Password:
                <input id="newPassword" type="password" 
                        placeholder="Enter a password here.">
                    </input>
                </label>
                </div>
    
                <div className="button_style">
                    <button onClick={handleNewAdminUserSubmission}>Submit</button>
                </div>
    
    <div> {user?.new_email}</div>
                </form>
                
            </div>
                );
    
    
   
}
export default SignUp;