import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const Products = () => {
  return (
    <div className="products-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Products</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Products</span>
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
                HEX INDIA Fasteners manufactures, stocks, and exports a wide catalog of premium industrial fasteners tailored for critical environments. Leveraging our state-of-the-art forging, thread rolling, and machining machinery, we deliver high tensile fasteners that guarantee joint reliability and shear strength.
              </p>
              <p>
                Our production scope adheres to strict dimensional and chemical certification standards (ASME, DIN, ISO, BS, BIS, and UNI), supplying global operations across oil & gas, petro-chemical, power generation, heavy structural construction, marine engineering, and infrastructure platforms.
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-[#f9fafd] border border-gray-100 p-8 rounded-2xl relative shadow-sm">
              <i className="icon-quote-left text-primary/10 text-4xl absolute top-4 left-4"></i>
              <blockquote className="space-y-2 relative z-10 pt-2 pl-4">
                <p className="text-xs text-gray-600 italic leading-relaxed text-justify">
                  "Our fastener dynasty rests on dimensional uniformity and material traceability. Every single production batch undergoes physical tensile checking and metallurgy verification before dispatching to client yards."
                </p>
                <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                  Romeo Shannon, <span className="text-primary">QC Laboratory Manager</span>
                </div>
              </blockquote>
            </div>

            {/* Featured Product Categories Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-extrabold uppercase tracking-wider text-primary">
                Product Categories & Forms
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                We supply industrial fasteners in diverse structural configurations to match custom pressure ratings and mechanical loads. Below are the core fasteners groups available in ferrous and non-ferrous alloys:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#f9fafd] border border-gray-100 p-6 rounded-xl space-y-4 hover:shadow-sm transition-all duration-300">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-2">
                    Primary Threaded Fasteners
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Bolts (Hex, Socket Head, Lag, Flange)', path: '/bolts' },
                      { name: 'Screws (Machine, Self-Tapping, Set)', path: '/screw' },
                      { name: 'Stud Bolts (Continuous Thread, Double-End)', path: '/stud-bolts' },
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
                    Mating & Secondary Components
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Nuts (Hex, Heavy Hex, Nylon Lock, Wing)', path: '/nuts' },
                      { name: 'Washers (Flat, Spring, Lock, Tab)', path: '/washers' },
                      { name: 'Accessories (Pins, Rivets, Threaded Rods)', path: '/accessories' },
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

            {/* Custom Machining note */}
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-6 items-center">
              <img src="/images/pages_img_01.jpg" alt="HEX INDIA Fasteners Machining" className="w-full md:w-48 h-32 object-cover rounded-xl shadow-md border border-gray-100" />
              <div className="space-y-2">
                <h6 className="text-xs font-bold uppercase text-gray-800 tracking-wider">Custom Machined Blueprints</h6>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Apart from the standard fastener specifications listed, we feature complete custom machining capabilities. Send us your engineering CAD drawings, thread requirements, and material grades, and our machining specialists will fabricate custom solutions matching your exact specifications.
                </p>
                <Link to="/contact" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Enquire for Custom Fasteners <i className="icon-angle-right text-xs"></i>
                </Link>
              </div>
            </div>
          </main>

          {/* Sidebar Area (1/4 width) */}
          <div className="w-full md:w-1/4">
            <ProductSidebar />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
