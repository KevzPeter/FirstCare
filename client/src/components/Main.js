import React, { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { Header } from './Header'
import { MapTest } from './MapTest'
import { DirectionBox } from './DirectionBox'
import { Info } from './Info'
import { FirstAid } from './FirstAid'
import { Footer } from './Footer'
import axios from 'axios'

const places = [] //array for storing current location and destination point
const directions = []
export const Main = () => {

    const [loaded, Setloaded] = useState(false)
    const [name, Setname] = useState('Loading')
    const [addr, Setaddr] = useState('Loading')
    const [dirs, Setdirs] = useState([])
    const [ph, Setph] = useState('Loading')

     useEffect(()=>{
          function getLocation(){ //getting location,phone number, directions of nearest hospital 
            navigator.geolocation.getCurrentPosition( function(position) {
            places[0]={latitude:position.coords.latitude,longitude:position.coords.longitude}

               axios.post('/maps',places[0])
               .then(res=>{
                    places[1]={latitude:res.data.candidates[0].geometry.location.lat,longitude:res.data.candidates[0].geometry.location.lng}
                    Setname(res.data.candidates[0].name)
                    Setaddr(res.data.candidates[0].formatted_address)
                    const route=[places[0],places[1]]
                    const place_id={"place_id":res.data.candidates[0].place_id}
                    axios.post('/phone',place_id).then(res=>{
                        Setph(res.data.result.formatted_phone_number)
                    }).catch(e=>console.log(e))
                    axios.post('/directions',route)
                    .then(res=>{
                        res.data.routes[0].legs[0].steps.forEach(el=>directions.push(el.html_instructions))
                        Setdirs(directions)
                        
                    })
                    .catch(e=>console.log(e))
                    Setloaded(true)
               })
               .catch(e=>console.log(e))
              });
         }
          getLocation()
         
    },[])
    function ShowDirections(){
        if(dirs.length>0)
        return(
            dirs.map(i=><DirectionBox key={i} directions={i} />)
        )
        else return <h1>Loading...</h1>
    } 
    return (
        loaded?<>
        <Header />
        <div className="main-container">
            <div className="info-container"><Info hospname={name} addr={addr} phno={ph}/></div>
            <div className="map-container"> <MapTest defaultZoom={7} places={places} /></div>
            <div className="directions-container"> <ShowDirections /></div>
        </div>
        <div className="help-container">
        <FirstAid />
        </div>
        <Footer />
        </>:<Loading />
    );
}