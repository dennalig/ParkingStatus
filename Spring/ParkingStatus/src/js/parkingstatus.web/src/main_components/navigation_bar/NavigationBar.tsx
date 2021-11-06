import React from 'react';
import './style/navigationbar.css';
import Login from './Login';
import SignUpButton from './SignUpButton';
import Title from './Title';

function NavigationBar(){
    return(
        
    <div className='navigationbar_main'>
       
        <SignUpButton />
        <Login login_status=''/>
        <Title/>
    </div>
    );
}

export default NavigationBar;