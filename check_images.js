const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, 'client/src');
const publicImagesDir = path.join(__dirname, 'client/public/images');

const getAllFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
};

const checkImages = () => {
  const files = getAllFiles(clientDir);
  const brokenImages = [];
  const imageRegex = /src=["']\/images\/([^"']+)["']/g;
  const imageRegex2 = /src=\{["']\/images\/([^"']+)["']\}/g;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    const matches = [];
    while ((match = imageRegex.exec(content)) !== null) {
      matches.push(match[1]);
    }
    while ((match = imageRegex2.exec(content)) !== null) {
      matches.push(match[1]);
    }

    for (const imagePath of matches) {
      // Decode URI component in case of %20
      let decodedPath = decodeURIComponent(imagePath);
      const fullPath = path.join(publicImagesDir, decodedPath);
      if (!fs.existsSync(fullPath)) {
        brokenImages.push({ file: path.relative(clientDir, file), image: decodedPath });
      }
    }
  }

  console.log(JSON.stringify(brokenImages, null, 2));
};

checkImages();
