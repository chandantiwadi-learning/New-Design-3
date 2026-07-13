import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const StudBolts = () => {
  const studTypes = [
    'Full Threaded Studs',
    'Tap End Studs',
    'Double End Studs',
    'Stud Bolt Reduced Shank',
    'Flange Stud Bolts',
    'Weld Studs',
  ];

  return (
    <div className="studbolts-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Stud Bolts</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Stud Bolts</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Stud Bolts
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-48 flex-shrink-0">
                <img 
                  src="/images/stud-bolts.jpg" 
                  alt="Stud Bolts" 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-xs leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Stud bolts are headless bolting components with threads at both ends. Stud bolts, frequently called studs, are utilized with 2 nuts and 2 washers to complete a bolted joint. Hex India Fasteners offers studs in various material specifications to suit diverse mechanical applications.
                </p>
                <p>
                  Threaded rods / bars, also known as studs, are long externally threaded fasteners. Threads can be profiled over the entire length or partially at either or both ends. Studs may feature a drive opening in one end to facilitate installation.
                </p>
                <p>
                  Pitch diameter bars are thread-rolled to required profiles such as UNC, UNF, BSW, ISO, and ACME, meeting the highest quality controls.
                </p>
              </div>
            </div>

            {/* Types of Stud Bolts list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Stud Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {studTypes.map((item, idx) => (
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

export default StudBolts;
