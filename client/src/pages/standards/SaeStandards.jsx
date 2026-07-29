import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';

const SaeStandards = () => {
  const standards = ["J105","J429","J461","J463","J502","J995","J2271","J2484","J2485","J2656","J1199"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>SAE</li>
          </ul>
          <h1 style={{ color: '#fff' }}>SAE Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            SAE Standards List
          </h2>

          <StandardGrid standards={standards} />
        </div>
      </section>
    </div>
  );
};

export default SaeStandards;
