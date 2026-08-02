import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import HexagonImage from '../../components/HexagonImage';
import { Link } from 'react-router-dom';


const nutData = [
  { name: 'Hex Nuts', desc: 'The most common type of nut, featuring a six-sided shape that allows for easy wrenching from multiple angles. Ideal for standard industrial fastening.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Heavy Hex Nuts', desc: 'Thicker and wider than standard hex nuts, providing a larger bearing surface and increased tensile strength for heavy-duty structural applications.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Jam Nuts', desc: 'A low-profile hex nut, typically half the thickness of a standard nut. Used as a lock nut by jamming it up against a standard nut to prevent loosening.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Coupling Nuts', desc: 'Elongated hex nuts used to connect two pieces of threaded rod or pipe together, providing a continuous threaded assembly.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Hex Cap Nuts', desc: 'Also known as acorn nuts, these feature a domed top that covers the exposed threads of a bolt, providing a finished look and protecting the threads.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Hex Flange Nuts', desc: 'Featuring an integrated washer-like flange at the base. This distributes the clamping load over a wider area, reducing damage to the mating surface.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Hex Weld Nuts', desc: 'Designed with small projections (bosses) that melt during welding, permanently fusing the nut to a metal substrate for a captive fastening point.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Square Nuts', desc: 'Four-sided nuts that provide a larger surface area in contact with the part being fastened, increasing resistance to loosening.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Square Weld Nuts', desc: 'Square-shaped weld nuts designed for permanent attachment to sheet metal or structural components where a hex shape isn’t required.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Square Thin Nuts', desc: 'A lower-profile version of the square nut, designed for applications with limited vertical clearance.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Acorn Nuts', desc: 'A specialized type of cap nut with a high, rounded dome that completely conceals the end of the male fastener for safety and aesthetics.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'T-Slot Nuts', desc: 'Designed to slide into the T-slots of aluminum extrusion profiles or machine tables, providing an adjustable threaded anchor point.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Nylock Nuts', desc: 'Hex nuts featuring a nylon collar insert that deforms over the bolt threads, providing a strong, vibration-resistant friction lock.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Nylock Jam Nuts', desc: 'A low-profile version of the Nylock nut, combining the space-saving design of a jam nut with the locking capability of a nylon insert.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'K Lock Nuts', desc: 'Also known as Kep nuts, these feature an attached, free-spinning external tooth lock washer, eliminating the need to handle a separate washer.', img: '/images/products/sub section/nuts.jpg' },
  { name: '2 Way Lock Nuts', desc: 'Reversible lock nuts that are distorted in the middle of the threads, allowing them to lock in place regardless of which side is threaded first.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'All Metal Lock', desc: 'Lock nuts that rely on a deformed thread profile rather than a nylon insert, making them suitable for high-temperature applications.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Slotted Castle', desc: 'Nuts featuring slots cut into the top. Used with a cotter pin placed through a drilled hole in the bolt to mechanically lock the nut in place.', img: '/images/products/sub section/nuts.jpg' },
  { name: '12 Point Flange', desc: 'High-strength nuts requiring a 12-point socket. The flange base and 12-point design allow for high torque application in tight spaces.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Lifting Eye Nuts', desc: 'Threaded nuts with a looped head, designed to be screwed onto threaded rod or studs to provide a secure lifting point for rigging.', img: '/images/products/sub section/nuts.jpg' },
  { name: 'Wing Nuts', desc: 'Nuts featuring two large metal "wings," allowing them to be easily tightened or loosened by hand without the need for a wrench.', img: '/images/products/sub section/nuts.jpg' }
];

const Nuts = () => {
  const [selectedNut, setSelectedNut] = useState(nutData[0]);

  return (

    <PageLayout title="Nuts" sidebarType="products" banner="/images/products/sub section/subsection_banner.jpg">

      <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">
              Industrial Nuts
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {/* Product Photo */}
              <div className="flex-shrink-0">
                <HexagonImage src={selectedNut.img} shape="container" />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                <p>
                  Nuts are female-threaded fasteners that serve as the mating partner to bolts or other externally threaded components. Standard joints are clamped by the friction of matching thread profiles and the clamping tension of the assembly.
                </p>
                <p>
                  Nuts can be hot forged or cold formed in stainless steel and high-nickel alloys with metric or imperial threading. They can also be machined from bar stock for custom engineering dimensions and quick lead times.
                </p>

                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedNut.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedNut.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Nuts list */}
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
              <h4 className="text-themeDarkGrey font-bold text-lg mb-4">
                Available Types of Nuts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nutData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedNut(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedNut.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
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

export default Nuts;
