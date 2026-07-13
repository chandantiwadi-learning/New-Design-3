import React from 'react';
import { Link } from 'react-router-dom';

const AsmeStandards = () => {
  const standards = ["ASME B16.5 Stud Bolts","ASME B16.47 Series A","ASME B16.47 Series B","ASME B18.10","ASME B18.15","ASME B18.16.3m","ASME B18.16.4","ASME B18.16.6","ASME B18.2.1","ASME B18.2.2","ASME B18.2.5M","ASME B18.21.1","ASME B18.22M","ASME B18.3","ASME B18.31.2","ASME B18.31.3","ASME B18.31.5","ASME B18.5","ASME B18.6.1","ASME B18.6.2","ASME B18.6.3","ASME B18.6.9","ASME B18.8.1","ASME B18.8.2","ASME B18.9","ASME B18.2.3.1M","ASME B18.2.3.2M","ASME B18.2.3.3M","ASME B18.2.3.4M","ASME B18.2.3.5M","ASME B18.2.3.5M","ASME B18.2.3.6M","ASME B18.2.3.7M","ASME B18.2.3.8M","ASME B18.2.3.9M","ASME B18.2.4.6M"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>ASME</li>
          </ul>
          <h1 style={{ color: '#fff' }}>ASME Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            ASME Standards List
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

export default AsmeStandards;
