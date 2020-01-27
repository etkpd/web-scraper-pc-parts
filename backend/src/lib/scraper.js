import axios from 'axios';
import cheerio from 'cheerio';
import Part from '../models/Part';

export async function getHTML(url) {
  try{
    const { data: html } = await axios.get(url);
    return html
  } catch (error) {
    throw error
  }
}

export async function scrapInitialValues(webpage){
  try{
    const html = await getHTML(webpage);
    const initialValues = await getInitialValues(html);
    return initialValues;
  } catch (error) {
    throw error
  }
}

export async function getInitialValues(html) {
  // load up cheerio
  const prices = [];
  const $ = cheerio.load(html);

  $('td.td__finalPrice').each(function(i, element) {
    const $element = $(element);
    const price = $element.find('a').text();
    prices.push(price);
  });
  
  const partName = $('h1.pageTitle').text();

  const priceString = prices.reduce(function(prev,curr){return prev < curr ? prev : curr });
  const price = Number(priceString.replace(/[^0-9.-]+/g,""));

  const initialValues = { price, partName }

  return initialValues;
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
  let price

  if(priceByBrand.length>0){
    price = priceByBrand.reduce(function(prev,curr){return prev.price < curr.price ? prev : curr }).price;
  } else {
    price = null
  }
  return price;
}


export async function runCron(partID) {  
  const date = new Date;
  const part = await Part.findById(partID);

  const priceString = await getLowestPrice(part.webpage);
  if(priceString !== null){
    const price = Number(priceString.replace(/[^0-9.-]+/g,""));
    const newPriceLog = {date, price};
    await part.appendRecentPrice(newPriceLog);
    await part.save();
  }
  
  console.log('Done!');
}