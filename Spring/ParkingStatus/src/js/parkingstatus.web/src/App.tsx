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
import LotEditor from './main_components/admin_features/Lot/LotEditor';


import StatusSelector from './main_components/admin_features/Status/StatusSelector';
import StatusEditor from './main_components/admin_features/Status/StatusEditor';


import StatusEventSelector from './main_components/admin_features/StatusEvent/StatusEventSelector'
import StatusEventEditor from './main_components/admin_features/StatusEvent/StatusEventEditor';
//end routing purposes

//functional : routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//https://create-react-app.dev/docs/adding-typescript/

interface LoginProps {
        logged_in : boolean,
    }
    

function App (){

      

// constructor(props : object){
//         super(props);

//         this.state = {
//                 login_value: true,
//         };

//         this.setLogoutValue = this.setLogoutValue.bind(this);
        
// }

//    setLogoutValue = (isLoggedIn : any) => {
//         this.setState({login_value : isLoggedIn});

//    }
   

  const [login_value, setLoginValue] = useState(true);

//   useEffect(() => {
//           console.log(login_value);
//   }, [login_value]);

   const handleLogin = () => {
        // console.log(logged_in);
        // loginState.changeLoginStatus(logged_in);
        setLoginValue(!login_value);
        // console.log(login_value);

    }

    return (
      <>
      <Router>
        {/* <NavigationBar changeLoginStatus={(value: boolean)=> setLoginValue(!login_value)}
                loginState={login_value}/> */}
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
          
          <Route path='/admin/select/lot' 
                  render={() => <LotSelector loginState={login_value}/>}/>
          
        <Route path='/admin/create/lot'
                  render={() => <LotEditor logged_in={login_value}/>}/>



          <Route path='/admin/select/status' 
                  render={() => <StatusSelector logged_in={login_value}/>}/>

          <Route path='/admin/create/status'
                  render={() => <StatusEditor logged_in={login_value}/>}/>


          <Route path='/admin/select/statusevent' 
                  render={() => <StatusEventSelector logged_in={login_value}/>}/>

          <Route path='/admin/create/statusevent'
                  render={() => <StatusEventEditor logged_in={login_value}/>}/> 


          
        </Switch>
      

        </Router>
        
        </>
    );
  

}

export default App;
