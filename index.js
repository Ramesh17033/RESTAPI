const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const scanningController = require('./controllers/scanningController');
const verificationController = require('./controllers/verificationController');
const CustomerCodeSearchController = require('./controllers/CustomerCodeSearchController');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', scanningController); // Assuming scanningController is mounted under /api
app.use('/api/verification', verificationController); // Mount verificationController under /api/verification
app.use('git init', CustomerCodeSearchController);
// Connect to MongoDB
const dbUri = 'mongodb://localhost:27017/Varthagam';  // Replace with your MongoDB URI
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
