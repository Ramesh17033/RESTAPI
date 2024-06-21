const Product = require('../models/Product'); // Assuming Product is your Mongoose model for products

const VerificationService = {
    async getProductsByVerificationStatus(verificationStatus) {
        try {
          const products = await Product.find({ verificationStatus:verificationStatus }).exec();
          return products;
        } catch (err) {
          console.error('Error fetching completed products:', err);
          throw err;
        }
      },


      
  async getCompletedProductsCount(customerCode) {
    try {
      const count = await Product.countDocuments({ verificationStatus: 'completed',customerCode: customerCode });
      return count;
    } catch (err) {
      console.error('Error counting completed products:', err);
      throw err;
    }
  },

  async getPendingProductsCount(customerCode) {
    try {
      const count = await Product.countDocuments({ verificationStatus: "", customerCode:customerCode });
      return count;
    } catch (err) {
      console.error('Error counting pending products:', err);
      throw err;
    }
  }
};

module.exports = VerificationService;
