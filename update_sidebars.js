const fs = require('fs');
const path = require('path');

const materialsDir = path.join(__dirname, 'client/src/pages/materials');
const files = fs.readdirSync(materialsDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(materialsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace import ProductSidebar with SidebarNavigation
  content = content.replace(
    /import ProductSidebar from '\.\.\/\.\.\/components\/ProductSidebar';/g,
    "import SidebarNavigation from '../../components/SidebarNavigation';"
  );

  // Replace component usage
  content = content.replace(/<ProductSidebar \/>/g, '<SidebarNavigation type="materials" />');

  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log(`Updated ${files.length} material files.`);
