import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';
import SidebarNavigation from '../../components/SidebarNavigation';
import HexagonImage from '../../components/HexagonImage';

const BisStandards = () => {
  const standards = ["IS 1363-1","IS 1363-2","IS 1363-3","IS 1364-1","IS 1364-2","IS 1364-3","IS 1364-4","IS 1862","IS 2016","IS 2269","IS 6639","IS 6735","IS 6760","IS 12427","IS 13178","IS 15582"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>BIS</li>
          </ul>
          <h1 style={{ color: '#fff' }}>BIS Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">BIS Standards</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                <div className="flex-shrink-0">
                  <HexagonImage src="/images/standards/zero_defect.jpg" shape="container" />
                </div>
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4 text-gray-600">
                  <p>HEX INDIA Fasteners is a leading manufacturer and exporter of BIS Standards fasteners. We strictly adhere to global manufacturing benchmarks to ensure superior structural strength, precision, and durability for all our fasteners. Our BIS catalog includes a diverse range of high-quality products built for demanding applications.</p>
                  <p>Fastener engineering demands strict compliance with dimensional, tolerance, and structural testing standards. By complying with BIS specifications, we guarantee our fasteners exhibit high shear resistance and dimensional compatibility for complex pipeline networks, heavy machinery, and critical industrial infrastructure.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg mb-4 uppercase tracking-wider">BIS Standards List</h4>
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

export default BisStandards;
