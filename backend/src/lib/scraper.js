import axios from 'axios';
import cheerio from 'cheerio';
import Part from '../models/Part';

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getPrice(html) {
  // load up cheerio
  
  const prices = [];
  const $ = cheerio.load(html);

  $('td.td__finalPrice').each(function(i, element) {
    const $element = $(element);
    const $price = $element.find('a');
    const brand = $element.find('a').attr('href').match(/(\w[a-z]+)(\w[a-z]+)/g)[0];

    const price = {
      brand,  
      price: $price.text()
    };

    prices.push(price);
  });

  return prices;
}

export async function getPriceValues(webpage) {
  const html = await getHTML(webpage);
  const prices = await getPrice(html);
  return prices;
}

export async function getLowestPrice(webpage){
  const priceByBrand = await getPriceValues(webpage);
  const price = priceByBrand.reduce(function(prev,curr){return prev.price < curr.price ? prev : curr }).price;
  return price;
}


export async function runCron(partID) {  
  const date = new Date;
  const part = await Part.findById(partID);

  const priceString = await getLowestPrice(part.webpage);
  const price = Number(priceString.replace(/[^0-9.-]+/g,""));

  const newPriceLog = {date, price};

  await part.appendRecentPrice(newPriceLog);
  await part.save();

  console.log('Done!');
}