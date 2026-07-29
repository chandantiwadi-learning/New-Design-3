const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const dir = 'd:/Clients/HEX INDIA/public_html/hexindiafasteners/';
const files = [
  'asme-standards.html',
  'din-standards.html',
  'iso-standards.html',
  'astm-standards.html',
  'ansi-standards.html',
  'bs-standards.html',
  'jis-standards.html'
];

let result = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const $ = cheerio.load(content);
  
  let descriptions = [];
  $('.span9 > p').each((i, el) => {
    descriptions.push($(el).text().trim());
  });

  let standards = [];
  $('.faq_title').each((i, el) => {
    standards.push($(el).text().trim());
  });

  result[file] = { descriptions, standards };
}

fs.writeFileSync('d:/Clients/HEX INDIA/New Design-3/standards-data.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Data extracted to standards-data.json');
