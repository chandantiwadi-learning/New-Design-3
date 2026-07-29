const fs = require('fs');
const path = require('path');
const dir = 'd:/Clients/HEX INDIA/public_html/hexindiafasteners/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('-standards.html'));
let result = {};
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  let descriptions = [];
  const pRegex = /<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pRegex.exec(content)) !== null) {
    let text = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (text && !text.includes('Copyright') && !text.includes('All Rights Reserved') && text.length > 20) {
      descriptions.push(text);
    }
  }
  let standards = [];
  const spanRegex = /<span class="faq_title">([\s\S]*?)<\/span>/g;
  while ((match = spanRegex.exec(content)) !== null) {
    standards.push(match[1].trim());
  }
  
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
  const h1Match = h1Regex.exec(content);
  const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  result[file] = { title, descriptions: descriptions.slice(0, 3), standards };
}
fs.writeFileSync('d:/Clients/HEX INDIA/New Design-3/standards-data.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Extracted successfully');
