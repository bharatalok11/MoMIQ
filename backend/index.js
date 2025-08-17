require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const summaryRoutes = require('./routes/summaryRoutes');
const emailRoutes = require('./routes/emailRoutes');

const port = process.env.PORT || 5000;
const cors_origin = process.env.CORS_ORIGIN;

app.use(cors({
  origin: cors_origin,
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Routes
app.use('/generate-summary', summaryRoutes);
app.use('/share-summary', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});