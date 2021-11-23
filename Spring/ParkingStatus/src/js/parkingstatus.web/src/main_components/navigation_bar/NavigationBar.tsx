import React, {useState} from 'react';

import './style/navigationbar.css';

import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import Title from './Title';

import LotButton from './admin_buttons/LotButton';
import StatusButton from './admin_buttons/StatusButton';
import StatusEventButton from './admin_buttons/StatusEventButton';
import TimeZoneButton from './admin_buttons/TimeZoneButton';

import { Link } from 'react-router-dom';




const NavigationBar : React.FC<any> = (props) => {
  

    // const[loginStatus, setLoginStatus] = useState<any>(loginState);

    const retrieveTimeZone = (timezoneName: string) => {
        // console.log(timezoneName);
        props.retrieveTimeZone(timezoneName);
    }
    

    // console.log(props.loginState);
        return(
       
            <div className='navigationbar_main'>
               
                <SignUpButton />
                
                <LoginButton loginState={props.loginState}
                    handleLogin={props.handleLogin}/>
            
                <Title />

                {/* Conditional Rendering Components */}
                {/* https://reactjs.org/docs/conditional-rendering.html */}


                {props.loginState && 
                    <>
                    <StatusEventButton />
                    <StatusButton />
                    <LotButton />

                    </> 
                }
                    <TimeZoneButton retrieveTimeZone={retrieveTimeZone}/>
    
            </div>
            );

}

export default NavigationBar;