import React from 'react';
import { Link } from 'react-router-dom';
import MaterialSidebar from '../components/MaterialSidebar';

const Material = () => {
  return (
    <div className="materials-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Material</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Material</span>
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
                HEX INDIA Fasteners specializes in supplying and manufacturing high-integrity fasteners across a comprehensive catalog of premium ferrous and non-ferrous alloys. Sourcing raw materials from certified steel mills, we ensure full traceability and grade verification.
              </p>
              <p>
                Our inventory stocks extensive raw material forms (round bars, wires, sheet plates) in specialized grades to feed our forging, hot heading, and thread rolling facilities. This enables rapid lead times for custom fastener requirements in critical engineering platforms.
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-[#f9fafd] border border-gray-100 p-8 rounded-2xl relative shadow-sm">
              <i className="icon-quote-left text-primary/10 text-4xl absolute top-4 left-4"></i>
              <blockquote className="space-y-2 relative z-10 pt-2 pl-4">
                <p className="text-xs text-gray-600 italic leading-relaxed text-justify">
                  "Chemical composure and mechanical testing are paramount. Our metallurgical checks verify pitting index ratings, yield strength limits, and hardness thresholds before materials are released for production."
                </p>
                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                  Quality Assurance Department, <span className="text-primary">Hex India Fasteners</span>
                </div>
              </blockquote>
            </div>

            {/* Featured Alloys Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-primary">
                Ferrous & Non-Ferrous Alloys Scope
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                We supply industrial fasteners in diverse structural configurations to match custom pressure ratings and mechanical loads. Below are the core materials grades available in our inventory:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f9fafd] border border-gray-100 p-6 rounded-xl space-y-4 hover:shadow-sm transition-all duration-300">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2">
                    Steel & Duplex Alloys
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Stainless Steel (304, 316, 321, 347, 904L)', path: '/stainless-steel' },
                      { name: 'Carbon Steel (High-Tensile Gr. 8.8, 10.9, 12.9)', path: '/carbon-steel' },
                      { name: 'Alloy Steel (ASTM A193 B7, B16, L7)', path: '/alloy-steel' },
                      { name: 'Duplex & Super Duplex Steel (F51, F53, F55)', path: '/duplex-steel' },
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
                    Nickel & Specialized Alloys
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Nickel Alloys (Nickel 200, Monel 400, Monel K500)', path: '/nickel-alloy' },
                      { name: 'Inconel & Incoloy (Alloy 600, 625, 718, 800, 825)', path: '/inconel' },
                      { name: 'Hastelloy & Titanium (Hastelloy C276, Titanium Gr. 2, 5)', path: '/hastelloy' },
                      { name: 'Copper Alloys (Silicon/Phosphor/Aluminum Bronze, Brass)', path: '/brass' },
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

            {/* Material yards info */}
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-6 items-center">
              <img src="/images/pages_img_04.jpg" alt="HEX INDIA Material Stock" className="w-full md:w-48 h-32 object-cover rounded-xl shadow-md border border-gray-100" />
              <div className="space-y-2">
                <h6 className="text-xs font-bold uppercase text-gray-800 tracking-wider">Raw Material Stockist Yard</h6>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Our comprehensive raw material yard houses tons of stock in various sheet plates, round bars, wire coils, and hex bars in the aforementioned grades. This massive inventory volume allows us to rapidly feed raw metals into our hot heading and forging shops, enabling speed delivery of high-quality products.
                </p>
                <Link to="/contact" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Enquire for Grade Specifications <i className="icon-angle-right text-xs"></i>
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar Area (1/4 width) */}
          <div className="w-full md:w-1/4">
            <MaterialSidebar />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Material;
