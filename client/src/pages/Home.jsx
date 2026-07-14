import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      img: '/images/slider2.jpg',
      title: 'The Right Supplier for Your Applications',
      subtitle: 'Providing high quality fasteners to various core global industries.',
      callout: 'Get a custom quote on your project: sales@hexindiafasteners.com or use our enquiry form.'
    },
    {
      img: '/images/slider1.jpg',
      title: 'Delivering Excellence in Fastening Systems',
      subtitle: 'Specializing in Stainless Steel, High Tensile, Duplex, & Nickel Alloys.',
      callout: 'Meeting the extreme demands of quality-critical industrial environments.'
    },
    {
      img: '/images/slider3.jpg',
      title: 'Precision Engineered Fastening Solutions',
      subtitle: 'Customized high-integrity fasteners designed for high pressure applications.',
      callout: 'Exceptional service, quality assurance, and on-time international delivery.'
    }
  ];

  const products = [
    { name: 'Bolts', path: '/bolts', img: '/images/bolts-nuts.jpg' },
    { name: 'Screws', path: '/screw', img: '/images/screw.png' },
    { name: 'Stud Bolts', path: '/stud-bolts', img: '/images/stud-bolts.jpg' },
    { name: 'Nuts', path: '/nuts', img: '/images/nuts.jpg' },
    { name: 'Washers', path: '/washers', img: '/images/washers.jpg' },
    { name: 'Accessories', path: '/accessories', img: '/images/accesories.jpg' },
    { name: 'Materials', path: '/material', img: '/images/alloy-steel.jpg' },
    { name: 'Custom Made', path: '/contact', img: '/images/about-us.jpg' }
  ];

  return (
    <div className="home-page select-none bg-[#f9fafd] text-gray-800">
      {/* Slider Banner Section */}
      <div className="relative h-[520px] md:h-[600px] overflow-hidden bg-brand-dark">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
              currentSlide === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
            style={{ backgroundImage: `url('${slide.img}')` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 to-black/60"></div>
            
            {/* Slider Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-20">
              <div className="max-w-3xl space-y-6 animate-fadeIn">
                <span className="inline-block px-3 py-1 bg-accent text-brand-dark font-extrabold text-[10px] uppercase tracking-widest rounded-sm shadow-sm">
                  HEX INDIA FASTENERS
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-white/95 font-light leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="h-0.5 w-20 bg-accent my-4"></div>
                <p className="text-xs md:text-sm text-[#e0f2fe] font-bold tracking-wide">
                  {slide.callout}
                </p>
                <div className="flex gap-4 pt-4">
                  <Link to="/contact" className="px-6 py-3 bg-[#0D8BC5] border border-[#0D8BC5] hover:bg-[#0878AA] hover:border-[#0878AA] hover:shadow-[0_4px_12px_rgba(13,139,197,0.3)] text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-md transition-all duration-300">
                    Get In Touch
                  </Link>
                  <Link to="/products" className="px-6 py-3 border-2 border-white bg-transparent hover:bg-white text-white hover:text-[#0878AA] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300">
                    Our Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-accent w-8' : 'bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Product Categories Grid (GEBO card style redesign) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold uppercase tracking-wider text-primary">
            Our Fastener Catalog
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mt-2 rounded-full"></div>
          <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
            Browse through our wide range of premium industrial fasteners engineered for critical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <Link
              to={prod.path}
              key={idx}
              className="group aspect-[4/3] relative rounded-lg overflow-hidden shadow-md border border-gray-100 hover:border-[#0D8BC5] hover:shadow-[0_8px_24px_rgba(13,139,197,0.25)] transition-all duration-300 block"
            >
              {/* Product Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300 z-0"
                style={{ backgroundImage: `url('${prod.img}')` }}
              ></div>
              {/* Gradient Overlay for Text Readability (Default shadow) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Brand Blue Hover Overlay */}
              <div className="absolute inset-0 bg-[#0D8BC5]/28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>

              {/* Hexagon Label */}
              <div className="absolute bottom-4 left-4 z-30">
                <div className="hexagon-tag bg-gray-500/80 text-white font-bold text-[10px] uppercase px-7 py-2 group-hover:bg-[#0D8BC5] transition-colors duration-300 backdrop-blur-sm shadow-md">
                  {prod.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vision, Mission, & High Quality Section (Redesigned core values) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="p-8 bg-bg-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white border border-[#eaf6fc] text-[#0D8BC5] rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-[#0D8BC5] group-hover:text-white group-hover:shadow-md">
                  <i className="icon-eye-open text-lg transition-colors duration-300"></i>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D8BC5]">Vision</h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                Uncompromising commitment to quality and engineering precision. We ensure every fastener complies with rigorous global certification standards.
              </p>
              <div className="mt-6 flex items-baseline space-x-2 text-[#0D8BC5]">
                <span className="text-2xl font-extrabold">12+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Years Experience</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 bg-bg-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white border border-[#eaf6fc] text-[#0D8BC5] rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-[#0D8BC5] group-hover:text-white group-hover:shadow-md">
                  <i className="icon-fighter-jet text-lg transition-colors duration-300"></i>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D8BC5]">Mission</h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                Fostering long-term customer partnerships through technical expertise, exceptional client services, and flexible, customizable production runs.
              </p>
              <div className="mt-6 flex items-baseline space-x-2 text-[#0D8BC5]">
                <span className="text-2xl font-extrabold">250+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Happy Clients</span>
              </div>
            </div>

            {/* Quality Card */}
            <div className="p-8 bg-bg-light rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-white border border-[#eaf6fc] text-[#0D8BC5] rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-[#0D8BC5] group-hover:text-white group-hover:shadow-md">
                  <i className="icon-ok text-lg transition-colors duration-300"></i>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D8BC5]">High Quality</h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                Continuous optimization of our machining processes to guarantee high tensile strengths, corrosion-resistant platings, and long-term durability.
              </p>
              <div className="mt-6 flex items-baseline space-x-2 text-[#0D8BC5]">
                <span className="text-2xl font-extrabold">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Inspection Done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section (Cleaned parallax look) */}
      <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/about_parallax_bg.jpg')", backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-primary-dark/85"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img src="/images/home_blog_img_01.jpg" alt="HEX INDIA Overview" className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-6 text-white text-justify">
              <span className="inline-block px-3 py-1 bg-accent text-brand-dark font-extrabold text-[10px] uppercase tracking-widest rounded-sm">
                About Our Enterprise
              </span>
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white">Company Overview</h2>
              <p className="text-xs leading-relaxed text-gray-200">
                Hex India Fasteners is a professionally managed enterprise established by a team of dynamic young entrepreneurs. Over the years, we have emerged as a prominent Exporter, Manufacturer & Stockist of Stainless Steel, Inconel, Monel, Hastelloy, Titanium, Nickel Alloys, Carbon Steel, Duplex & Super Duplex Steel fasteners.
              </p>
              <p className="text-xs leading-relaxed text-gray-200">
                We design and manufacture standard fasteners as well as bespoke configurations tailored to custom engineering designs, supplying clients across petro-chemical, energy, heavy industrial and shipping platforms globally.
              </p>
              <div className="pt-4">
                <Link to="/about-us" className="px-6 py-3 bg-accent hover:bg-white text-brand-dark hover:text-primary font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 inline-block shadow-md">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-extrabold uppercase tracking-wider text-primary">
              What Our Customers Say
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Review 1 */}
            <div className="p-8 bg-bg-light rounded-2xl border border-gray-100 shadow-sm relative space-y-4">
              <i className="icon-quote-left text-4xl text-primary/10 absolute top-4 left-4"></i>
              <p className="text-xs text-gray-600 italic leading-relaxed text-justify relative z-10 pt-4">
                "The staff at HEX INDIA Fasteners were extremely helpful and possessed an awesome understanding of engineering tolerances. They handled our complex customized bolt request in a timely and professional manner."
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/60">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  JD
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">John Doe</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Procurement Manager, Global Energy Co.</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 bg-bg-light rounded-2xl border border-gray-100 shadow-sm relative space-y-4">
              <i className="icon-quote-left text-4xl text-primary/10 absolute top-4 left-4"></i>
              <p className="text-xs text-gray-600 italic leading-relaxed text-justify relative z-10 pt-4">
                "The engineering team is exceptionally knowledgeable. They delivered our high tensile stud bolts quickly to prevent field shutdowns. I would highly recommend utilizing their custom manufacturing services."
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/60">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  HS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Henry Smith</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Operations Lead, Marine Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-16 text-center border-t border-white/10" style={{ background: 'linear-gradient(135deg, #0D8BC5, #0878AA)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-wide leading-relaxed">
            Providing Precision-Build Fastening Solutions For Industrial Applications Worldwide.
          </h2>
          <div className="mt-8">
            <Link to="/about-us" className="px-8 py-3.5 bg-white text-[#0D8BC5] border border-white hover:bg-transparent hover:text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 inline-block shadow-md">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
