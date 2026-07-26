import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const accData = [
  { name: 'Blind Rivets', desc: 'Tubular fasteners with a mandrel through the center. Used to join materials when you only have access to one side of the assembly.', img: '/images/products/accessories.png' },
  { name: 'Pins and Clips', desc: 'A broad category including dowel pins, cotter pins, and retaining clips, used for precise alignment or to secure components on shafts.', img: '/images/products/accessories.png' },
  { name: 'Quick Couplers', desc: 'Fittings designed for fast, frequent connection and disconnection of fluid or pneumatic lines without the use of tools.', img: '/images/products/accessories.png' },
  { name: 'Extension Springs', desc: 'Coiled springs designed to operate with a tension load, so the spring stretches as the load is applied to it.', img: '/images/products/accessories.png' },
  { name: 'Compression Springs', desc: 'Open-coil helical springs that offer resistance to a compressive force applied axially. The most common type of spring.', img: '/images/products/accessories.png' },
  { name: 'Screw Thread Inserts', desc: 'Also known as Helicoils. Coiled wire inserts used to create stronger, permanent internal threads in soft materials or repair damaged threads.', img: '/images/products/accessories.png' },
  { name: 'Retaining Rings', desc: 'Also known as circlips. Fasteners that snap into a machined groove on a dowel pin or shaft to hold assemblies laterally in place.', img: '/images/products/accessories.png' },
  { name: 'Screw Driver Bits', desc: 'Hardened steel tool inserts designed to mate precisely with various screw drive types (Phillips, Torx, Hex) for efficient installation.', img: '/images/products/accessories.png' },
  { name: 'Thread Gauges', desc: 'Precision metrology tools used to check the pitch and dimensional accuracy of internal and external threads against standard specifications.', img: '/images/products/accessories.png' }
];

const Accessories = () => {
  const [selectedAcc, setSelectedAcc] = useState(accData[0]);

  return (
    <div className="accessories-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Accessories</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Accessories</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Fastener Accessories
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={selectedAcc.img} 
                  alt={selectedAcc.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Hex India Fasteners offers diverse fastener accessories to support and optimize industrial bolted joints. Our complete range includes blind rivets, pins and clips, quick couplers, extension and compression springs, screw thread inserts (helicoils), retaining rings (circlips), screw driver bits, and thread gauges, sourced in various metric and imperial sizes.
                </p>

                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedAcc.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedAcc.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Accessories list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Accessories
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {accData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedAcc(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedAcc.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedAcc.name === item.name ? 'bg-[#0D8BC5] text-white' : 'bg-primary/10 text-primary group-hover:bg-[#0D8BC5] group-hover:text-white'}`}>
                      <i className="icon-angle-right text-[12px] font-bold"></i>
                    </span>
                    <span className={`text-xs font-bold transition-colors group-hover:underline group-hover:decoration-[#0D8BC5] group-hover:underline-offset-4 ${selectedAcc.name === item.name ? 'text-[#0D8BC5]' : 'text-gray-600'}`}>{item.name}</span>
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

export default Accessories;
