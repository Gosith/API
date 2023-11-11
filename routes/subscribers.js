const express = require('express')
const router = express.Router()

router.get('/',function(req,res){
    res.send('hello');
})

router.get('/getall',function(req,res){
    res.send('palaanda');
})
router.get('/get',function(req,res){
    
})
module.exports = router;