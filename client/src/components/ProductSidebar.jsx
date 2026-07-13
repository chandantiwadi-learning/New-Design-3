import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarContactForm from './SidebarContactForm';

const ProductSidebar = () => {
  const location = useLocation();

  const products = [
    { name: 'Bolts', path: '/bolts' },
    { name: 'Screws', path: '/screw' },
    { name: 'Stud Bolts', path: '/stud-bolts' },
    { name: 'Nuts', path: '/nuts' },
    { name: 'Washers', path: '/washers' },
    { name: 'Accessories', path: '/accessories' },
  ];

  return (
    <aside className="span3 flex flex-col gap-6">
      {/* Category widget */}
      <div className="bg-[#f9fafd] border border-gray-100 rounded-xl p-6 shadow-sm select-none">
        <h4 className="text-primary font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-3 mb-4">
          Products
        </h4>
        <ul className="flex flex-col">
          {products.map((prod, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              <Link
                to={prod.path}
                className={`flex items-center text-xs font-bold py-3 transition-all duration-300 hover:pl-2 ${
                  location.pathname === prod.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                <span className="icon-angle-right mr-2 text-xs font-bold"></span>
                {prod.name}
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

export default ProductSidebar;
