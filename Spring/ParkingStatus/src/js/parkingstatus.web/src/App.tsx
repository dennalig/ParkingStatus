import React, {useState, useEffect} from 'react';

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
//end routing purposes

//functional : routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://create-react-app.dev/docs/adding-typescript/

interface LoginProps {
        logged_in : boolean,
    }
    

function App (){

  const [login_value, setLoginValue] = useState(true);

//   useEffect(() => {
//           console.log(login_value);
//   }, [login_value]);

   const handleLogin = () => {

        setLoginValue(!login_value);
        // console.log(login_value);

    }

    return (
      <>
      <div >
      <Router>
              <NavigationBar loginState={login_value} 
                handleLogin={handleLogin} />


        
        <Switch>

          {/* General Routes */}
          <Route path='/' exact component={LotAccordion}/>  
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin/login' component={Login}/> 

          {/* Admin Routes */}
          {/* TODO: Pass the boolean value to these areas so that non admins cannot access */}
          {/* https://javascript.plainenglish.io/passing-props-to-components-inside-react-router-3d26165662b1 */}
          
          {/* Lot Routes */}
          <Route path='/admin/select/lot' 
                  render={() => <LotSelector logged_in={login_value}/>}/>
          
        <Route path='/admin/create/lot'
                  render={() => <LotCreator logged_in={login_value}/>}/>

        
        <Route path='/admin/edit/lot/:id' 
                component={LotEdit}/>

        {/* Status Routes */}
          <Route path='/admin/select/status' 
                  render={() => <StatusSelector logged_in={login_value}/>}/>

          <Route path='/admin/create/status'
                  render={() => <StatusCreator logged_in={login_value}/>}/>

          <Route path='/admin/edit/status/:id' 
                component={StatusEdit}/>

        {/* StatusEvent Routes */}
          <Route path='/admin/select/statusevent' 
                  render={() => <StatusEventSelector logged_in={login_value}/>}/>

          <Route path='/admin/create/statusevent'
                  render={() => <StatusEventCreator logged_in={login_value}/>}/> 

          <Route path='/admin/edit/statusevent/:id' 
                component={StatusEventEdit}/>


        </Switch>
        </Router>

        </div>
        
        </>
    );
  

}

export default App;
