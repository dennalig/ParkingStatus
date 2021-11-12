import React from 'react'

interface Props {
     status_list: Status[],
}

interface Status {
    color_value :string,
    status_name : string
}

const ColorLegend : React.FC<Props> =(status_list) => {
    return (
        <div>
            ColorLegend
        </div>
    )
}
export default ColorLegend;
