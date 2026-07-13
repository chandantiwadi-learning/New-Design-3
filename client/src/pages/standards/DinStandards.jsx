import React from 'react';
import { Link } from 'react-router-dom';

const DinStandards = () => {
  const standards = ["DIN 7","DIN 84","DIN 93","DIN 94","DIN 95","DIN 96","DIN 97","DIN 124","DIN 125","DIN 127","DIN 128","DIN 302","DIN 315","DIN 316","DIN 431","DIN 432","DIN 433","DIN 434","DIN 435","DIN 436","DIN 438","DIN 439","DIN 440","DIN 444A","DIN 444B","DIN 462","DIN 463","DIN 472","DIN 472","DIN 478","DIN 508","DIN 551","DIN 553","DIN 555","DIN 557","DIN 558","DIN 562","DIN 571","DIN 580","DIN 582","DIN 603","DIN 604","DIN 607","DIN 662","DIN 792","DIN 798","DIN 906","DIN 910","DIN 912","DIN 915","Din 916","DIN 917","DIN 920","DIN 921","DIN 922","DIN 923","DIN 928","DIN 931","DIN 933","DIN 934","DIN 936","DIN 961","DIN 963","DIN 964","DIN 975","DIN 976","Din 979","DIN 980-980v","DIN 985","DIN 986","DIN 1481","DIN 1433","DIN 1477","DIN 1587","DIN 2093","DIN 2509","DIN 3570","DIN 5713","DIN 6325","DIN 6797","DIN 6887","DIN 6888","DIN 6912","DIN 6914","DIN 6916","DIN 7984"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center">
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>DIN</li>
          </ul>
          <h1 style={{ color: '#fff' }}>DIN Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            DIN Standards List
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

export default DinStandards;
