import axios from 'axios';
import cheerio from 'cheerio';

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

export async function getPriceValue() {
  const html = await getHTML('https://pcpartpicker.com/product/FQ648d/corsair-power-supply-cp9020101na');
  const price = await getPrice(html);
  return price;
}
