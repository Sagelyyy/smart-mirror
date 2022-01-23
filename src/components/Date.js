import React from "react";
import moment from "moment";
moment().format();

 
function getDate(){
    const firstDate = '2016-01-15'
    const years = moment(firstDate).fromNow(true)
    const months = Math.floor(moment.duration(moment().diff(moment(firstDate))).as('month') % 12)

    switch(months){
        default:
            return <h1>{`Dating your babe-o for ${years}`}</h1>
        case 1:
            return <p>{`Dating your babe-o for ${years} and ${months} month`}</p>
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return <p>{`Dating your babe-o for ${years} and ${months} months`}</p>

    
    }
}

export default function Timer(){

    return (
        <div>
            {getDate()}
        </div>
    )
}

