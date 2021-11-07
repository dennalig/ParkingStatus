import React from 'react'
import './style/navigationbar.css'
import { Link } from 'react-router-dom';

type LoginProps={
    logged_in: boolean
};

export default function LoginButton(props: LoginProps) {

    let login_value;

    if(props.logged_in){
        login_value = 'Admin Logout';
    }
    else{
        login_value = 'Admin Login';
    }

    return (
        <div>
            <Link to='/admin/login'>
                <button 
                    className='button'>
                    {login_value}
                </button>
            </Link>
            
        </div>
    );
    //TODO: figure out ts props
}
