import React, {useState, useEffect, createContext, useContext} from 'react';

//style
import './App.css';

//general
import NavigationBar from './main_components/navigation_bar/NavigationBar';

//home page
import LotAccordion from './main_components/front_page/LotAccordion';

//routing purposes
//other pages
import SignUp from './main_components/signup_page/SignUp';
import Login from './main_components/admin_login_page/Login';

//admin other pages
import LotSelector from './main_components/admin_features/Lot/LotSelector'
import LotCreator from './main_components/admin_features/Lot/LotCreator';
import LotEdit from './main_components/admin_features/Lot/LotEdit';

import StatusSelector from './main_components/admin_features/Status/StatusSelector';
import StatusCreator from './main_components/admin_features/Status/StatusCreator';
import StatusEdit from './main_components/admin_features/Status/StatusEdit';


import StatusEventSelector from './main_components/admin_features/StatusEvent/StatusEventSelector'
import StatusEventCreator from './main_components/admin_features/StatusEvent/StatusEventCreator';
import StatusEventEdit from './main_components/admin_features/StatusEvent/StatusEventEdit';

import EditTimeZone from './main_components/admin_features/general/TimeZone/EditTimeZone';
//end routing purposes

//contexts
import { TimeZoneContext } from './main_components/admin_features/general/TimeZone/TimeZoneContext';

import { LoginEmailContext } from './main_components/loginContexts/LoginEmailContext';

//functional : routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://create-react-app.dev/docs/adding-typescript/

interface LoginProps {
        logged_in : boolean,
    }
    

function App (){

  const [login_value, setLoginValue] = useState<boolean>(false);

  const[timeZoneValue, setTimeZoneValue] = useState<string>('EST');

  const[loggedInEmailValue, setLoggedInEmailValue] = useState<string>('');

  

//   useEffect(() => {
//           console.log(login_value);
//   }, [login_value]);

   const handleLogin = (email : string) => {

        // setLoginValue(!login_value);
        // console.log(login_value);
        // console.log(email);

        setLoginValue(true);
        setLoggedInEmailValue(email);

    }

    const retrieveTimeZone = (timezoneName: string) => {
        // console.log(timezoneName);
        setTimeZoneValue(timezoneName);
    }


//     const currentAdminUser = useContext(LoginEmailContext);

    return (
      <>
      <div >
      <Router>
              <NavigationBar 
                handleLogin={handleLogin} 
                retrieveTimeZone={retrieveTimeZone}/>


        
        <Switch>

          {/* General Routes */}
          {/* <Route path='/' exact component={LotAccordion}/>   */}
          <Route path='/' exact component={() => (
                <TimeZoneContext.Provider value={timeZoneValue}>
                        <LotAccordion/>
                </TimeZoneContext.Provider>
          )}/>  
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin/login' component={() =>(
                <LoginEmailContext.Provider value={loggedInEmailValue}>
                        <Login handleLogin={handleLogin}/>
                </LoginEmailContext.Provider>
                )}/> 

          {/* Admin Routes */}
          {/* TODO: Pass the boolean value to these areas so that non admins cannot access */}
          {/* https://javascript.plainenglish.io/passing-props-to-components-inside-react-router-3d26165662b1 */}
          
          {/* Lot Routes */}
          <Route path='/admin/select/lot' 
                  render={() => <LotSelector />}/>
          
        <Route path='/admin/create/lot'
                  render={() => <LotCreator />}/>

        
        <Route path='/admin/edit/lot/:id' 
                component={LotEdit}/>

        {/* Status Routes */}
          <Route path='/admin/select/status' 
                  render={() => <StatusSelector />}/>

          <Route path='/admin/create/status'
                  render={() => <StatusCreator />}/>

          <Route path='/admin/edit/status/:id' 
                component={StatusEdit}/>

        {/* StatusEvent Routes */}
          <Route path='/admin/select/statusevent' 
                  render={() => <StatusEventSelector />}/>

          <Route path='/admin/create/statusevent'
                  render={() => <StatusEventCreator />}/> 

          <Route path='/admin/edit/statusevent/:id' 
                component={StatusEventEdit}/>

        {/* Timezone Edit */}


        </Switch>
        </Router>

        </div>
        
        </>
    );
  

}

export default App;
