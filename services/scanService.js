// services/scanService.js
const Product = require('../models/Product');

class ScanService {
  async isBatchQuantityValid(batchNo, qty) {
    try {
      console.log(`Batch No: ${batchNo}, Quantity: ${qty}`);
      
      // Check if batchNo has already been marked as completed
      const existingCompleted = await Product.findOne({ batchNo: batchNo, verificationStatus: "completed" });
      console.log('Existing Completed:', existingCompleted);
      
      if (existingCompleted) {
        // Batch has already been scanned and marked as completed
        console.log('Batch already completed:', batchNo);
        return false;
      }
      
      // Update the document to mark it as completed
      const result = await Product.updateOne(
        { batchNo: batchNo, qty: qty },
        { $set: { 
            verificationStatus: "completed" } }
      );

      console.log('Update result:', result);
      
      return result.modifiedCount > 0; // Returns true if at least one document was modified
    } catch (error) {
      console.error('Error in isBatchQuantityValid:', error);
      throw error; // Re-throw the error to handle it in the caller function or middleware
    }
  }
}

module.exports = ScanService;
