import express from  'express';
import pharmaController from '../controllers/pharmaController'

const router=express.Router();

router
   .route('/')
   .get(pharmaController.getPharmacies)

router
  .route('/add')
  .post(pharmaController.addPharmacy)

router
  .route('/:id')
  .get(pharmaController.getPharmacy)
  .patch(pharmaController.editPharmacy)
  .delete(pharmaController.deletePharamacy)

module.exports=router;