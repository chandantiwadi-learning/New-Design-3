import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const washerData = [
  { name: 'Plain Flat Washers', desc: 'Standard flat washers used to distribute the load of a threaded fastener and prevent damage to the surface being fixed.', img: '/images/products/washers.png' },
  { name: 'Spring Lock Washers', desc: 'Split washers that act like a spring, providing continuous tension to prevent the fastener from loosening under vibration.', img: '/images/products/washers.png' },
  { name: 'Tab Washers', desc: 'Featuring one or more tabs that are bent against the side of the nut or bolt head after tightening to mechanically lock the fastener in place.', img: '/images/products/washers.png' },
  { name: 'Internal Tab Washers', desc: 'A variation of tab washers where the locking tabs are positioned on the inner diameter, fitting into a groove on the shaft.', img: '/images/products/washers.png' },
  { name: 'Square Washers', desc: 'Square-shaped washers that offer a larger surface area than round washers. Often used in timber construction and structural applications.', img: '/images/products/washers.png' },
  { name: 'Square Beveled Washers', desc: 'Square washers with an angled surface, designed to compensate for non-parallel surfaces, commonly used with I-beams or structural channels.', img: '/images/products/washers.png' },
  { name: 'Hex Washers', desc: 'Washers stamped in a hexagonal shape, often used for specific aesthetic reasons or to fit inside recessed hex cavities.', img: '/images/products/washers.png' },
  { name: 'External Tooth Lock Washers', desc: 'Washers with teeth on the outer edge that bite into the bearing surface to prevent loosening, ideal for maximum holding power.', img: '/images/products/washers.png' },
  { name: 'Internal Tooth Lock Washers', desc: 'Washers with teeth on the inner edge. These look cleaner than external tooth washers and are used when the screw head is small.', img: '/images/products/washers.png' },
  { name: 'Curved Wave Washers', desc: 'Waved washers that act as a light spring, designed to absorb end play and compensate for tolerance variations in assemblies.', img: '/images/products/washers.png' },
  { name: 'Conical Spring Washers', desc: 'Also known as Belleville washers, these are slightly conical shaped and provide high spring force in a compact space.', img: '/images/products/washers.png' },
  { name: 'Self Locking Washers', desc: 'A broad category of washers engineered with specialized geometries or coatings designed to actively resist loosening from vibration.', img: '/images/products/washers.png' },
  { name: 'Dock Washers', desc: 'Heavy-duty, extra-thick flat washers used in dock building and heavy timber construction to prevent the bolt head from pulling through the wood.', img: '/images/products/washers.png' },
  { name: 'Fender Washers', desc: 'Flat washers with a significantly larger outer diameter compared to the inner diameter. Used to distribute load over a very wide area.', img: '/images/products/washers.png' },
  { name: 'Ogee Washers', desc: 'Large, thick cast iron or steel washers featuring a curved, decorative profile. Primarily used in traditional timber construction.', img: '/images/products/washers.png' },
  { name: 'Sealing Washers', desc: 'Washers bonded with a layer of neoprene or rubber, used to create a watertight seal around the fastener hole.', img: '/images/products/washers.png' },
  { name: 'Countersunk Washers', desc: 'Washers with a beveled profile designed to accommodate the angled head of a countersunk screw, allowing it to sit flush.', img: '/images/products/washers.png' },
  { name: 'Finishing Washers', desc: 'Decorative washers that provide a clean, finished appearance by recessing the head of a countersunk or oval head screw.', img: '/images/products/washers.png' }
];

const Washers = () => {
  const [selectedWasher, setSelectedWasher] = useState(washerData[0]);

  return (
    <div className="washers-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Washers</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Washers</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Industrial Washers
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={selectedWasher.img} 
                  alt={selectedWasher.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Washers are flat sheet metal components generally in a round formed profile with a center hole punched through to accommodate a bolt through a nut or matching threaded part. Washers are used to distribute the load of the bolting or to reduce the vibration of the bolted joint.
                </p>
                <p>
                  High-performance bolted joints require hardened steel washers to prevent the loss of pre-load due to brinelling after clamping torque is applied. We stock metric and imperial washers in various steel and copper alloys.
                </p>
                
                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedWasher.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedWasher.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Washers list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Washers (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {washerData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedWasher(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedWasher.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedWasher.name === item.name ? 'bg-[#0D8BC5] text-white' : 'bg-primary/10 text-primary group-hover:bg-[#0D8BC5] group-hover:text-white'}`}>
                      <i className="icon-angle-right text-[12px] font-bold"></i>
                    </span>
                    <span className={`text-xs font-bold transition-colors group-hover:underline group-hover:decoration-[#0D8BC5] group-hover:underline-offset-4 ${selectedWasher.name === item.name ? 'text-[#0D8BC5]' : 'text-gray-600'}`}>{item.name}</span>
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

export default Washers;
