import React from 'react'
import '../style/navigationbar.css'

import { Link } from 'react-router-dom';

export default function StatusButton() {
    return (
        <div>
            <Link to='/admin/select/status'>
                <button 
                    className='button'>
                    Status
                </button>
            </Link>
        </div>
    )
}
