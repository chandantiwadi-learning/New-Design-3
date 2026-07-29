import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarContactForm from './SidebarContactForm';

const SidebarNavigation = ({ type = 'products' }) => {
  const location = useLocation();

  const navData = {
    products: {
      title: 'Products',
      items: [
        { name: 'Bolts', path: '/bolts' },
        { name: 'Screws', path: '/screw' },
        { name: 'Stud Bolts', path: '/stud-bolts' },
        { name: 'Nuts', path: '/nuts' },
        { name: 'Washers', path: '/washers' },
        { name: 'Accessories', path: '/accessories' },
      ],
    },
    materials: {
      title: 'Materials',
      items: [
        { name: 'Stainless Steel', path: '/stainless-steel' },
        { name: 'Carbon Steel', path: '/carbon-steel' },
        { name: 'Alloy Steel', path: '/alloy-steel' },
        { name: 'Duplex', path: '/duplex-steel' },
        { name: 'Super Duplex', path: '/super-duplex-steel' },
        { name: 'High Nickel Alloys', path: '/nickel-alloy' },
        { name: 'Titanium', path: '/titanium' },
        { name: 'Brass', path: '/brass' },
      ],
    },
    standards: {
      title: 'Standards',
      items: [
        { name: 'DIN', path: '/din-standards' },
        { name: 'ISO', path: '/iso-standards' },
        { name: 'ASTM', path: '/astm-standards' },
        { name: 'BS', path: '/bs-standards' },
        { name: 'ANSI', path: '/ansi-standards' },
        { name: 'JIS', path: '/jis-standards' },
      ],
    },
  };

  const currentNav = navData[type] || navData.products;

  return (
    <aside className="span3 flex flex-col gap-6">
      {/* Category widget */}
      <div className="bg-[#f9fafd] border border-gray-100 rounded-xl p-6 shadow-sm select-none">
        <h4 className="text-primary font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-3 mb-4">
          {currentNav.title}
        </h4>
        <style>{`
          .sidebar-link-item {
            color: #4b5563 !important;
          }
          .sidebar-link-item:hover {
            color: #0d8bc5 !important;
          }
          .sidebar-link-item.sidebar-active {
            color: #0d8bc5 !important;
            font-weight: 800 !important;
            text-decoration: underline !important;
            text-decoration-thickness: 2px !important;
            text-underline-offset: 6px !important;
          }
        `}</style>
        <ul className="flex flex-col">
          {currentNav.items.map((item, idx) => {
            const isActive = location.pathname.replace(/\/$/, "") === item.path;
            return (
              <li key={idx} className="border-b border-gray-100 last:border-none">
                <Link
                  to={item.path}
                  className={`flex items-center text-xs font-bold py-3 transition-all duration-300 hover:pl-2 sidebar-link-item ${
                    isActive ? 'sidebar-active' : ''
                  }`}
                >
                  <span className="icon-angle-right mr-2 text-xs font-bold"></span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Reusable contact form widget */}
      <SidebarContactForm />
    </aside>
  );
};

export default SidebarNavigation;
