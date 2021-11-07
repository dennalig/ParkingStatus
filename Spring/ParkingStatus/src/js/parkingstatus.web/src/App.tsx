import React from 'react';

//style
import './App.css';

//general
import NavigationBar from './main_components/navigation_bar/NavigationBar';

//home page
import LotAccordion from './main_components/front_page/LotAccordion';

//other pages
import SignUp from './main_components/signup_page/SignUp';
import Login from './main_components/admin_login_page/Login';

//functional : routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://create-react-app.dev/docs/adding-typescript/


class App extends React.Component{

  login_value: boolean = false;
  
  render(){
    return (
      <>
      <Router>
        <NavigationBar logged_in= {this.login_value}/>
        <Switch>
          <Route path='/' exact component={LotAccordion}/>  
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin/login' component={Login}/>    
          
        </Switch>
      

        </Router>
        
        </>
    );
  }

}

export default App;
