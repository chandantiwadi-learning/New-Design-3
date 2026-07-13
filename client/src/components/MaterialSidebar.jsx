import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarContactForm from './SidebarContactForm';

const MaterialSidebar = () => {
  const location = useLocation();

  const materials = [
    { name: 'Stainless Steel', path: '/stainless-steel' },
    { name: 'Carbon Steel', path: '/carbon-steel' },
    { name: 'Alloy Steel', path: '/alloy-steel' },
    { name: 'Duplex Steel', path: '/duplex-steel' },
    { name: 'Super Duplex Steel', path: '/super-duplex-steel' },
    { name: 'Nickel', path: '/nickel-alloy' },
    { name: 'Monel', path: '/monel' },
    { name: 'Inconel', path: '/inconel' },
    { name: 'Incoloy', path: '/incoloy' },
    { name: 'Hastelloy', path: '/hastelloy' },
    { name: 'Copper Nickel', path: '/copper-nickel' },
    { name: 'Titanium', path: '/titanium' },
    { name: 'Silicon Bronze', path: '/silicon-bronze' },
    { name: 'Phosphor Bronze', path: '/phosphor-bronze' },
    { name: 'Aluminum Bronze', path: '/aluminium-bronze' },
    { name: 'Brass', path: '/brass' },
    { name: 'Tantalum', path: '/tantalum' },
    { name: 'Zirconium', path: '/zirconium' },
  ];

  return (
    <aside className="span3 flex flex-col gap-6">
      {/* Category widget */}
      <div className="bg-[#f9fafd] border border-gray-100 rounded-xl p-6 shadow-sm select-none">
        <h4 className="text-primary font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-3 mb-4">
          Material
        </h4>
        <ul className="flex flex-col h-[400px] overflow-y-auto scrollbar-thin">
          {materials.map((mat, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              <Link
                to={mat.path}
                className={`flex items-center text-xs font-bold py-3 transition-all duration-300 hover:pl-2 ${
                  location.pathname === mat.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                <span className="icon-angle-right mr-2 text-xs font-bold"></span>
                {mat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Reusable contact form widget */}
      <SidebarContactForm />
    </aside>
  );
};

export default MaterialSidebar;
