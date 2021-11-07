import React from 'react';
import './style/navigationbar.css';
import Login from './Login';
import SignUpButton from './SignUpButton';
import Title from './Title';

interface Props {
    logged_in : boolean,
}

const NavigationBar : React.FC<Props> = ({logged_in}) => {
  
        return(
       
            <div className='navigationbar_main'>
               
                <SignUpButton />
                <Login logged_in={logged_in}/>
                <Title/>
            </div>
            );

}

export default NavigationBar;