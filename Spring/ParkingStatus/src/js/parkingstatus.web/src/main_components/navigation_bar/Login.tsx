import React from 'react'
import './style/navigationbar.css'

type LoginProps={
    login_status : string
};

export default function Login(props: LoginProps) {

    let login_value;

    if(props.login_status === ''){
        login_value = 'Login';
    }
    else{
        login_value = 'Logout';
    }

    return (
        <div>
            <button 
                className='button'>
                {login_value}
                </button>
            
        </div>
    );
    //TODO: figure out ts props
}
