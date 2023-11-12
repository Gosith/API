const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscriber')

router.get('/',async(req,res)=>{
   try{
    const subs = await subscriber.find()
    res.send(subs);
   }catch(error){
    res.status(500).json({message:error.message});
   }
})

router.post('/',async(req,res)=>{
    //create a js object to store the parameters of the 
    const subsc = new subscriber({
        name:req.body.name,
        subscribedtochannel:req.body.subscribedtochannel
    })
    try{
        const newsubs = await subsc.save()
        res.status(201).json(newsubs)
    }catch(error){
        res.status(400).json({message:error.message});
    }
     
})
router.get('/get',function(req,res){
    
})
module.exports = router;