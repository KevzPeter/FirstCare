import React from 'react'

export const Info=({hospname,addr,phno})=>{
    const call_phone="tel:"+{phno}
    return(
        <>
        <div className="hospname">
        <i class="fas fa-map-marker-alt"></i><h4>{hospname}</h4>
        </div>
        <div className="address">
        <i class="fas fa-map"></i> <h6>{addr}</h6>
        </div>
        <div className="phone">
        <i class="fas fa-phone-alt"></i> <h4><a href={call_phone}>{phno}</a></h4>
        </div>
        </>
    )
}