import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import HexagonImage from '../../components/HexagonImage';
import { Link } from 'react-router-dom';


const boltData = [
  { 
    name: 'Hex Head Bolts', 
    desc: 'Hex head bolts are the industry standard for general industrial and structural fastening applications. Forged for maximum tensile strength, they are designed to be driven with standard wrenches.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Heavy Hex Head Bolts', 
    desc: 'Featuring a wider head than standard hex bolts, heavy hex bolts offer a larger load-bearing surface and increased torsional strength, making them ideal for high-pressure and heavy construction environments.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Machine Bolts', 
    desc: 'Machine bolts are manufactured with fine or coarse threads for precision assemblies. Their smooth, uniform bodies guarantee exact alignment in critical mechanical systems.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Socket Head Bolts', 
    desc: 'Designed for use in confined spaces where external wrenching is not possible. Socket head bolts feature an internal hex drive for secure tightening in recessed counterbores.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Hex Flange Bolts', 
    desc: 'Integrated with a washer-like flange under the bolt head, hex flange bolts distribute clamping forces over a larger area, reducing the risk of damage to the mating surface.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Lifting Eye Bolts', 
    desc: 'Engineered specifically for lifting and rigging applications. The closed loop head allows for secure attachment of hooks, cables, and chains under heavy vertical loads.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Lag Bolts', 
    desc: 'Heavy-duty wood screws designed for securing heavy timbers or attaching metal brackets to wooden structures. Their coarse threads provide exceptional grip and pull-out resistance.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Foundation Bolts', 
    desc: 'Embedded directly into concrete foundations, foundation bolts provide a secure anchor point for structural steel columns, heavy machinery, and industrial equipment.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'J Bolts', 
    desc: 'Shaped like the letter J, these bolts hook around rebar or structural members before being embedded in concrete, offering a highly secure anchoring solution.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'U Bolts', 
    desc: 'U-shaped bolts featuring threads on both ends. Extensively used for attaching pipes, conduits, and tubes to fixed supports in plumbing, industrial piping, and automotive applications.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Shoulder Bolts', 
    desc: 'Featuring an unthreaded cylindrical section (shoulder) between the head and the threads, shoulder bolts serve as precision axles or pivot points for rotating or sliding components.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Elevator Bolts', 
    desc: 'Designed with a large, flat, countersunk head and a square neck underneath to prevent turning. Primarily used in conveyor systems and elevator bucket attachments.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Hanger Bolts', 
    desc: 'Dual-threaded fasteners with wood screw threads on one end and machine screw threads on the other. Ideal for suspending fixtures or structural members from overhead joists.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Carriage Bolts', 
    desc: 'Identified by their smooth, dome-shaped head and a square neck. The square section locks into the material, preventing the bolt from turning when tightening the nut.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Allen Head Bolts', 
    desc: 'A variant of socket head bolts requiring an Allen (hex) key for installation. They provide high torque transfer capabilities and a clean, flush finish when countersunk.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Anchor Bolts', 
    desc: 'Heavy-duty fasteners designed to attach structural elements to masonry or concrete. They expand or wedge themselves securely upon installation.',
    img: '/images/products/sub section/bolts.jpg'
  },
  { 
    name: 'Countersunk Bolts', 
    desc: 'Designed to sit flush with or below the surface of the surrounding material, countersunk bolts prevent snagging and create a smooth, aerodynamic finish.',
    img: '/images/products/sub section/bolts.jpg'
  }
];

const Bolts = () => {
  const [selectedBolt, setSelectedBolt] = useState(boltData[0]);

  return (

    <PageLayout title="Bolts" sidebarType="products" banner="/images/products/sub section/subsection_banner.jpg">

      <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase tracking-wide mb-6">
              Industrial Bolts
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              {/* Product Photo */}
              <div className="flex-shrink-0">
                <HexagonImage src={selectedBolt.img} shape="container" />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-6 text-justify flex flex-col gap-4">
                <p>
                  Bolts are a class of modern fasteners, as a rule formulated with an exceptional head style and an externally threaded body. Diverse sorts of Bolts can shift in head styles, sizes, thread types, manufacturing form, material, and measurement models to which they are created to consent. 
                </p>
                <p>
                  Bolts are generally utilized in combination with nuts or can be specifically mated to a machine part with thread similarity. Combined with nuts, they represent one of the most fundamental joint components in industrial structures, engineering assemblies, and pressure vessels.
                </p>
                
                <div className="mt-8 p-6 bg-[#f8fbfe] border-l-4 border-[#0D8BC5] rounded-r-xl shadow-sm">
                  <h4 className="text-lg font-extrabold text-[#0D8BC5] mb-2">{selectedBolt.name}</h4>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{selectedBolt.desc}</p>
                </div>
              </div>
            </div>

            {/* Types of Bolts list */}
            <div className="border-t border-gray-100 pt-8 flex flex-col gap-8">
              <h4 className="text-themeDarkGrey font-bold text-lg mb-4">
                Available Types of Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {boltData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedBolt(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedBolt.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
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

export default Bolts;
