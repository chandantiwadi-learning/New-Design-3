import React from 'react';
import { Link } from 'react-router-dom';

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

          <ul className="faq_nav clearfix">
            {standards.map((code, idx) => (
              <li key={idx}>
                <a 
                  className="hex_elem_rounded_type_2" 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h_el_01"></span>
                  <span className="h_el_02"></span>
                  <span className="hex_elem_rounded_type_2 with_border">
                    <span className="h_el_01"></span>
                    <span className="h_el_02"></span>
                    <span className="faq_title">{code}</span>
                  </span>
                  <span className="stripe"></span>
                  <span className="circle"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SaeStandards;
