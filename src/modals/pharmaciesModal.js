import mongoose from 'mongoose';

const pharmaciesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'you must include name']
    },
    location:{
        type:String,
        required:[true,'must include location']
    },
    working_hours:{
        type:[{
            monday_thursday:String,
            friday:String,
            weekend:String
        }],
        required:[true,'must include working hours']
    },
    owner:{
        type:String,
        required:[true,'must include owner']
        },
    insurances:{
        type:Array,
        required:true,
    },
    link:String
});

const Pharmacies=mongoose.model('Pharmacies',pharmaciesSchema);

module.exports=Pharmacies;