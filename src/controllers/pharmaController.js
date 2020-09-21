import Pharmacies from '../modals/pharmaciesModal';

exports.getPharmacies=(req,res)=>{
    res.send('get ALL')
}

exports.addPharmacy=async(req,res)=>{
    try{
        const newPharmacy=await Pharmacies.create(req.body);
        res.status(201).json({
            Pharmacy:{
                newPharmacy
            }
        })
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
  }

exports.getPharmacy=(req,res)=>{
    res.send('get one')
}

exports.editPharmacy=(req,res)=>{
    res.send('editing')
}

exports.deletePharamacy=(req,res)=>{
    res.send('deleting')
}