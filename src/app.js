import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import pharmaRouters from './routers/PharmaRouters';
import insRouters from './routers/Insrouters';

const app=express();

app.use(morgan('dev'));
app.use(bodyParser.json());

dotenv.config({path:'./config.env'});

app.use('/api/v1/pharmacies',pharmaRouters);
app.use('/api/v1/insurances',insRouters);

app.use('*',function(req,res){
    res.status(404).send('Page Not Found');
});

const connectionString=process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD);

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Db connected Successfully')
})
.catch(err=>{
    console.log(`error connecting to Database${err}`)
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server listening to Port ${port}.`)
})