import React from 'react';
import { Link } from 'react-router-dom';
import SidebarNavigation from './SidebarNavigation';

const PageLayout = ({ title, sidebarType, children }) => {
  // Determine breadcrumb parent based on sidebarType
  const getParentInfo = () => {
    switch (sidebarType) {
      case 'materials':
        return { name: 'Material', path: '/material' };
      case 'standards':
        return { name: 'Standard', path: '/standard' };
      case 'products':
      default:
        return { name: 'Products', path: '/products' };
    }
  };

  const parent = getParentInfo();

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Home</Link></li>
            <li><Link to={parent.path}>{parent.name}</Link></li>
            <li><i></i>{title}</li>
          </ul>
          <h1 style={{ color: '#fff' }}>{title}</h1>
        </div>
      </div>

      {/* Main Layout Area */}
      <section className="page_padding grey_text_color">
        <div className="container">
          <div className="row">
            {/* Main Content Area */}
            <main className="span9">
              {children}
            </main>

            {/* Sidebar */}
            <SidebarNavigation type={sidebarType} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageLayout;
