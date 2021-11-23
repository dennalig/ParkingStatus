import React, { useState, useEffect } from 'react'
import './style/color_legend_style.css';

type ColorAssign ={
    color_value : string, 
    status_value : string
}

interface Props{
    statuses : Array<any>
}



const ColorLegend : React.FC<Props> = (props) => {


    
    const [popupStatus, setPopupStatus] = useState<boolean>(false);



    const handleLegend = () =>{
        setPopupStatus(!popupStatus);
    }



    // console.log(props.statuses);
    // props.statuses.map(status => console.log(status));
    
    return (
        <div>
            <div className="legend_popup">
                <button className= "legend_popup_button"
                        onClick={handleLegend}>
                    Color Legend
             
                </button>
            </div>


           {popupStatus ? 
           <>
             <button onClick={handleLegend} className="close_CL_Button">X</button>
           <div className="legend_popup_window">
         
           <span>
               Color Legend:
               <div > 
               {props.statuses.map(status => 
                    
                    <div key={status.statusId} className="item_style">
                        <div className="display_box" style={{ backgroundColor: status.color}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </div> 
                        {status.name} : {status.description ? status.description : ''}
                    </div>
                    )

               }

            </div>
           

            </span>
            
           </div>

            </> : null }
   
            
        </div>
    )
}
export default ColorLegend;
