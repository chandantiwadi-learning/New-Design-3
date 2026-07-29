const fs = require('fs');
const path = require('path');

const standardsDir = path.join(__dirname, 'client/src/pages/standards');
const files = fs.readdirSync(standardsDir).filter(f => f.endsWith('.jsx'));

const targetBlockStart = `<div className="flex flex-wrap justify-center`;
const targetBlockEnd = `</div>\n            ))}\n          </div>`;

const newBlock = `<StandardGrid standards={standards} />`;
const importStatement = `import StandardGrid from '../../components/StandardGrid';\n`;

for (const file of files) {
  const filePath = path.join(standardsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find start
  const startIndex = content.indexOf(targetBlockStart);
  if (startIndex === -1) {
    console.log(`Skipping ${file} - block not found`);
    continue;
  }
  
  // Find end
  const endIndex = content.indexOf(targetBlockEnd, startIndex);
  if (endIndex === -1) {
    console.log(`Skipping ${file} - end block not found`);
    continue;
  }

  // Replace block
  let newContent = content.substring(0, startIndex) + newBlock + content.substring(endIndex + targetBlockEnd.length);
  
  // Add import if missing
  if (!newContent.includes('StandardGrid')) {
     // this won't happen if we just replaced it, but checking for import statement
  }
  if (!newContent.includes(importStatement.trim())) {
    const lastImportIndex = newContent.lastIndexOf('import ');
    const endOfLastImport = newContent.indexOf('\n', lastImportIndex);
    newContent = newContent.substring(0, endOfLastImport + 1) + importStatement + newContent.substring(endOfLastImport + 1);
  }
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Updated ${file} with StandardGrid`);
}
