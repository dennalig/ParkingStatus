import React, {useState} from 'react';

import './style/navigationbar.css';

import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import Title from './Title';

import LotButton from './admin_buttons/LotButton';
import StatusButton from './admin_buttons/StatusButton';
import StatusEventButton from './admin_buttons/StatusEventButton';

import { Link } from 'react-router-dom';


interface Props {
    logged_in : boolean,
}

const NavigationBar : React.FC<Props> = ({logged_in}) => {
  

        return(
       
            <div className='navigationbar_main'>
               
                <SignUpButton />
                <LoginButton logged_in={logged_in}/>
            
                <Title />

                {/* Conditional Rendering Components */}
                {/* https://reactjs.org/docs/conditional-rendering.html */}


                {logged_in && 
                    <>
                    <StatusEventButton />
                    <StatusButton />
                    <LotButton />
                    </> 
                }
    
            </div>
            );

}

export default NavigationBar;