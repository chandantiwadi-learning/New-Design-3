import React from 'react';
import { Link } from 'react-router-dom';
import StandardSidebar from '../components/StandardSidebar';

const Standard = () => {
  return (
    <div className="standards-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Standard</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Standard</span>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area (3/4 width) */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <div className="space-y-6 text-justify text-xs leading-relaxed text-gray-600">
              <p>
                Fastener engineering demands strict compliance with global dimensional, tolerance, and structural testing standards. To guarantee structural load capabilities, shear resistance, and dimensional compatibility in pipeline networks and machinery, HEX INDIA Fasteners complies strictly with leading standardization templates.
              </p>
              <p>
                Our metrology labs are equipped with calibrated thread check plugs, profile projectors, digital verniers, and hardness verification tools to inspect thread tolerances, pitch angles, and socket configurations.
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-[#f9fafd] border border-gray-100 p-8 rounded-2xl relative shadow-sm">
              <i className="icon-quote-left text-primary/10 text-4xl absolute top-4 left-4"></i>
              <blockquote className="space-y-2 relative z-10 pt-2 pl-4">
                <p className="text-xs text-gray-600 italic leading-relaxed text-justify">
                  "Thread pitch precision is critical in high-pressure steam lines and piping manifolds. We guarantee dimensional accuracy under ASME B18 and metric DIN specifications to prevent failures."
                </p>
                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                  Metrology Division, <span className="text-primary">Hex India Fasteners</span>
                </div>
              </blockquote>
            </div>

            {/* Featured Standards Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-primary">
                Dimensional Standards & Specifications
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                We supply industrial fasteners in diverse structural configurations to match custom pressure ratings and mechanical loads. Below are the core measurement systems and specifications we support:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f9fafd] border border-gray-100 p-6 rounded-xl space-y-4 hover:shadow-sm transition-all duration-300">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2">
                    Imperial Standards (ASME/SAE/BS)
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'ASME Standards (B18.2.1, B18.2.2, B18.3)', path: '/asme-standards' },
                      { name: 'SAE Standards (Aerospace & Automotive)', path: '/sae-standards' },
                      { name: 'BS Standards (British Standard Whitworth)', path: '/bs-standards' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="icon-angle-right text-primary text-xs font-bold"></i>
                        <Link to={item.path} className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f9fafd] border border-gray-100 p-6 rounded-xl space-y-4 hover:shadow-sm transition-all duration-300">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2">
                    Metric Standards (DIN/ISO/UNI/BIS)
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'DIN Standards (DIN 931, 933, 912, 934)', path: '/din-standards' },
                      { name: 'ISO Standards (Global Metric Fasteners)', path: '/iso-standards' },
                      { name: 'UNI & BIS Standards (Italian & Indian Templates)', path: '/uni-standards' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="icon-angle-right text-primary text-xs font-bold"></i>
                        <Link to={item.path} className="text-xs font-bold text-gray-600 hover:text-primary transition-colors">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Standards metrology yard */}
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-6 items-center">
              <img src="/images/pages_img_06.jpg" alt="HEX INDIA Dimensional Gauging" className="w-full md:w-48 h-32 object-cover rounded-xl shadow-md border border-gray-100" />
              <div className="space-y-2">
                <h6 className="text-xs font-bold uppercase text-gray-800 tracking-wider">Calibration and Metrology Lab</h6>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Our calibrating laboratories maintain high quality standards. We regularly calibrate our micrometer scales, thread check templates, ring gauges, and coordinate measurement tools against national testing benchmarks. This ensures metric and imperial tolerances remain precise and zero-defect throughout fabrication.
                </p>
                <Link to="/contact" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Enquire for Metrology Conformance <i className="icon-angle-right text-xs"></i>
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar Area (1/4 width) */}
          <div className="w-full md:w-1/4">
            <StandardSidebar />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Standard;
