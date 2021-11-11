import React from 'react';

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
import StatusSelector from './main_components/admin_features/Status/StatusSelector';
import StatusEventSelector from './main_components/admin_features/StatusEvent/StatusEventSelector'

//end routing purposes

//functional : routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://create-react-app.dev/docs/adding-typescript/


class App extends React.Component{

  login_value: boolean = true;
  
  render(){
    return (
      <>
      <Router>
        <NavigationBar logged_in= {this.login_value}/>
        
        <Switch>

          {/* General Routes */}
          <Route path='/' exact component={LotAccordion}/>  
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin/login' component={Login}/> 

          {/* Admin Routes */}
          {/* TODO: Pass the boolean value to these areas so that non admins cannot access */}
          {/* https://javascript.plainenglish.io/passing-props-to-components-inside-react-router-3d26165662b1 */}
          
          <Route path='/admin/select/lot' 
                  render={() => <LotSelector logged_in={this.login_value}/>}/>
          <Route path='/admin/select/status' 
                  render={() => <StatusSelector logged_in={this.login_value}/>}/>
          <Route path='/admin/select/statusevent' 
                  render={() => <StatusEventSelector logged_in={this.login_value}/>}/>


          
        </Switch>
      

        </Router>
        
        </>
    );
  }

}

export default App;
