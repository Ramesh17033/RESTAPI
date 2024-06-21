const mongoose = require('mongoose');
const Product = require('../models/Product');

class CustomerCodeSearchService {
  constructor() {
    this.Product = Product;
  }

  async getProductsByCustomerCode(customerCode) {
    try {
      const products = await this.Product.find({ customerCode: customerCode });
      return products;
    } catch (error) {
      console.error('Error fetching products by customer code:', error);
      throw error;
    }
  }
}

module.exports = CustomerCodeSearchService;
