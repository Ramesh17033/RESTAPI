const express = require('express');
const router = express.Router();
const verificationService = require('../services/verificationService');

router.get('/completed', async (req, res) => {
  try {
    const products = await verificationService.getProductsByVerificationStatus('completed');
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/pending', async (req, res) => {
  try {
    const products = await verificationService.getProductsByVerificationStatus("");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/completed/count', async (req, res) => {
  try {
    const { customerCode } = req.query;
    const count = await verificationService.getCompletedProductsCount(customerCode);
    res.json(count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/pending/count', async (req, res) => {
  try {
    const { customerCode } = req.query;
    const count = await verificationService.getPendingProductsCount(customerCode);
    res.json(count);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
