import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';

const BsStandards = () => {
  const standards = ["BS 3692","BS 4168","BS 4395","BS 4183","BS 4464A","BS 4464B","BS 4463"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>BS</li>
          </ul>
          <h1 style={{ color: '#fff' }}>BS Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            BS Standards List
          </h2>

          <StandardGrid standards={standards} />
        </div>
      </section>
    </div>
  );
};

export default BsStandards;
