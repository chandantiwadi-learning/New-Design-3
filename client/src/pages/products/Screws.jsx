import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const Screws = () => {
  const screwTypesCol1 = [
    'Hex Head Screws',
    'Socket Head Screws',
    'Square Head Screws',
    'Flange Head Screws',
    'Button Head Screws',
    'Round Head Screws',
    'Oval Head Screws',
    'Flat Head Screws',
    'Coach Screws',
    'Mating Screws',
    'Butterfly Screws',
    'Self Driving SMS',
  ];

  const screwTypesCol2 = [
    'Truss Head Screws',
    'Dome Head Screws',
    'Pan Head Screws',
    'Cheese Head Screws',
    'Knurled Head Screws',
    'Mushroom Head Screws',
    'Fillister Head Screws',
    'T Head Screws',
    'Countersunk Screws',
    'Set Screws',
    'Wood Screws',
    'Thread Cutting Screws',
    'Thread Forming Screws',
  ];

  return (
    <div className="screws-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Screws</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Screws</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Industrial Screws
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-48 flex-shrink-0">
                <img 
                  src="/images/screw.png" 
                  alt="Industrial Screws" 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-xs leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Screws are likewise male threaded fasteners for the most part related and plainly distinguished from bolts. While bolts typically mate with corresponding nuts, screws are often driven into pre-tapped female threads on machinery parts, eliminating the need for a secondary mating nut.
                </p>
                <p>
                  Screws are frequently smaller diameter fasteners produced in cold-formed conditions. Larger diameter industrial screws, however, are manufactured from bar stock or hot forged, followed by precision machining and threading to meet high tensile specs.
                </p>
              </div>
            </div>

            {/* Types of Screws list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Screws (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Column 1 */}
                <ul className="space-y-3">
                  {screwTypesCol1.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <i className="icon-angle-right text-[10px] font-bold"></i>
                      </span>
                      <span className="text-xs font-bold text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Column 2 */}
                <ul className="space-y-3">
                  {screwTypesCol2.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <i className="icon-angle-right text-[10px] font-bold"></i>
                      </span>
                      <span className="text-xs font-bold text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <ProductSidebar />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Screws;
