import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarContactForm from './SidebarContactForm';

const StandardSidebar = () => {
  const location = useLocation();

  const standards = [
    { name: 'ASME', path: '/asme-standards' },
    { name: 'DIN', path: '/din-standards' },
    { name: 'SAE', path: '/sae-standards' },
    { name: 'ISO', path: '/iso-standards' },
    { name: 'BS', path: '/bs-standards' },
    { name: 'BIS', path: '/bis-standards' },
    { name: 'UNI', path: '/uni-standards' },
  ];

  return (
    <aside className="span3 flex flex-col gap-6">
      {/* Category widget */}
      <div className="bg-[#f9fafd] border border-gray-100 rounded-xl p-6 shadow-sm select-none">
        <h4 className="text-primary font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-3 mb-4">
          Standard
        </h4>
        <ul className="flex flex-col">
          {standards.map((std, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              <Link
                to={std.path}
                className={`flex items-center text-xs font-bold py-3 transition-all duration-300 hover:pl-2 ${
                  location.pathname === std.path ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                <span className="icon-angle-right mr-2 text-xs font-bold"></span>
                {std.name}
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

export default StandardSidebar;
