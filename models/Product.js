// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productCode: { type: String, },
  productName: { type: String,  },
  packing: { type: String, },
  batchNo: { type: String, },
  expiry: { type: String, },
  qty: { type: String, },
  free: { type: String, },
  salesRate: { type: String, },
  mrp: { type: String, },
  taxPerc: { type: String, },
  prodDisc: { type: String, },
  billNo: { type: String, },
  billDate: { type: String, },
  billAmount: { type: String, },
  cashDisc: { type: String, },
  hsnCode: { type: String, },
  schemeDisc: { type: String, },
  cgst: { type: String, },
  sgst: { type: String, },
  mfr: { type: String, },
  batchPacking: { type: String, },
  drugName: { type: String, },
  alternateCode: { type: String, },
  customerCode: { type: String, },
  verificationStatus: { type: String, },
}, {
  timestamps: true,
  collection: 'Products' // Specify the collection name explicitly
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
