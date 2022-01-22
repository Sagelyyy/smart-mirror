import React from "react";


 
// console.log(`${y} ${M} ${d} ${h} ${s}`)

export default function Timer(){
    const firstDate = new Date('Jan 15, 2016')
    const today = new Date()

    const diff = today - firstDate

    console.log(firstDate)
    console.log(today)
    console.log(diff)


    const years  = Math.floor( diff / (1000*60*60*24*30*12) );
    const months = Math.floor( diff / (1000*60*60*24*30) );
    const days   = Math.floor( diff / (1000*60*60*24) );
    const hours  = Math.floor( diff / (1000*60*60) );
    const mins   = Math.floor( diff / (1000*60) );
    const secs   = Math.floor( diff / 1000 );

    const y = years;
    const M = months - years  * 12;
    const d = days   - months * 30;
    const h = hours  - days   * 24;
    const m = mins   - hours  * 60;
    const s = secs   - mins   * 60;
    return (
        <div>
            <p>{`${y} years ${M} months ${d} days ${h} hours ${s} seconds`}</p>
        </div>
    )
}

