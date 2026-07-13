import React from 'react';
import { Link } from 'react-router-dom';
import HexagonImage from '../../components/HexagonImage';
import ProductSidebar from '../../components/ProductSidebar';

const SiliconBronze = () => {
  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Material</Link></li>
            <li><i></i>Silicon Bronze Fasteners</li>
          </ul>
          <h1 style={{ color: '#fff' }}>Silicon Bronze Fasteners</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            <main className="span9">
              <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">Silicon Bronze Fasteners</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                {/* Hexagon clip image */}
                {"silicon-bronze.jpg" && (
                  <div className="flex-shrink-0">
                    <HexagonImage src="/images/silicon-bronze.jpg" shape="container" />
                  </div>
                )}
                {/* Intro paragraphs */}
                <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                  <p>Silicon bronze is a high esteem copper alloy with around 96% copper content and the rest of adjust with silicon to give high quality, protection and other important attributes most appropriate for marine and process ventures. The arrangement may likewise contains low measures of managanese, tin, iron, and zinc. Silicon bronze has great throwing qualities, quality, hardness, and simplicity of welding. CDA 651 is low alloy silicon bronze while CDA 655 is high silicon bronze alloy.</p>
                  <p>Small sizes and expansive amounts of fasteners are made from silicon bronze wire bars, in cold produced condition while huge size silicon bronze fasteners are fabricated by hot fashioning, to important particulars. Hex India offers both metric and majestic estimated silicon bronze latches with coarse and fine pitch threads to different string measures.</p>
                </div>
              </div>

              {/* Lists and sections */}
              <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
                <div>
                  <h4 className="text-themeDarkGrey font-bold text-lg mb-4">Silicon Bronze Fastener Grades :</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">UNS C65100 / CDA 651</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                        <span className="text-xs font-semibold text-themeDarkGrey">UNS C65500 / CDA 655</span>
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

export default SiliconBronze;
