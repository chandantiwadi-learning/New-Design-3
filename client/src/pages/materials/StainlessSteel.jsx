import React from 'react';
import SidebarNavigation from '../../components/SidebarNavigation';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import HexagonImage from '../../components/HexagonImage';


const StainlessSteel = () => {
  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/materials/sub section/material_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Material</Link></li>
            <li><i></i>Stainless Steel Fasteners</li>
          </ul>
          <h1 style={{ color: '#fff' }}>Stainless Steel Fasteners</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">Stainless Steel Fasteners</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                {true && (
                  <div className="flex-shrink-0">
                    <HexagonImage src="/images/materials/sub section/stainless-steel.jpg" shape="container" />
                  </div>
                )}
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                  <p>Stainless Steel Fasteners are utilized as a part of fluctuated modern industrial applications, inferable from their recognized consumption protection, tasteful appearance and cost adequacy. Stainless steel fasteners have medium quality and high consumption protection in contrast with carbon and compound steel fasteners. Stainless steel fasteners can be effortlessly cold produced and hot fashioned. Depending upon the size, quantity, application, costing, one can decide on cool manufactured or hot fashioned stainless steel fasteners. Cold produced Stainless Steel Fasteners are constrained to M24 or 1" in measurement, huge sizes are hot fashioned. Stainless Steel Fasteners have high tasteful esteem and are frequently utilized with no covering.</p>
                  <p>Stainless Steel covers an immense scope of alloys ordered into 3 principle gatherings; Austenitic, Ferritic and Martensitic. Aside from these, more advance form of stainless steel was produced in recent decades called Duplex Stainless Steel, which falls under Austenitic-Ferritic gathering, as it comprise rise to creation of both ferritic and austenitic stage stainless steel.</p>
                  <p>304/304L and 316/316L are most generally utilized evaluations for assembling stainless steel fasteners. Different evaluations incorporate 309, 310, 316ti, 321, 347, 348, 410, 420, 430f, 440c, 446, 904L, 15-5ph, 17-4ph, S31254, A286, Alloy 20, and so forth. We offer fasteners, for example, screws, stud screws, strung poles, nuts, washers with wide range in each of their sub classes. Stainless steel Fasteners are created abundantly in icy produced condition under determination BS EN ISO 3506 and ASTM F593 and F594. Different stainless steel fasteners particulars incorporates ASTM A193, A194, A320, A1014 and A1082.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-10">
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Stainless Steel Fastener Grades :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Stainless Steel 304', 'Stainless Steel 304L', 'Stainless Steel 304H',
                      'Stainless Steel 309', 'Stainless Steel 309s', 'Stainless Steel 310',
                      'Stainless Steel 310s', 'Stainless Steel 316', 'Stainless Steel 316L',
                      'Stainless Steel 316Ti', 'Stainless Steel 316H', 'Stainless Steel 317',
                      'Stainless Steel 317L', 'Stainless Steel 321', 'Stainless Steel 321H',
                      'Stainless Steel 347', 'Stainless Steel 347H', 'Stainless Steel 348H',
                      'Stainless Steel 409', 'Stainless Steel 410', 'Stainless Steel 416',
                      'Stainless Steel 420', 'Stainless Steel 429', 'Stainless Steel 430',
                      'Stainless Steel 430F', 'Stainless Steel 43', 'Stainless Steel 440C',
                      'Stainless Steel 446', 'Stainless Steel 904L', '15-5ph',
                      '17-4ph', 'Alloy 20', 'Alloy A286', 'Alloy 254smo',
                      'Nitronic 50', 'Nitronic 60'
                    ].map((grade, idx) => (
                      <div key={idx} className="group flex items-center gap-3 p-3 rounded-lg border bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50 transition-all duration-300">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative shrink-0">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey group-hover:text-themeBlue transition-colors">{grade}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Types of Stainless Steel Fasteners :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Stainless Steel Bolts', 'Stainless Steel Screws', 'Stainless Steel Stud Bolts',
                      'Stainless Steel Threaded Rod', 'Stainless Steel Nuts', 'Stainless Steel Washers',
                      'Stainless Steel Dowel Pins', 'Stainless Steel Custom Fasteners'
                    ].map((type, idx) => (
                      <div key={idx} className="group flex items-center gap-3 p-3 rounded-lg border bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50 transition-all duration-300">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative shrink-0">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey group-hover:text-themeBlue transition-colors">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            {/* Sidebar (1/4 width) */}
            <SidebarNavigation type="materials" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StainlessSteel;
