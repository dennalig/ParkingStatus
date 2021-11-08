import React from 'react'
import { Link } from 'react-router-dom';

import '../general_style/sign_up_login_style.css';

const SignIn: React.FC = () => {
    return (
        
        <div>
            <div className='title_style'>
                <h1> Admin Login </h1>
            </div>

            <div className="input_style">

                <label>Email:
                <input id="email" type="email" 
                    placeholder="email">
                </input>
                </label>

            </div>

            <div className="input_style">
            <label>Password:
            <input id="Password" type="password" 
                    placeholder="password">
                </input>
            </label>
            </div>
            
        </div>

    );
   
}
export default SignIn;