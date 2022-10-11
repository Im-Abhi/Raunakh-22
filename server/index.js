const express = require('express');
const cors = require('cors');
const mongoConnect = require('./db');

const razorpay = require('./routes/razorpay');

const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.status(200).send('Raunak Server is Running'));

// application routes-------->
app.use('/razorpay', razorpay);

app.listen(port, async () => {
    console.log(`express App listening on port ${port}`);
    await mongoConnect()
});
