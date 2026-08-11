import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';
import SidebarNavigation from '../../components/SidebarNavigation';
import HexagonImage from '../../components/HexagonImage';

const AsmeStandards = () => {
  const standards = [
    "ASME B16.5 Stud Bolts",
    "ASME B16.47 Series A",
    "ASME B16.47 Series B",
    "ASME B18.10",
    "ASME B18.15",
    "ASME B18.16.4",
    "ASME B18.16.6",
    "ASME B18.2.1 Square and Hex Bolts and Screws — Inch Series",
    "ASME B18.2.2-2022 Nuts for General Applications — Inch Series",
    "ASME B18.2.5M",
    "ASME B18.21.1-2009 (R2016) Washers — Helical Spring-Lock, Tooth Lock and Plain Washers",
    "ASME B18.22M",
    "ASME B18.3 Socket Cap, Shoulder, Set Screws and Hex Keys — Inch Series",
    "ASME B18.31.2-2014 (R2019) Continuous Thread Stud, Double-End Stud and Flange Bolting Stud (Stud Bolt) — Inch Series",
    "ASME B18.31.3",
    "ASME B18.31.5",
    "ASME B18.5",
    "ASME B18.6.1",
    "ASME B18.6.2",
    "ASME B18.6.3-2024 Machine Screws, Tapping Screws and Metallic Drive Screws — Inch Series",
    "ASME B18.6.9",
    "ASME B18.8.1",
    "ASME B18.8.2",
    "ASME B18.9",
    "ASME B18.2.3.1M",
    "ASME B18.2.3.2M",
    "ASME B18.2.3.3M",
    "ASME B18.2.3.4M",
    "ASME B18.2.3.6M",
    "ASME B18.2.3.7M",
    "ASME B18.2.3.8M",
    "ASME B18.2.3.9M",
    "ASME B18.2.4.6M"
  ];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>ASME</li>
          </ul>
          <h1 style={{ color: '#fff' }}>ASME Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">ASME Standards</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                <div className="flex-shrink-0">
                  <HexagonImage src="/images/standards/zero_defect.jpg" shape="container" />
                </div>
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4 text-gray-600">
                  <p>HEX INDIA Fasteners is a leading manufacturer and exporter of fasteners supplied in accordance with ASME standards. We strictly adhere to global manufacturing benchmarks to ensure superior structural strength, precision, and durability. Our catalog includes a diverse range of high-quality products built for demanding applications.</p>
                  <p>Fastener engineering demands strict compliance with dimensional, tolerance, and structural testing standards. Manufactured in accordance with applicable ASME standards and customer specifications, our fasteners provide reliable shear resistance and dimensional compatibility for complex pipeline networks, heavy machinery, and critical industrial infrastructure.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg mb-4 uppercase tracking-wider">ASME Standards List</h4>
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

export default AsmeStandards;
