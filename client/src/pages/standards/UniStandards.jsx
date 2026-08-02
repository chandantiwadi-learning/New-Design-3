import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import StandardGrid from '../../components/StandardGrid';

const UniStandards = () => {
  const standards = ["UNI 5737","UNI 5739","UNI 5931","UNI 5933","UNI 6592","UNI 6593","UNI 7473","UNI 7474","UNI 9318","UNI 9319","UNI 9320","UNI 9321"];

  return (
    <div className="secondary-page-legacy select-none">
      {/* Title Breadcrumb */}
      <div className="title_container type_3 t_align_center" style={{ backgroundImage: "url('/images/standards/standards_subsection_banner.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container">
          <ul className="path_list clearfix">
            <li><Link to="/">Standards</Link></li>
            <li><i></i>UNI</li>
          </ul>
          <h1 style={{ color: '#fff' }}>UNI Standards</h1>
        </div>
      </div>

      {/* Main content grid */}
      <section className="page_padding grey_text_color">
        <div className="container text-center">
          <h2 className="text-[#0d8bc5] text-2xl font-bold uppercase mb-12">
            UNI Standards List
          </h2>

          <StandardGrid standards={standards} />
        </div>
      </section>
    </div>
  );
};

export default UniStandards;
