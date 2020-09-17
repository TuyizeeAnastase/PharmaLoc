import express from  'express';
import pharmaController from '../controllers/insController'

const router=express.Router();

router
   .route('/')
   .get(pharmaController.getInsurances)

router
  .route('/add')
  .post(pharmaController.addInsurance)

router
  .route('/:id')
  .get(pharmaController.getInsurance)
  .patch(pharmaController.editInsurance)
  .delete(pharmaController.deleteInsurance)

module.exports=router;