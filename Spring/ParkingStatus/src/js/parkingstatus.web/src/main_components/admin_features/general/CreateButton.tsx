import React from 'react'

import { Link } from 'react-router-dom';
interface Props {
    create_type : string,
}
const CreateButton : React.FC<Props> = ({create_type}) => {


    return (
        <div>
            {/* link varies based on the prop passed in */}
            <Link to={'/admin/create/'+ create_type}>
            <button 
            
                    className='create_button'>
                    Create {create_type}
                </button>
            </Link>
        </div>
    )
}

export default CreateButton;
