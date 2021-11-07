import React from 'react'
import './style/navigationbar.css';
import { Link } from 'react-router-dom';

const SignUpButton: React.FC = () => {
    return (
        <div>
            <Link to='/signup'>
                <button className='button'> 
                    {'Sign Up'}
                </button>
            </Link>
        </div>
    );
    //TODO: figure out ts props
}
export default SignUpButton;