import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';
import SidebarNavigation from '../../components/SidebarNavigation';
import HexagonImage from '../../components/HexagonImage';

const IsoStandards = () => {
  const standards = ["ISO 1207","ISO 1234","ISO 1479","ISO 1481","ISO 1482","ISO 1483","ISO 1580","ISO 10511","ISO 10512","ISO 10513","ISO 10642","ISO 10670","ISO 13337","ISO 13918","ISO 15480","ISO 15482","ISO 15481","ISO 299","ISO 299","ISO 2009","ISO 2010","ISO 2338","ISO 2339","ISO 2341","ISO 2342","ISO 2491","ISO 2936","ISO 3912","ISO 4014","ISO 4016","ISO 4017","ISO 4026","ISO 4027","ISO 4028","ISO 4029","ISO 4032","ISO 4033","ISO 4034","ISO 4035","ISO 4161","ISO 4762","ISO 4766","ISO 4775","ISO 773","ISO 774","ISO 7035","ISO 7036","ISO 7037","ISO 7038","ISO 7040","ISO 7041","ISO 7042","ISO 7045","ISO 7046","ISO 7047","ISO 7049","ISO 7050","ISO 7051","ISO 7089","ISO 7090","ISO 7091","ISO 7092","ISO 7093","ISO 7094R","ISO 7094V","ISO 7380","ISO 7380","ISO 7380","ISO 7434","ISO 7435","ISO 7436","ISO 8100","ISO 8102","ISO 8673","ISO 8675","ISO 8676","ISO 8677","ISO 8733","ISO 8734","ISO 8735","ISO 8736","ISO 8737","ISO 8738","ISO 8740","ISO 8741","ISO 8742","ISO 8744","ISO 8745","ISO 8746","ISO 8747","ISO 8750","ISO 8752","ISO 8765"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>ISO</li>
          </ul>
          <h1 style={{ color: '#fff' }}>ISO Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">ISO Standards</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                <div className="flex-shrink-0">
                  <HexagonImage src="/images/standards/zero_defect.jpg" shape="container" />
                </div>
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4 text-gray-600">
                  <p>HEX INDIA Fasteners is a leading manufacturer and exporter of ISO Standards fasteners. We strictly adhere to global manufacturing benchmarks to ensure superior structural strength, precision, and durability for all our fasteners. Our ISO catalog includes a diverse range of high-quality products built for demanding applications.</p>
                  <p>Fastener engineering demands strict compliance with dimensional, tolerance, and structural testing standards. By complying with ISO specifications, we guarantee our fasteners exhibit high shear resistance and dimensional compatibility for complex pipeline networks, heavy machinery, and critical industrial infrastructure.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg mb-4 uppercase tracking-wider">ISO Standards List</h4>
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

export default IsoStandards;
