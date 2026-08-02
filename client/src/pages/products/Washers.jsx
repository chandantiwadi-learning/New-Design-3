import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import HexagonImage from '../../components/HexagonImage';
import { Link } from 'react-router-dom';


const washerData = [
  { name: 'Plain Flat Washers', desc: 'Standard flat washers used to distribute the load of a threaded fastener and prevent damage to the surface being fixed.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Spring Lock Washers', desc: 'Split washers that act like a spring, providing continuous tension to prevent the fastener from loosening under vibration.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Tab Washers', desc: 'Featuring one or more tabs that are bent against the side of the nut or bolt head after tightening to mechanically lock the fastener in place.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Internal Tab Washers', desc: 'A variation of tab washers where the locking tabs are positioned on the inner diameter, fitting into a groove on the shaft.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Square Washers', desc: 'Square-shaped washers that offer a larger surface area than round washers. Often used in timber construction and structural applications.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Square Beveled Washers', desc: 'Square washers with an angled surface, designed to compensate for non-parallel surfaces, commonly used with I-beams or structural channels.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Hex Washers', desc: 'Washers stamped in a hexagonal shape, often used for specific aesthetic reasons or to fit inside recessed hex cavities.', img: '/images/products/sub section/washers.jpg' },
  { name: 'External Tooth Lock Washers', desc: 'Washers with teeth on the outer edge that bite into the bearing surface to prevent loosening, ideal for maximum holding power.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Internal Tooth Lock Washers', desc: 'Washers with teeth on the inner edge. These look cleaner than external tooth washers and are used when the screw head is small.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Curved Wave Washers', desc: 'Waved washers that act as a light spring, designed to absorb end play and compensate for tolerance variations in assemblies.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Conical Spring Washers', desc: 'Also known as Belleville washers, these are slightly conical shaped and provide high spring force in a compact space.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Self Locking Washers', desc: 'A broad category of washers engineered with specialized geometries or coatings designed to actively resist loosening from vibration.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Dock Washers', desc: 'Heavy-duty, extra-thick flat washers used in dock building and heavy timber construction to prevent the bolt head from pulling through the wood.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Fender Washers', desc: 'Flat washers with a significantly larger outer diameter compared to the inner diameter. Used to distribute load over a very wide area.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Ogee Washers', desc: 'Large, thick cast iron or steel washers featuring a curved, decorative profile. Primarily used in traditional timber construction.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Sealing Washers', desc: 'Washers bonded with a layer of neoprene or rubber, used to create a watertight seal around the fastener hole.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Countersunk Washers', desc: 'Washers with a beveled profile designed to accommodate the angled head of a countersunk screw, allowing it to sit flush.', img: '/images/products/sub section/washers.jpg' },
  { name: 'Finishing Washers', desc: 'Decorative washers that provide a clean, finished appearance by recessing the head of a countersunk or oval head screw.', img: '/images/products/sub section/washers.jpg' }
];

const Washers = () => {
  const [selectedWasher, setSelectedWasher] = useState(washerData[0]);

  return (

    <PageLayout title="Washers" sidebarType="products" banner="/images/products/sub section/subsection_banner.jpg">

      <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">
              Industrial Washers
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {/* Product Photo */}
              <div className="flex-shrink-0">
                <HexagonImage src={selectedWasher.img} shape="container" />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-6 text-justify flex flex-col gap-4">
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
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
              <h4 className="text-themeDarkGrey font-bold text-lg mb-4">
                Available Types of Washers (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {washerData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedWasher(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedWasher.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
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

export default Washers;
