import express from 'express';
import dotenv from 'dotenv';


import pharmaRouters from './routers/PharmaRouters';
import insRouters from './routers/Insrouters';

const app=express();


dotenv.config({path:'./config.env'});

app.use('/api/v1/pharmacies',pharmaRouters);
app.use('/api/v1/insurances',insRouters);

app.use('*',function(req,res){
    res.status(404).send('Page Not Found');
})


const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server listening to Port ${port}.`)
})