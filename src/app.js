import express from 'express';
import dotenv from 'dotenv';

const app=express();


dotenv.config({path:'./config.env'});

app.get('/',(req,res)=>{
    res.send('hello?')
});

const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server listening to Port ${port}.`)
})