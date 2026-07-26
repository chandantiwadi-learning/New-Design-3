import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const studData = [
  { name: 'Full Threaded Studs', desc: 'Threaded over their entire length. Designed for applications requiring high clamping forces across mating parts, often utilized in flange connections and heavily loaded structural assemblies.', img: '/images/products/stud-bolts.png' },
  { name: 'Tap End Studs', desc: 'Featuring threads on both ends with a short unthreaded shank in the middle. The "tap end" has a shorter thread length and is designed to be screwed directly into a tapped hole in a machined component.', img: '/images/products/stud-bolts.png' },
  { name: 'Double End Studs', desc: 'Similar to tap end studs, but the thread lengths on both ends are designed to accept nuts rather than being screwed into a tapped hole. Used for clamping components between two nuts.', img: '/images/products/stud-bolts.png' },
  { name: 'Stud Bolt Reduced Shank', desc: 'The unthreaded shank portion is machined to a diameter smaller than the thread pitch diameter. This design provides increased elasticity, reducing the risk of fatigue failure under dynamic loads.', img: '/images/products/stud-bolts.png' },
  { name: 'Flange Stud Bolts', desc: 'Studs designed with an integral flange on one end, eliminating the need for a separate washer and ensuring a broad, stable bearing surface for high-pressure applications.', img: '/images/products/stud-bolts.png' },
  { name: 'Weld Studs', desc: 'Unthreaded or partially threaded studs featuring a specialized tip designed to be rapidly welded to a base metal surface using drawn arc or capacitor discharge stud welding techniques.', img: '/images/products/stud-bolts.png' }
];

const StudBolts = () => {
  const [selectedStud, setSelectedStud] = useState(studData[0]);

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
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={selectedStud.img} 
                  alt={selectedStud.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Stud bolts are headless bolting components with threads at both ends. Stud bolts, frequently called studs, are utilized with 2 nuts and 2 washers to complete a bolted joint. Hex India Fasteners offers studs in various material specifications to suit diverse mechanical applications.
                </p>
                <p>
                  Threaded rods / bars, also known as studs, are long externally threaded fasteners. Threads can be profiled over the entire length or partially at either or both ends. Studs may feature a drive opening in one end to facilitate installation.
                </p>
                <p>
                  Pitch diameter bars are thread-rolled to required profiles such as UNC, UNF, BSW, ISO, and ACME, meeting the highest quality controls.
                </p>

                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedStud.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedStud.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Stud Bolts list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Stud Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedStud(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedStud.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedStud.name === item.name ? 'bg-[#0D8BC5] text-white' : 'bg-primary/10 text-primary group-hover:bg-[#0D8BC5] group-hover:text-white'}`}>
                      <i className="icon-angle-right text-[12px] font-bold"></i>
                    </span>
                    <span className={`text-xs font-bold transition-colors group-hover:underline group-hover:decoration-[#0D8BC5] group-hover:underline-offset-4 ${selectedStud.name === item.name ? 'text-[#0D8BC5]' : 'text-gray-600'}`}>{item.name}</span>
                  </div>
                ))}
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
