const fs = require('fs');
const path = require('path');

let p = path.join(process.cwd(), 'client/src/pages/Material.jsx');
let content = fs.readFileSync(p, 'utf8');

const materialsArrayStr = `
  const materialsList = [
    { name: 'Carbon Steel', path: '/carbon-steel', img: '/images/homePage/our products/new/materials.png' },
    { name: 'Stainless Steel', path: '/stainless-steel', img: '/images/homePage/our products/new/materials.png' },
    { name: 'Alloy Steel', path: '/alloy-steel', img: '/images/homePage/our products/new/materials.png' },
    { name: 'Duplex & Super Duplex', path: '/duplex-steel', img: '/images/homePage/our products/new/materials.png' },
    { name: 'Inconel & Monel', path: '/inconel', img: '/images/homePage/our products/new/materials.png' },
    { name: 'Hastelloy & Titanium', path: '/hastelloy', img: '/images/homePage/our products/new/materials.png' }
  ];
`;

content = content.replace('const Material = () => {', 'const Material = () => {\n' + materialsArrayStr);

const matGridHTML = `            {/* 6-Card Materials Grid */}
            <motion.div variants={fadeUp} className="mt-12 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {materialsList.map((prod, idx) => (
                  <Link
                    to={prod.path}
                    key={idx}
                    className="group aspect-[4/3] relative rounded-lg overflow-hidden shadow-md border border-gray-100 hover:border-[#0D8BC5] hover:shadow-[0_8px_24px_rgba(13,139,197,0.25)] transition-all duration-300 block"
                  >
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform transform-gpu z-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[#0D8BC5]/28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 z-30">
                      <div className="hexagon-tag bg-[#0D8BC5] text-white font-bold text-[10px] uppercase px-7 py-2 transition-colors duration-300 shadow-md">
                        {prod.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
`;

const quoteRegex = /\{\/\* Premium Testimonial Quote \*\/\}[\s\S]*?(?=\{\/\* Featured Alloys Section \*\/)/g;
content = content.replace(quoteRegex, '');

const featuredMatRegex = /\{\/\* Featured Alloys Section \*\/\}[\s\S]*?(?=\{\/\* Material yards info \*\/)/g;
const customMatRegex = /\{\/\* Material yards info \*\/\}[\s\S]*?(?=<\/main>)/g;

let featuredMatMatch = content.match(featuredMatRegex)[0];
let customMatMatch = content.match(customMatRegex)[0];

content = content.replace(featuredMatRegex, '');
content = content.replace(customMatRegex, '');

const matReplacement = matGridHTML + '\n\n' + customMatMatch + '\n\n' + featuredMatMatch + '\n\n';
content = content.replace('</main>', matReplacement + '</main>');

fs.writeFileSync(p, content);
console.log('Material.jsx restructured');
