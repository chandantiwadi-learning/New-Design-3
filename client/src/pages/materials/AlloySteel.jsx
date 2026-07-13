import React from 'react';
import { Link } from 'react-router-dom';
import HexagonImage from '../../components/HexagonImage';
import ProductSidebar from '../../components/ProductSidebar';

const AlloySteel = () => {
  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Material</Link></li>
            <li><i></i>Alloy Steel Fasteners</li>
          </ul>
          <h1 style={{ color: '#fff' }}>Alloy Steel Fasteners</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">Alloy Steel Fasteners</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                {"alloy-steel.jpg" && (
                  <div className="flex-shrink-0">
                    <HexagonImage src="/images/alloy-steel.jpg" shape="container" />
                  </div>
                )}
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                  <p>The Alloy Steel Fasteners offered by us are fabricated utilizing prevalent review of metals. These mechanical nickel compound fasteners show tough development, exact measurement and high resistance level. Our fasteners are made with exact dimensional for simple establishment and evacuation. We can offer mechanical nickel alloy fasteners in assortment of particulars according to the necessity of the customers.</p>
                  <p>Alloy Steel is a high malleable steel class ideal utilized for low temperature applications. Alloy steel fasteners share a significant promising part in fasteners enterprises. Huge numbers of alloy steel determinations trust with their utilization in low temperature condition and covers Impact testing on these fasteners. Major of the combination steel fasteners are fabricated from AISI 4130, AISI 4140, AISI 4340 and AISI 8620 steel grades with high rigidity.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Alloy Steel Fastener Grades :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">AISI 4130</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">AISI 4140</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">AISI 4340</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">AISI 8620</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Types Of Alloy Steel Fastener :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Bolts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Screws</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Stud Bolts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Threaded Rods</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Nuts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Washers</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Components</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>

            {/* Sidebar (1/4 width) */}
            <ProductSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlloySteel;
