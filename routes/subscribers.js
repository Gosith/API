const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/', async (req, res) => {
    try {
        const subs = await Subscriber.find()
        res.send(subs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    //create a js object to store the parameters of the 
    const subsc = new Subscriber({
        name: req.body.name,
        subscribedtochannel: req.body.subscribedtochannel
    })
    try {
        const newsubs = await subsc.save()
        res.status(201).json(newsubs)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

router.delete('/:id',getsubscriber, async(req,res)=>{
    try {
        const sub = await Subscriber.deleteOne();
        res.json({message:'deleted user with id '+req.params.id})
    } catch (error) {
        res.status(500).json({message:error.message+'asd'})
    }
})


router.get('/:id', getsubscriber,   (req, res)=>{
    res.json(res.subscriber);
})

async function getsubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber==null){
           return res.status(404).json({message:'cannot find subscriber'})
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    res.subscriber  = subscriber
    next()
}
module.exports = router;