const fs = require('fs');
const path = require('path');

const standardsDir = path.join(__dirname, 'src', 'pages', 'standards');
const files = fs.readdirSync(standardsDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(standardsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip the ones that were meant to be deleted
  if (['AnsiStandards.jsx', 'AstmStandards.jsx', 'JisStandards.jsx'].includes(file)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${file}`);
    continue;
  }

  // 1. Add imports at the top
  if (!content.includes('SidebarNavigation')) {
    content = content.replace(
      "import StandardGrid from '../../components/StandardGrid';",
      "import StandardGrid from '../../components/StandardGrid';\nimport SidebarNavigation from '../../components/SidebarNavigation';\nimport HexagonImage from '../../components/HexagonImage';"
    );
  }

  // Determine standard name based on file name (e.g. AsmeStandards.jsx -> ASME)
  const stdName = file.replace('Standards.jsx', '').toUpperCase();

  // 2. Replace the main content section
  const sectionRegex = /<section className="page_padding grey_text_color">[\s\S]*?<\/section>/;
  
  const newSection = `<section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">${stdName} Standards</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                <div className="flex-shrink-0">
                  <HexagonImage src="/images/standards/zero_defect.jpg" shape="container" />
                </div>
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4 text-gray-600">
                  <p>HEX INDIA Fasteners is a leading manufacturer and exporter of ${stdName} Standards fasteners. We strictly adhere to global manufacturing benchmarks to ensure superior structural strength, precision, and durability for all our fasteners. Our ${stdName} catalog includes a diverse range of high-quality products built for demanding applications.</p>
                  <p>Fastener engineering demands strict compliance with dimensional, tolerance, and structural testing standards. By complying with ${stdName} specifications, we guarantee our fasteners exhibit high shear resistance and dimensional compatibility for complex pipeline networks, heavy machinery, and critical industrial infrastructure.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg mb-4 uppercase tracking-wider">${stdName} Standards List</h4>
                  <div className="pr-0 md:pr-4">
                    <StandardGrid standards={standards} />
                  </div>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            <SidebarNavigation type="standards" />
          </div>
        </div>
      </section>`;

  content = content.replace(sectionRegex, newSection);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
