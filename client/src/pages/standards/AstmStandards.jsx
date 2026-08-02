import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const AstmStandards = () => {
  return (
    <div className="secondary-page-legacy select-none">
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>ASTM</li>
          </ul>
          <h1 style={{ color: '#fff' }}>ASTM Standards</h1>
        </div>
      </div>
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            ASTM Standards Placeholder
          </h2>
        </div>
      </section>
    </div>
  );
};

export default AstmStandards;
