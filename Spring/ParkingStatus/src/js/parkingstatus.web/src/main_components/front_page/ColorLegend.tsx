import React, { useState } from 'react'

type ColorAssign ={
    color_value : string, 
    status_value : string
}

const ColorLegend : React.FC<any> = () => {

    const [colorList, setColorList] = useState<ColorAssign []>([]);
    
    const [popupStatus, setPopupStatus] = useState<boolean>(false);

    const handleLegend = () =>{
        setPopupStatus(!popupStatus);
    }
    
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
           <div className="legend_popup_window">
           <span>
               Color Legend:
               <button onClick={handleLegend}>X</button>

            </span>
            
           </div>

            </> : null }
   
            
        </div>
    )
}
export default ColorLegend;
