import React from 'react'

import '../general_style/sign_up_login_style.css';

const SignUp: React.FC = () => {
    return (

        <div>
            <div className='title_style'>
                <h1> Sign Up </h1>
            </div>

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
            
        </div>
            );
   
}
export default SignUp;