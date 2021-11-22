import React from 'react'
import '../style/navigationbar.css'


import { Link } from 'react-router-dom';

export default function TimeZoneButton() {
    return (
        <div>
            <Link to='/admin/edittimezone'>
               <button 
                    className='timezone_button'>
                    Edit TimeZone
                </button>
            </Link>
        </div>
    )
}