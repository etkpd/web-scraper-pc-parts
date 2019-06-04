import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getPriceValue } from './lib/scraper';

import users from './routes/users';
import parts from './routes/parts';

dotenv.config();

const port = process.env.PORT || 2093;

const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/parts', parts);

app.get(`/scrape`, async (req, res, next) => {
  console.log(`Scraping!!`);
  const price = await getPriceValue()
  res.json({ price });
});


app.listen(port, () => {
  console.log(`Example App running on port http://localhost:2093`);
});