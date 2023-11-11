require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('connected to db'))
db.on('error',(error)=>console.log(error))

app.use(express.json());

const subscriberRouter = require('./routes/subscribers');
app.use('/subscribers',subscriberRouter);

app.listen(PORT, ()=>{
    console.log(`server started and running in port ${PORT}`);
})

