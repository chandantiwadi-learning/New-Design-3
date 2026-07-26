import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const boltData = [
  { 
    name: 'Hex Head Bolts', 
    desc: 'Hex head bolts are the industry standard for general industrial and structural fastening applications. Forged for maximum tensile strength, they are designed to be driven with standard wrenches.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Heavy Hex Head Bolts', 
    desc: 'Featuring a wider head than standard hex bolts, heavy hex bolts offer a larger load-bearing surface and increased torsional strength, making them ideal for high-pressure and heavy construction environments.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Machine Bolts', 
    desc: 'Machine bolts are manufactured with fine or coarse threads for precision assemblies. Their smooth, uniform bodies guarantee exact alignment in critical mechanical systems.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Socket Head Bolts', 
    desc: 'Designed for use in confined spaces where external wrenching is not possible. Socket head bolts feature an internal hex drive for secure tightening in recessed counterbores.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Hex Flange Bolts', 
    desc: 'Integrated with a washer-like flange under the bolt head, hex flange bolts distribute clamping forces over a larger area, reducing the risk of damage to the mating surface.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Lifting Eye Bolts', 
    desc: 'Engineered specifically for lifting and rigging applications. The closed loop head allows for secure attachment of hooks, cables, and chains under heavy vertical loads.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Lag Bolts', 
    desc: 'Heavy-duty wood screws designed for securing heavy timbers or attaching metal brackets to wooden structures. Their coarse threads provide exceptional grip and pull-out resistance.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Foundation Bolts', 
    desc: 'Embedded directly into concrete foundations, foundation bolts provide a secure anchor point for structural steel columns, heavy machinery, and industrial equipment.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'J Bolts', 
    desc: 'Shaped like the letter J, these bolts hook around rebar or structural members before being embedded in concrete, offering a highly secure anchoring solution.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'U Bolts', 
    desc: 'U-shaped bolts featuring threads on both ends. Extensively used for attaching pipes, conduits, and tubes to fixed supports in plumbing, industrial piping, and automotive applications.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Shoulder Bolts', 
    desc: 'Featuring an unthreaded cylindrical section (shoulder) between the head and the threads, shoulder bolts serve as precision axles or pivot points for rotating or sliding components.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Elevator Bolts', 
    desc: 'Designed with a large, flat, countersunk head and a square neck underneath to prevent turning. Primarily used in conveyor systems and elevator bucket attachments.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Hanger Bolts', 
    desc: 'Dual-threaded fasteners with wood screw threads on one end and machine screw threads on the other. Ideal for suspending fixtures or structural members from overhead joists.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Carriage Bolts', 
    desc: 'Identified by their smooth, dome-shaped head and a square neck. The square section locks into the material, preventing the bolt from turning when tightening the nut.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Allen Head Bolts', 
    desc: 'A variant of socket head bolts requiring an Allen (hex) key for installation. They provide high torque transfer capabilities and a clean, flush finish when countersunk.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Anchor Bolts', 
    desc: 'Heavy-duty fasteners designed to attach structural elements to masonry or concrete. They expand or wedge themselves securely upon installation.',
    img: '/images/products/bolts.png'
  },
  { 
    name: 'Countersunk Bolts', 
    desc: 'Designed to sit flush with or below the surface of the surrounding material, countersunk bolts prevent snagging and create a smooth, aerodynamic finish.',
    img: '/images/products/bolts.png'
  }
];

const Bolts = () => {
  const [selectedBolt, setSelectedBolt] = useState(boltData[0]);

  return (
    <div className="bolts-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Bolts</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Bolts</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Industrial Bolts
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-64 flex-shrink-0">
                <img 
                  src={selectedBolt.img} 
                  alt={selectedBolt.name} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100 transition-opacity duration-300"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-sm leading-relaxed text-justify text-gray-600 space-y-4">
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
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {boltData.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedBolt(item)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 border ${selectedBolt.name === item.name ? 'bg-white border-[#0D8BC5] shadow-md transform -translate-y-1' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50'}`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedBolt.name === item.name ? 'bg-[#0D8BC5] text-white' : 'bg-primary/10 text-primary group-hover:bg-[#0D8BC5] group-hover:text-white'}`}>
                      <i className="icon-angle-right text-[12px] font-bold"></i>
                    </span>
                    <span className={`text-xs font-bold transition-colors group-hover:underline group-hover:decoration-[#0D8BC5] group-hover:underline-offset-4 ${selectedBolt.name === item.name ? 'text-[#0D8BC5]' : 'text-gray-600'}`}>{item.name}</span>
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

export default Bolts;
