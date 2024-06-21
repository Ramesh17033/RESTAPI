const express = require('express');
const router = express.Router();
const CustomerCodeSearchService = require('../services/customerCodeSearchService');

const customerCodeSearchService = new CustomerCodeSearchService();

// GET /api/customerCodeSearch/:customerCode
router.get('/:customerCode', async (req, res) => {
  const { customerCode } = req.query;
  console.log(customerCode);
  try {
   
    const products = await customerCodeSearchService.getProductsByCustomerCode(customerCode.trim());

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'Products not found' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
