import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';
import SidebarNavigation from '../../components/SidebarNavigation';
import HexagonImage from '../../components/HexagonImage';

const DinStandards = () => {
  const standards = ["DIN 7","DIN 84","DIN 93","DIN 94","DIN 95","DIN 96","DIN 97","DIN 124","DIN 125","DIN 127","DIN 128","DIN 302","DIN 315","DIN 316","DIN 431","DIN 432","DIN 433","DIN 434","DIN 435","DIN 436","DIN 438","DIN 439","DIN 440","DIN 444A","DIN 444B","DIN 462","DIN 463","DIN 472","DIN 472","DIN 478","DIN 508","DIN 551","DIN 553","DIN 555","DIN 557","DIN 558","DIN 562","DIN 571","DIN 580","DIN 582","DIN 603","DIN 604","DIN 607","DIN 662","DIN 792","DIN 798","DIN 906","DIN 910","DIN 912","DIN 915","Din 916","DIN 917","DIN 920","DIN 921","DIN 922","DIN 923","DIN 928","DIN 931","DIN 933","DIN 934","DIN 936","DIN 961","DIN 963","DIN 964","DIN 975","DIN 976","Din 979","DIN 980-980v","DIN 985","DIN 986","DIN 1481","DIN 1433","DIN 1477","DIN 1587","DIN 2093","DIN 2509","DIN 3570","DIN 5713","DIN 6325","DIN 6797","DIN 6887","DIN 6888","DIN 6912","DIN 6914","DIN 6916","DIN 7984"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>DIN</li>
          </ul>
          <h1 style={{ color: '#fff' }}>DIN Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">DIN Standards</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                <div className="flex-shrink-0">
                  <HexagonImage src="/images/standards/zero_defect.jpg" shape="container" />
                </div>
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4 text-gray-600">
                  <p>HEX INDIA Fasteners is a leading manufacturer and exporter of DIN Standards fasteners. We strictly adhere to global manufacturing benchmarks to ensure superior structural strength, precision, and durability for all our fasteners. Our DIN catalog includes a diverse range of high-quality products built for demanding applications.</p>
                  <p>Fastener engineering demands strict compliance with dimensional, tolerance, and structural testing standards. By complying with DIN specifications, we guarantee our fasteners exhibit high shear resistance and dimensional compatibility for complex pipeline networks, heavy machinery, and critical industrial infrastructure.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg mb-4 uppercase tracking-wider">DIN Standards List</h4>
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
      </section>
    </div>
  );
};

export default DinStandards;
