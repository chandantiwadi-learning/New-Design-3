import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarContactForm from './SidebarContactForm';

const StandardSidebar = () => {
  const location = useLocation();



  return (
    <aside className="span3 flex flex-col gap-6">
      {/* Reusable contact form widget */}
      <SidebarContactForm />
    </aside>
  );
};

export default StandardSidebar;
