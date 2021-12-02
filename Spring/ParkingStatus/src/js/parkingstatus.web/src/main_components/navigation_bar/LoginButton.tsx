import React, {useState, useEffect} from 'react'
import './style/navigationbar.css'
import { Link } from 'react-router-dom';


const LoginButton : React.FC<any> = (props) => {

    // const[login_State, setLoginState] = useState(loginState);

    let login_status: string ='Admin Login';
    
    const checkLoggedIn = () =>{
        // console.log(props);
        // if(props.loginState){
        //     login_status = 'Admin Logout';
        // }
        // else{
        //     login_status = 'Admin Login';
        // }
    }

    const logout = () =>{

    
        // if(props.loginState){
        //     // console.log('logout');
        //     props.handleLogin();
            
        // }
        
        // console.log(props.loginState);

        // props.handleLogin()

    }

// console.log(props.loginState);
    // checkLoggedIn();


    return (
        <div>
            <Link to='/admin/login'>
                <button 
                    className='button'
                    onClick={logout}>
                    {login_status}
                </button>
            </Link>

         
            
        </div>
    );
    //TODO: figure out ts props
}

export default  LoginButton;
