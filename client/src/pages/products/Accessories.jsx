import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../../components/ProductSidebar';

const Accessories = () => {
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
              <div className="w-full md:w-48 flex-shrink-0">
                <img 
                  src="/images/accesories.jpg" 
                  alt="Fastener Accessories" 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
              
              {/* Intro paragraph */}
              <div className="text-xs leading-relaxed text-justify text-gray-600">
                <p>
                  Hex India Fasteners offers diverse fastener accessories to support and optimize industrial bolted joints. Our complete range includes blind rivets, pins and clips, quick couplers, extension and compression springs, screw thread inserts (helicoils), retaining rings (circlips), screw driver bits, and thread gauges, sourced in various metric and imperial sizes.
                </p>
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
