import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const Nuts = () => {
  const nutTypesCol1 = [
    'Hex Nuts',
    'Heavy Hex Nuts',
    'Jam Nuts',
    'Coupling Nuts',
    'Hex Cap Nuts',
    'Hex Flange Nuts',
    'Hex Weld Nuts',
    'Square Nuts',
    'Square Weld Nuts',
    'Square Thin Nuts',
    'Acorn Nuts',
  ];

  const nutTypesCol2 = [
    'T-Slot Nuts',
    'Nylock Nuts',
    'Nylock Jam Nuts',
    'K Lock Nuts',
    '2 Way Lock Nuts',
    'All Metal Lock',
    'Slotted Castle',
    '12 Point Flange',
    'Lifting Eye Nuts',
    'Wing Nuts',
  ];

  return (
    <div className="nuts-page bg-white text-gray-700 select-none">
      {/* Title Breadcrumb */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-white">Nuts</h1>
          </div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-200">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nuts</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Content Area */}
          <main className="flex-grow md:w-3/4 space-y-12">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary border-b border-gray-100 pb-4">
              Industrial Nuts
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Product Photo */}
              <div className="w-full md:w-48 flex-shrink-0">
                <img 
                  src="/images/nuts.jpg" 
                  alt="Industrial Nuts" 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
              
              {/* Intro paragraphs */}
              <div className="text-xs leading-relaxed text-justify text-gray-600 space-y-4">
                <p>
                  Nuts are female-threaded fasteners that serve as the mating partner to bolts or other externally threaded components. Standard joints are clamped by the friction of matching thread profiles and the clamping tension of the assembly.
                </p>
                <p>
                  Nuts can be hot forged or cold formed in stainless steel and high-nickel alloys with metric or imperial threading. They can also be machined from bar stock for custom engineering dimensions and quick lead times.
                </p>
              </div>
            </div>

            {/* Types of Nuts list */}
            <div className="border-t border-gray-100 pt-8 space-y-6">
              <h4 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                Available Types of Nuts (Fasteners)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Column 1 */}
                <ul className="space-y-3">
                  {nutTypesCol1.map((item, idx) => (
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
                  {nutTypesCol2.map((item, idx) => (
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

export default Nuts;
