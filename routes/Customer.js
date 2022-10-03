const express = require('express');
const router = express.Router();
const customerController = require('../controllers/Customer');
router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.notImplemented);
router
    .route('/:id')
    .get(customerController.getCustomerByID)
    .patch(customerController.notImplemented)
    .delete(customerController.notImplemented);
module.exports = router;