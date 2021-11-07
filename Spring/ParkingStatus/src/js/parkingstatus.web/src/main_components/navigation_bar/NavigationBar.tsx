import React, {useState} from 'react';
import './style/navigationbar.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import Title from './Title';

import { Link } from 'react-router-dom';

interface Props {
    logged_in : boolean,
}

const NavigationBar : React.FC<Props> = ({logged_in}) => {
  

        return(
       
            <div className='navigationbar_main'>
               
                <SignUpButton />
                <LoginButton logged_in={logged_in}/>
                <Title/>
            </div>
            );

}

export default NavigationBar;