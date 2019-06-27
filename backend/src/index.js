const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { getPriceValue } = require('./lib/scraper');


const auth = require('./routes/auth');
const parts = require('./routes/parts');
const users = require('./routes/users');

dotenv.config();

const port = process.env.PORT || 2093;

const app = express();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true , useCreateIndex: true });

app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/parts', parts);
app.use('/api/users', users);

app.get(`/scrape`, async (req, res, next) => {
  console.log(`Scraping!!`);
  const price = await getPriceValue()
  res.json({ price });
});


app.listen(port, () => {
  console.log(`Example App running on port http://localhost:2093`);
});