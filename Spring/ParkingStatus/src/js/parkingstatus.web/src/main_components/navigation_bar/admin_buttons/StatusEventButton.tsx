import React from 'react'
import '../style/navigationbar.css'

import { Link } from 'react-router-dom';

export default function StatusEventButton() {
    return (
        <div>
            <Link to='/admin/select/statusevent'>
                <button 
                    className='button'>
                    Status Event
                </button>
            </Link>
        </div>
    )
}
