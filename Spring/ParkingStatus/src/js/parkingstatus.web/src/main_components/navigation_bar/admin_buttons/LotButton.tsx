import React from 'react'
import '../style/navigationbar.css'


import { Link } from 'react-router-dom';

export default function LotButton() {
    return (
        <div>
            <Link to='/admin/select/lot'>
               <button 
                    className='button'>
                    Lots
                </button>
            </Link>
        </div>
    )
}
