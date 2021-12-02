import React, {useState, useContext} from 'react';

import './style/navigationbar.css';

import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import Title from './Title';

import LotButton from './admin_buttons/LotButton';
import StatusButton from './admin_buttons/StatusButton';
import StatusEventButton from './admin_buttons/StatusEventButton';
import TimeZoneButton from './admin_buttons/TimeZoneButton';

import { Link } from 'react-router-dom';

//contexts
import { LoginEmailContext } from '../../main_components/loginContexts/LoginEmailContext';




const NavigationBar : React.FC<any> = (props) => {
  

    // const[loginStatus, setLoginStatus] = useState<any>(loginState);

    const handleLogout = () =>{
        props.handleLogout();
        
    }

    const retrieveTimeZone = (timezoneName: string) => {
        // console.log(timezoneName);
        props.retrieveTimeZone(timezoneName);
    }
    
    const currentAdminUser = useContext(LoginEmailContext);
    // console.log(currentAdminUser);

    // console.log(props.loginState);
        return(
       
            <div className='navigationbar_main'>
               {currentAdminUser}
                <SignUpButton />
                <LoginEmailContext.Provider value={currentAdminUser}>

                    <LoginButton handleLogout={handleLogout}/>

                </LoginEmailContext.Provider>
            
                <Title />

                
                {/* Conditional Rendering Components */}
                {/* https://reactjs.org/docs/conditional-rendering.html */}


   
                
                    <StatusEventButton />
                    <StatusButton />
                    <LotButton />

                    

                    <TimeZoneButton retrieveTimeZone={retrieveTimeZone}/>

                    
    
            </div>
            );

}

export default NavigationBar;