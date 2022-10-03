const express = require('express');
const router = express.Router();
const productsController = require('../controllers/Product');
router
    .route('/')
    .get(productsController.getAllProducts)
    .post(productsController.notImplemented);
router
    .route('/:id')
    .get(productsController.getProductById)
    .patch(productsController.notImplemented)
    .delete(productsController.notImplemented);
module.exports = router;