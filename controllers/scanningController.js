// controllers/scanningController.js
const express = require('express');
const router = express.Router();
const ScanService = require('../services/scanService');

const scanService = new ScanService();

router.get('/validateBatchQuantity', async (req, res) => {
  const { batchNo, qty } = req.query;

  // Check if batchNo has already been marked as completed
  const existingCompleted = await Product.findOne({batchNo: batchNo, verificationStatus: 'completed' });

  if (existingCompleted) {
    // Batch has already been scanned and marked as completed
    return res.status(200).send('Batch has already been scanned and marked as completed.');
  }

  // Validate batch number and quantity
  const isBatchValid = await scanService.isBatchQuantityValid(batchNo, qty);

  if (isBatchValid) {
    return res.status(200).send('Batch and quantity are valid. Verification status updated to completed.');
  } else {
    return res.status(200).send('Batch and quantity do not match');
  }
});


const Product = require('../models/Product'); // Import the Product model

// GET /api/products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.json(products); // Respond with JSON containing the products
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
