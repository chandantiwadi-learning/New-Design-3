import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import HexagonImage from '../../components/HexagonImage';
import { Link } from 'react-router-dom';


const screwData = [
  { name: 'Hex Head Screws', desc: 'Screws featuring a hexagonal head, designed to be driven by a wrench or socket. Ideal for heavy-duty fastening where significant torque is required.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Socket Head Screws', desc: 'These screws have a recessed internal hex drive (Allen drive) and are used in applications with limited clearance where a traditional wrench cannot fit.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Square Head Screws', desc: 'Featuring a square-shaped external head, these screws offer a large gripping surface for wrenches, preventing cam-out in high-torque environments.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Flange Head Screws', desc: 'Screws with an integrated washer-like flange beneath the head. This design distributes clamping force over a wider area, reducing the risk of material damage.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Button Head Screws', desc: 'Recognized by their low-profile, dome-shaped head. They provide a smooth, aesthetic finish and are often used in safety applications to prevent snagging.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Round Head Screws', desc: 'Featuring a rounded top and flat underside, these screws are common in general fastening applications where a low-profile finish is not strictly necessary.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Oval Head Screws', desc: 'A hybrid design with a rounded top and a countersunk bottom, allowing the screw head to sit partially flush while offering a decorative finish.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Flat Head Screws', desc: 'Designed with a completely flat top and a countersunk underside, allowing the screw to sit completely flush with the material surface for a clean look.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Coach Screws', desc: 'Heavy-duty screws with a square or hexagonal head and coarse wood threads. Used extensively for securing heavy timber or attaching metal hardware to wood.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Mating Screws', desc: 'Also known as sex bolts or Chicago screws, these consist of a female threaded barrel and a male threaded screw, used for clamping materials between the two heads.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Butterfly Screws', desc: 'Also called wing screws, featuring two large "wings" on the head, allowing for easy manual tightening and loosening without the need for tools.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Self Driving SMS', desc: 'Sheet Metal Screws with a self-drilling tip, eliminating the need for a pre-drilled pilot hole and saving significant installation time.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Truss Head Screws', desc: 'Featuring an extra-wide, low-profile dome head. They provide a large bearing surface, ideal for fastening thin materials like sheet metal or plastics.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Dome Head Screws', desc: 'Similar to button heads but often with a more pronounced curve, offering an aesthetic finish while providing robust fastening capabilities.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Pan Head Screws', desc: 'Recognized by a flat top and slightly rounded edges. Pan heads are highly versatile and widely used in general machinery and electrical assemblies.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Cheese Head Screws', desc: 'Characterized by a deep, cylindrical head with a flat top, resembling a wheel of cheese. Commonly used in automotive and electrical applications.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Knurled Head Screws', desc: 'These screws feature a textured, knurled rim on the head, providing a non-slip grip for easy hand tightening and adjustments.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Mushroom Head Screws', desc: 'Featuring a very wide, low-profile dome. They distribute load over a large area and are often used in roofing or protective casing assemblies.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Fillister Head Screws', desc: 'Similar to cheese heads but with a slightly convex top. The deep slot allows for higher torque applications without damaging the screw head.', img: '/images/products/sub section/screws.jpg' },
  { name: 'T Head Screws', desc: 'Designed with a T-shaped head that fits into machine slots or tracks, preventing the screw from rotating while the nut is tightened.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Countersunk Screws', desc: 'Engineered to sit flush with or below the surface of the workpiece, creating a smooth finish essential for aerodynamic or sliding surfaces.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Set Screws', desc: 'Generally headless screws with an internal drive, used to secure a component (like a pulley or gear) onto a shaft by exerting pressure against it.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Wood Screws', desc: 'Featuring a sharp point, coarse threads, and an unthreaded shank near the head. Optimized specifically for gripping and pulling wood surfaces together.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Thread Cutting Screws', desc: 'Designed with a cutting edge at the tip to tap their own mating threads in metallic or plastic materials, ensuring a tight, secure fit.', img: '/images/products/sub section/screws.jpg' },
  { name: 'Thread Forming Screws', desc: 'Instead of cutting material, these screws displace material to form threads. This creates a stronger connection by work-hardening the mating surface.', img: '/images/products/sub section/screws.jpg' }
];

const Screws = () => {
  const [selectedScrew, setSelectedScrew] = useState(screwData[0]);

  return (

    <PageLayout title="Screws" sidebarType="products" banner="/images/products/sub section/subsection_banner.jpg">

      <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">
              Industrial Screws
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {/* Product Photo */}
              <div className="flex-shrink-0">
                <HexagonImage src={selectedScrew.img} shape="container" />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-6 text-justify flex flex-col gap-4">
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
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
              <h4 className="text-themeDarkGrey font-bold text-lg mb-4">
                Available Types of Screws (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {screwData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedScrew(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedScrew.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
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

export default Screws;
