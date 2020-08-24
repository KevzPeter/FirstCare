import React from 'react'
import Parser from 'html-react-parser'
export const DirectionBox = ({ directions }) => {
    return(
        directions?<>
    <p className="direction">{Parser(directions)}</p>
    
    </>
    :<div><h6>Loading...</h6></div>
    )
}