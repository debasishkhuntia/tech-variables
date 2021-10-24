require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const doctors = require('./api_data');

// Moddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello from server');
});

// API Route
app.get('/api/doctors', (req, res) => {
  res.status(200).json({ doctors });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running at port: ${port}...`));
