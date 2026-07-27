import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import HexagonImage from '../../components/HexagonImage';
import { Link } from 'react-router-dom';


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

    <PageLayout title="Stud Bolts" sidebarType="products">
      <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">
              Stud Bolts
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {/* Product Photo */}
              <div className="flex-shrink-0">
                <HexagonImage src={selectedStud.img} shape="container" />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-6 text-justify flex flex-col gap-4">
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
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
              <h4 className="text-themeDarkGrey font-bold text-lg mb-4">
                Available Types of Stud Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {studData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedStud(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedStud.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <div className="w-6 h-8 bg-themeBlue text-white rounded-[4px] flex items-center justify-center relative">
                          <span className="absolute top-0 left-0 w-full h-full rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <span className="absolute top-0 left-0 w-full h-full -rotate(60deg) bg-inherit rounded-[inherit] -z-10"></span>
                          <i className="icon-angle-right"></i>
                        </div>
                    <span className="text-xs font-semibold text-themeDarkGrey group-hover:text-themeBlue transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
    </PageLayout>

  );
};

export default StudBolts;
