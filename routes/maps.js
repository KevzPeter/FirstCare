const express=require('express')
const router=express.Router()
const fetch = require('node-fetch');
const key=require('../data/api').key

router.post('/maps',async (req,res)=>{
    if(req.body.latitude&&req.body.longitude){
         var url =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.latitude},${req.body.longitude}&rankby=distance&opennow=true&type=hospital&key=${key}`
    fetch(url).then(response=>response.json())
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(e=>console.log(e))
    }
    else{
        res.status(404).send('Error Occurred')
    }
    
})

router.post('/directions',async (req,res)=>{
    if(req.body[0]&&req.body[1]){
    var url=`https://maps.googleapis.com/maps/api/directions/json?origin=${req.body[0].latitude},${req.body[0].longitude}&destination=${req.body[1].latitude},${req.body[1].longitude}&key=${key}`
    fetch(url).then(response=>response.json())
    .then(data=>{
    res.send(data)
    })
    .catch(e=>console.log(e))
    }
    else{
        res.status(404).send('Error Occurred')
    }
})

router.post('/phone',async (req,res)=>{
    console.log(req.body)
    if(req.body.place_id){
    var url=`https://maps.googleapis.com/maps/api/place/details/json?place_id=${req.body.place_id}&fields=formatted_phone_number&key=${key}`
    fetch(url).then(response=>response.json())
    .then(data=>{
    res.send(data)
    })
    .catch(e=>console.log(e))
    }
    else{
        res.status(404).send('Error Occurred')
    }
})


module.exports=router
