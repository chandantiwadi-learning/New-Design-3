import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const Bolts = () => {
  const boltTypesCol1 = [
    'Hex Head Bolts',
    'Heavy Hex Head Bolts',
    'Machine Bolts',
    'Socket Head Bolts',
    'Hex Flange Bolts',
    'Lifting Eye Bolts',
    'Lag Bolts',
    'Foundation Bolts',
  ];

  const boltTypesCol2 = [
    'J Bolts',
    'U Bolts',
    'Shoulder Bolts',
    'Elevator Bolts',
    'Hanger Bolts',
    'Carriage Bolts',
    'Allen Head Bolts',
    'Anchor Bolts',
    'Countersunk Bolts',
  ];

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
              <div className="w-full md:w-48 flex-shrink-0">
                <img 
                  src="/images/bolts-nuts.jpg" 
                  alt="Bolts and Nuts" 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-xs leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Bolts are a class of modern fasteners, as a rule formulated with an exceptional head style and a externally threaded body. Diverse sorts of Bolts can shift in head styles, sizes, thread types, manufacturing form, material, and measurement models to which they are created to consent. 
                </p>
                <p>
                  Bolts are generally utilized in combination with nuts or can be specifically mated to a machine part with thread similarity. Combined with nuts, they represent one of the most fundamental joint components in industrial structures, engineering assemblies, and pressure vessels.
                </p>
              </div>
            </div>

            {/* Types of Bolts list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Bolts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Column 1 */}
                <ul className="space-y-3">
                  {boltTypesCol1.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <i className="icon-angle-right text-[10px] font-bold"></i>
                      </span>
                      <span className="text-xs font-bold text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Column 2 */}
                <ul className="space-y-3">
                  {boltTypesCol2.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <i className="icon-angle-right text-[10px] font-bold"></i>
                      </span>
                      <span className="text-xs font-bold text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
