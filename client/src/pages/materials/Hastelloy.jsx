import React from 'react';
import { Link } from 'react-router-dom';
import HexagonImage from '../../components/HexagonImage';
import ProductSidebar from '../../components/ProductSidebar';

const Hastelloy = () => {
  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Material</Link></li>
            <li><i></i>Hastelloy Fasteners</li>
          </ul>
          <h1 style={{ color: '#fff' }}>Hastelloy Fasteners</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">Hastelloy Fasteners</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                {"hastelloy.jpg" && (
                  <div className="flex-shrink-0">
                    <HexagonImage src="/images/hastelloy.jpg" shape="container" />
                  </div>
                )}
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                  <p>Hastelloy fasteners perform well in condition with plausibility of setting and fissure erosion. Accessible in types of screws, screws, stud fasteners, strung poles, nuts and washers, these hastelloy fasteners are made with exactness to persist furthest point on these conditions. We make standard and custome fasteners in hastelloy review B2, B3, C22, C276, C2000, Alloy X and G30.</p>
                  <p>Hastelloy is a group of composites in view of Nickel-Chromium-Molybdenum with expansion of other strengtening components. Well all evaluations shows slight diverse attributes to the headway of their synthesis however when all is said in done all hastelloy grades have excellant protection from setting and fissure erosion.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Hastelloy Fastener Grades :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy B2</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy B3</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy C22</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy C276</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy C2000</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy X</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Hastelloy G30</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Hastelloy Fastener Types :</h4>
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
                        <span className="text-xs font-semibold text-themeDarkGrey">Threaded Rod</span>
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

export default Hastelloy;
