import React from 'react';
import './style/navigationbar.css';
import { Link } from 'react-router-dom';

export default function Title() {
    return (
        <Link to='/' >
        
        <div className='title'>
            Parking Status
        </div>
        
        </Link>
    )
}
