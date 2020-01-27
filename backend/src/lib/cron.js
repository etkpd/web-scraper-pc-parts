import cron from 'node-cron';
const Part = require('../models/Part');
import { runCron } from './scraper';

cron.schedule(`7 18 * * 1-7`, () => {
  console.log(`⏲️ RUNNING THE CRON`);
  Part.find({}).then((parts)=>{
    parts.forEach((part)=>{
      runCron(part._id)
    })
  })
});