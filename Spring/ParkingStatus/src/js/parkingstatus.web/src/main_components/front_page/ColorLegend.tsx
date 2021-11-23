import React, { useState, useEffect } from 'react'

type ColorAssign ={
    color_value : string, 
    status_value : string
}



const ColorLegend : React.FC<any> = (props) => {

    const [colorList, setColorList] = useState<ColorAssign []>([]);
    
    const [popupStatus, setPopupStatus] = useState<boolean>(false);

    useEffect(() => {

    }, []);

    const handleLegend = () =>{
        setPopupStatus(!popupStatus);
    }


    console.log(props.statuses);
    
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
           <button onClick={handleLegend}>X</button>
           <span>
               Color Legend:
           

            </span>
            
           </div>

            </> : null }
   
            
        </div>
    )
}
export default ColorLegend;
