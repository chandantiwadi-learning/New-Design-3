import React from 'react';
import { Link } from 'react-router-dom';

const BisStandards = () => {
  const standards = ["IS 1363-1","IS 1363-2","IS 1363-3","IS 1364-1","IS 1364-2","IS 1364-3","IS 1364-4","IS 1862","IS 2016","IS 2269","IS 6639","IS 6735","IS 6760","IS 12427","IS 13178","IS 15582"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>BIS</li>
          </ul>
          <h1 style={{ color: '#fff' }}>BIS Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            BIS Standards List
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

export default BisStandards;
