import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const screwData = [
  { name: 'Hex Head Screws', desc: 'Screws featuring a hexagonal head, designed to be driven by a wrench or socket. Ideal for heavy-duty fastening where significant torque is required.', img: '/images/products/screws.png' },
  { name: 'Socket Head Screws', desc: 'These screws have a recessed internal hex drive (Allen drive) and are used in applications with limited clearance where a traditional wrench cannot fit.', img: '/images/products/screws.png' },
  { name: 'Square Head Screws', desc: 'Featuring a square-shaped external head, these screws offer a large gripping surface for wrenches, preventing cam-out in high-torque environments.', img: '/images/products/screws.png' },
  { name: 'Flange Head Screws', desc: 'Screws with an integrated washer-like flange beneath the head. This design distributes clamping force over a wider area, reducing the risk of material damage.', img: '/images/products/screws.png' },
  { name: 'Button Head Screws', desc: 'Recognized by their low-profile, dome-shaped head. They provide a smooth, aesthetic finish and are often used in safety applications to prevent snagging.', img: '/images/products/screws.png' },
  { name: 'Round Head Screws', desc: 'Featuring a rounded top and flat underside, these screws are common in general fastening applications where a low-profile finish is not strictly necessary.', img: '/images/products/screws.png' },
  { name: 'Oval Head Screws', desc: 'A hybrid design with a rounded top and a countersunk bottom, allowing the screw head to sit partially flush while offering a decorative finish.', img: '/images/products/screws.png' },
  { name: 'Flat Head Screws', desc: 'Designed with a completely flat top and a countersunk underside, allowing the screw to sit completely flush with the material surface for a clean look.', img: '/images/products/screws.png' },
  { name: 'Coach Screws', desc: 'Heavy-duty screws with a square or hexagonal head and coarse wood threads. Used extensively for securing heavy timber or attaching metal hardware to wood.', img: '/images/products/screws.png' },
  { name: 'Mating Screws', desc: 'Also known as sex bolts or Chicago screws, these consist of a female threaded barrel and a male threaded screw, used for clamping materials between the two heads.', img: '/images/products/screws.png' },
  { name: 'Butterfly Screws', desc: 'Also called wing screws, featuring two large "wings" on the head, allowing for easy manual tightening and loosening without the need for tools.', img: '/images/products/screws.png' },
  { name: 'Self Driving SMS', desc: 'Sheet Metal Screws with a self-drilling tip, eliminating the need for a pre-drilled pilot hole and saving significant installation time.', img: '/images/products/screws.png' },
  { name: 'Truss Head Screws', desc: 'Featuring an extra-wide, low-profile dome head. They provide a large bearing surface, ideal for fastening thin materials like sheet metal or plastics.', img: '/images/products/screws.png' },
  { name: 'Dome Head Screws', desc: 'Similar to button heads but often with a more pronounced curve, offering an aesthetic finish while providing robust fastening capabilities.', img: '/images/products/screws.png' },
  { name: 'Pan Head Screws', desc: 'Recognized by a flat top and slightly rounded edges. Pan heads are highly versatile and widely used in general machinery and electrical assemblies.', img: '/images/products/screws.png' },
  { name: 'Cheese Head Screws', desc: 'Characterized by a deep, cylindrical head with a flat top, resembling a wheel of cheese. Commonly used in automotive and electrical applications.', img: '/images/products/screws.png' },
  { name: 'Knurled Head Screws', desc: 'These screws feature a textured, knurled rim on the head, providing a non-slip grip for easy hand tightening and adjustments.', img: '/images/products/screws.png' },
  { name: 'Mushroom Head Screws', desc: 'Featuring a very wide, low-profile dome. They distribute load over a large area and are often used in roofing or protective casing assemblies.', img: '/images/products/screws.png' },
  { name: 'Fillister Head Screws', desc: 'Similar to cheese heads but with a slightly convex top. The deep slot allows for higher torque applications without damaging the screw head.', img: '/images/products/screws.png' },
  { name: 'T Head Screws', desc: 'Designed with a T-shaped head that fits into machine slots or tracks, preventing the screw from rotating while the nut is tightened.', img: '/images/products/screws.png' },
  { name: 'Countersunk Screws', desc: 'Engineered to sit flush with or below the surface of the workpiece, creating a smooth finish essential for aerodynamic or sliding surfaces.', img: '/images/products/screws.png' },
  { name: 'Set Screws', desc: 'Generally headless screws with an internal drive, used to secure a component (like a pulley or gear) onto a shaft by exerting pressure against it.', img: '/images/products/screws.png' },
  { name: 'Wood Screws', desc: 'Featuring a sharp point, coarse threads, and an unthreaded shank near the head. Optimized specifically for gripping and pulling wood surfaces together.', img: '/images/products/screws.png' },
  { name: 'Thread Cutting Screws', desc: 'Designed with a cutting edge at the tip to tap their own mating threads in metallic or plastic materials, ensuring a tight, secure fit.', img: '/images/products/screws.png' },
  { name: 'Thread Forming Screws', desc: 'Instead of cutting material, these screws displace material to form threads. This creates a stronger connection by work-hardening the mating surface.', img: '/images/products/screws.png' }
];

const Screws = () => {
  const [selectedScrew, setSelectedScrew] = useState(screwData[0]);

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
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={selectedScrew.img} 
                  alt={selectedScrew.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Screws are male threaded fasteners commonly utilized across structural, mechanical, and precision engineering industries. While bolts typically mate with corresponding nuts, screws are often driven into pre-tapped female threads on machinery parts, eliminating the need for a secondary mating nut.
                </p>
                <p>
                  Screws are frequently smaller diameter fasteners produced in cold-formed conditions. Larger diameter industrial screws, however, are manufactured from bar stock or hot forged, followed by precision machining and threading to meet high tensile specifications for critical environments.
                </p>
                
                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedScrew.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedScrew.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Screws list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Screws (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {screwData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedScrew(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedScrew.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedScrew.name === item.name ? 'bg-[#0D8BC5] text-white' : 'bg-primary/10 text-primary group-hover:bg-[#0D8BC5] group-hover:text-white'}`}>
                      <i className="icon-angle-right text-[12px] font-bold"></i>
                    </span>
                    <span className={`text-xs font-bold transition-colors group-hover:underline group-hover:decoration-[#0D8BC5] group-hover:underline-offset-4 ${selectedScrew.name === item.name ? 'text-[#0D8BC5]' : 'text-gray-600'}`}>{item.name}</span>
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

export default Screws;
