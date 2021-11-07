import React from 'react'
import './style/navigationbar.css'

type LoginProps={
    logged_in: boolean
};

export default function Login(props: LoginProps) {

    let login_value;

    if(props.logged_in){
        login_value = 'Admin Logout';
    }
    else{
        login_value = 'Admin Login';
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
