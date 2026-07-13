import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page-legacy select-none">
      <section className="main secondary_page" data-animate-up="header-static" data-animate-down="header-small">
        
        {/* Start title container */}
        <div className="title_container t_align_center type_3">
          <div className="container">
            <ul className="path_list clearfix">
              <li><Link to="/">Home</Link></li>
              <li><i></i>About Us</li>
            </ul>
            <h1 style={{ color: '#fff' }}>About Us</h1>
          </div>
        </div>
        {/* End title container */}

        {/* Start about us section */}
        <main className="about_us">
          <div className="container">
            <div className="row">
              <figure className="span6">
                <figcaption>
                  <h2 style={{ color: '#0d8bc5' }}>Who We Are?</h2>
                </figcaption>
                <p style={{ textAlign: 'justify' }}>
                  <strong>Hex India Fasteners</strong> are one of the prominent Exporter, Manufacturer & Stockist of Stainless Steel, Inconel, Monel, Hastelloy, Titanium, Nickel & Nickel alloys, Copper & Copper alloys, Carbon Steel, Alloy Steel, Duplex & Super Duplex Stainless Steel and all types of other steel. We are specialized in manufacturing and exporting various types of Fasteners of Ferrous and Non- Ferrous Metals. We are one of the core manufacturing industries. The staff were extremely understanding surveying any issues in full fledge and dealing it in an convenient way. Having established ourselves and set up in the heart of India's commercial center Mumbai, we have built up adequate stock levels of all essential items within our scope of supply and are in position to offer immediate deliveries.
                </p>
              </figure>
              <figure className="span6">
                <img src="/images/about-us.jpg" alt="About Us" />
              </figure>
            </div>
          </div>
        </main>
        {/* End about us section */}

        {/* Start parallax section */}
        <section className="parallax_section_about parallax t_align_center" style={{ backgroundImage: "url('/images/parallax_bg_04.png')", backgroundAttachment: 'fixed', backgroundPosition: '50% 0px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="container">
            <h2></h2>
            <p>Hex India Fasteners is an Indian assembling element giving customary and Customized Fastening Solutions; occupied with assembling, stock holding and outsourcing Industrial Fasteners.</p>
            <Link to="/contact" className="button_style_01 m_top_15" style={{ color: '#0d8bc5' }}>Make an enquiry</Link>
          </div>
        </section>
        {/* End parallax section */}

        {/* Start our clients carousel */}
        <section className="our_clients_section">
          <div className="container">
            <div className="row">
              <div className="custom_span_4_5">
                <ul className="our_clients_first clearfix">
                  {[
                    '/images/our_client_logo_03.png',
                    '/images/our_client_logo_04.png',
                    '/images/our_client_logo_01.png',
                    '/images/our_client_logo_02.png',
                    '/images/our_client_logo_07.png',
                    '/images/our_client_logo_08.png',
                    '/images/our_client_logo_05.png',
                    '/images/our_client_logo_06.png',
                    '/images/our_client_logo_09.png',
                    '/images/our_client_logo_03.png',
                    '/images/our_client_logo_04.png',
                    '/images/our_client_logo_01.png',
                    '/images/our_client_logo_02.png',
                    '/images/our_client_logo_07.png',
                    '/images/our_client_logo_08.png',
                    '/images/our_client_logo_05.png',
                    '/images/our_client_logo_06.png',
                    '/images/our_client_logo_09.png'
                  ].map((logo, idx) => (
                    <li key={idx}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img src={logo} alt="Client Logo" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="span3">
                <figure className="our_clients_title">
                  <span></span><span></span>
                  <h2 style={{ color: '#0d8bc5' }}>Our Clients</h2>
                  <a className="our_clients_prev" href="#" onClick={(e) => e.preventDefault()}><span className="icon-chevron-left"></span></a>
                  <a className="our_clients_next" href="#" onClick={(e) => e.preventDefault()}><span className="icon-chevron-right"></span></a>
                </figure>
              </div>
              <div className="custom_span_4_5">
                <ul className="our_clients clearfix">
                  {[
                    '/images/our_client_logo_01.png',
                    '/images/our_client_logo_02.png',
                    '/images/our_client_logo_03.png',
                    '/images/our_client_logo_04.png',
                    '/images/our_client_logo_01.png',
                    '/images/our_client_logo_02.png',
                    '/images/our_client_logo_03.png',
                    '/images/our_client_logo_04.png'
                  ].map((logo, idx) => (
                    <li key={idx}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img src={logo} alt="Client Logo" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* End our clients carousel */}

      </section>
    </div>
  );
};

export default About;
