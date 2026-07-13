import React from 'react';
import { Link } from 'react-router-dom';
import HexagonImage from '../../components/HexagonImage';
import ProductSidebar from '../../components/ProductSidebar';

const Zirconium = () => {
  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Material</Link></li>
            <li><i></i>Zirconium Fasteners</li>
          </ul>
          <h1 style={{ color: '#fff' }}>Zirconium Fasteners</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">Zirconium Fasteners</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                {"zirconium.jpg" && (
                  <div className="flex-shrink-0">
                    <HexagonImage src="/images/zirconium.jpg" shape="container" />
                  </div>
                )}
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                  <p>Zirconium fasteners are basic utilize segment, intended to maintain in exceedingly destructive, high temperature condition. Because of finish transperancy to the neutrons, zirconium composite fasteners are generally utilized for catapulting pipelines, warm exchanger supplies and different segments in atomic power plants. Zirconium latches are accessible in 2 grades 702 and 705 with separate UNS identical R60702 and R60705. We maker these clasp in all types of screws, screws, stud fasteners/studs, threaded rods, nuts, washers and custom fastening parts.</p>
                  <p>Zirconium alloys are high esteemed building arrangement with broad utilization in atomic area. Because of high latency to chemicals, consumption protection and extraordinary mechanical quality at higher temperatures, Zirconium alloys can withstand outrageous designing situations.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Zirconium Fastener Grades :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Grade 702</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">Grade 705</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Zirconium Fastener Types :</h4>
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

export default Zirconium;
