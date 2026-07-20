import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EngineeringCard = ({ title, description, value, subtitle, icon, delay, isVisible }) => {
  return (
    <div
      className={`group relative bg-white rounded-[20px] p-8 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full flex flex-col z-10`}
      style={{
        animation: isVisible ? `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards` : 'none',
        opacity: 0,
      }}
    >
      <div className="flex justify-between items-start mb-10">
        {/* Icon & Hexagon */}
        <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-[1.08] transition-transform duration-[400ms] ease-in-out">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#1E88E5] opacity-[0.7] group-hover:opacity-100 transition-opacity duration-[400ms]">
            <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:drop-shadow-[0_0_8px_rgba(30,136,229,0.6)] transition-all duration-[400ms]" />
            <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-0 group-hover:opacity-100 hex-animated-path" />
            <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="#64B5F6" strokeWidth="3.5" className="opacity-0 group-hover:opacity-100 hex-travel-line" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <i className={`${icon} text-[32px] text-[#1E88E5] group-hover:scale-110 transition-transform duration-[400ms] ease-in-out`}></i>
          </div>
        </div>

        {/* Floating Hexagon Badge */}
        <div className="relative w-24 h-[105px] flex flex-col items-center justify-center mt-[-10px] mr-[-10px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#1E88E5] opacity-[0.7]">
            <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>

          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
            <span className="text-[26px] font-black text-[#1E88E5] leading-none mb-1">{value}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 text-center px-3 leading-tight">{subtitle}</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-gray-900 mb-4">{title}</h3>
      <p className="text-[16px] text-gray-600 leading-[1.8] flex-grow font-medium">
        {description}
      </p>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutSlide, setAboutSlide] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutSectionRef = React.useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const aboutTimer = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(aboutTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const [isEngSectionVisible, setIsEngSectionVisible] = useState(false);
  const engineeringSectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEngSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (engineeringSectionRef.current) {
      observer.observe(engineeringSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const slides = [
    {
      img: '/images/homePage/1.jpg',
      title: 'Engineering Strong Connections',
      subtitle: 'Premium stainless steel fasteners engineered for strength, precision, and long-term performance across global industries.',
      callout: 'Trusted manufacturing partner delivering reliable fastening solutions with uncompromising quality and international standards.',
      btn1: 'GET IN TOUCH',
      btn2: 'OUR PRODUCTS',
      imgClasses: 'object-[80%_center] md:object-[75%_center] lg:object-center'
    },
    {
      img: '/images/homePage/2.jpg',
      title: 'Precision in Every Component',
      subtitle: 'Manufacturing high-quality washers that ensure secure fastening, superior load distribution, and long-lasting durability.',
      callout: 'Designed for demanding industrial environments where consistency and precision matter most.',
      btn1: 'GET IN TOUCH',
      btn2: 'OUR PRODUCTS',
      imgClasses: 'object-[90%_center] md:object-[80%_center] lg:object-[center_center]'
    },
    {
      img: '/images/homePage/3.jpg',
      title: 'Built for Industrial Performance',
      subtitle: 'Reliable industrial nuts engineered for maximum strength, dimensional accuracy, and dependable performance.',
      callout: 'Supporting engineering excellence with products manufactured to meet international quality standards.',
      btn1: 'GET IN TOUCH',
      btn2: 'OUR PRODUCTS',
      imgClasses: 'object-[75%_center] md:object-[70%_center] lg:object-center'
    },
    {
      img: '/images/homePage/4.jpg',
      title: 'Your Trusted Fastener Partner',
      subtitle: 'Complete fastening solutions for construction, infrastructure, heavy engineering, energy, and manufacturing industries.',
      callout: 'Delivering premium industrial fasteners with precision manufacturing, reliable quality, and worldwide supply capabilities.',
      btn1: 'GET IN TOUCH',
      btn2: 'OUR PRODUCTS',
      imgClasses: 'object-[85%_center] md:object-[75%_center] lg:object-center'
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
            className={`absolute inset-0 transition-all duration-[900ms] ease-out ${currentSlide === idx ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 z-0 pointer-events-none'
              }`}
          >
            {/* Optimized Responsive Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover ${slide.imgClasses} will-change-transform transform-gpu`}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={idx === 0 ? "high" : "auto"}
            />
            {/* Gradient Overlay & Blur adjusted for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/60 via-black/40 md:via-black/20 to-transparent lg:to-transparent/10 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 55%)', maskImage: 'linear-gradient(to right, black 0%, transparent 55%)' }}></div>

            {/* Slider Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-20">
              <div className="max-w-[85%] md:max-w-2xl lg:max-w-3xl space-y-5 md:space-y-6 pt-10 md:pt-0">
                <h1 className={`text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase transform transition-all duration-[600ms] delay-[200ms] ${currentSlide === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {slide.title}
                </h1>
                <p className={`text-sm md:text-base text-white/95 font-light leading-relaxed transform transition-all duration-[600ms] delay-[300ms] ${currentSlide === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {slide.subtitle}
                </p>
                <div className={`h-0.5 w-20 bg-accent my-4 transform transition-all duration-[600ms] delay-[400ms] ${currentSlide === idx ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  } origin-left`}></div>
                <p className={`text-xs md:text-sm text-[#e0f2fe] font-bold tracking-wide transform transition-all duration-[600ms] delay-[500ms] ${currentSlide === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {slide.callout}
                </p>
                <div className="flex gap-4 pt-4 overflow-hidden">
                  <Link to="/contact" className={`px-6 py-3 bg-[#0D8BC5] border border-[#0D8BC5] hover:bg-[#0878AA] hover:border-[#0878AA] hover:shadow-[0_4px_12px_rgba(13,139,197,0.3)] text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-md transform transition-all duration-[600ms] delay-[600ms] ${currentSlide === idx ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                    {slide.btn1}
                  </Link>
                  <Link to="/products" className={`px-6 py-3 border-2 border-white bg-transparent hover:bg-white text-white hover:text-[#0878AA] font-bold text-xs uppercase tracking-wider rounded-sm transform transition-all duration-[600ms] delay-[700ms] ${currentSlide === idx ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                    {slide.btn2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Custom HUD Animations */}
        <style>{`
          @keyframes floatLogo {
            0%, 100% { transform: translateY(0) translateZ(0); }
            50% { transform: translateY(-5px) translateZ(0); }
          }
          @keyframes pulseOpacity {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes spinOuter {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(360deg) translateZ(0); }
          }
          @keyframes spinMiddle {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(-360deg) translateZ(0); }
          }
          @keyframes spinInner {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(360deg) translateZ(0); }
          }
          @keyframes hudEnter {
            from { opacity: 0; transform: scale(0.9) translateZ(0); }
            to { opacity: 1; transform: scale(1) translateZ(0); }
          }
          .logo-hud-enter {
            animation: hudEnter 900ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .logo-hud-container {
            animation: floatLogo 5s ease-in-out infinite;
            will-change: transform;
            filter: drop-shadow(0 0 6px rgba(13, 139, 197, 0.5)) drop-shadow(0 0 16px rgba(13, 139, 197, 0.3));
            transition: all 0.3s ease-in-out;
            cursor: pointer;
          }
          .logo-hud-container:hover {
            transform: scale(1.05) translateZ(0) !important;
            filter: drop-shadow(0 0 10px rgba(13, 139, 197, 0.7)) drop-shadow(0 0 25px rgba(13, 139, 197, 0.5));
          }
          .ring-outer {
            animation: spinOuter 24s linear infinite, pulseOpacity 4s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
          .ring-middle {
            animation: spinMiddle 16s linear infinite, pulseOpacity 3.5s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
          .ring-inner {
            animation: spinInner 30s linear infinite, pulseOpacity 4.5s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
        `}</style>

        {/* Animated HUD Logo at Top Right */}
        <div
          key={`hud-${currentSlide}`}
          className="absolute top-6 right-6 z-50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] logo-hud-enter"
        >
          <div className="relative w-full h-full logo-hud-container">
            <img src="/images/homePage/ImageAnimation/behind-logo.png" className="absolute inset-0 w-full h-full object-contain ring-outer" alt="" />
            <img src="/images/homePage/ImageAnimation/left%20to%20right.png" className="absolute inset-0 w-full h-full object-contain ring-middle" alt="" />
            <img src="/images/homePage/ImageAnimation/right%20to%20left.png" className="absolute inset-0 w-full h-full object-contain ring-inner" alt="" />
            <img src="/images/homePage/ImageAnimation/logo.png" className="absolute top-1/2 left-1/2 w-[45%] h-[45%] object-contain z-10" style={{ willChange: 'transform', transform: 'translate(-50%, -50%) translateZ(0)' }} alt="" />
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-accent w-8' : 'bg-white/40 hover:bg-white/80'
                }`}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Product Categories Grid (GEBO card style redesign) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-extrabold uppercase text-[#0D8BC5]"
            style={{ textShadow: '0 4px 12px rgba(13, 139, 197, 0.25)' }}
          >
            Our Products
          </h1>
          <div className="h-1 w-16 bg-accent mx-auto mt-2 rounded-full"></div>
          <p className="text-xs text-gray-500 mt-4 max-w mx-auto">
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
              {/* Optimized Responsive Product Image */}
              <img
                src={prod.img}
                alt={prod.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform transform-gpu z-0"
                loading="lazy"
                decoding="async"
              />
              {/* Brand Blue Hover Overlay */}
              <div className="absolute inset-0 bg-[#0D8BC5]/28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>

              {/* Hexagon Label */}
              <div className="absolute bottom-4 left-4 z-30">
                <div className="hexagon-tag bg-[#0D8BC5] text-white font-bold text-[10px] uppercase px-7 py-2 transition-colors duration-300 shadow-md">
                  {prod.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Premium Vision, Mission, & High Quality Section */}
      <section ref={engineeringSectionRef} className="py-24 bg-white relative overflow-hidden">
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(32px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">

            {/* Vision Card */}
            <EngineeringCard
              title="VISION"
              description="Uncompromising commitment to quality and engineering precision. We ensure every fastener complies with rigorous global certification standards."
              value="12+"
              subtitle="Years Experience"
              icon="icon-eye-open"
              delay={0}
              isVisible={isEngSectionVisible}
            />

            {/* Mission Card */}
            <EngineeringCard
              title="MISSION"
              description="Fostering long-term customer partnerships through technical expertise, exceptional client services, and flexible, customizable production runs."
              value="250+"
              subtitle="Happy Clients"
              icon="icon-fighter-jet"
              delay={0.15}
              isVisible={isEngSectionVisible}
            />

            {/* Quality Card */}
            <EngineeringCard
              title="HIGH QUALITY"
              description="Continuous optimization of our machining processes to guarantee high tensile strengths, corrosion-resistant platings, and long-term durability."
              value="100%"
              subtitle="Inspection Done"
              icon="icon-ok"
              delay={0.3}
              isVisible={isEngSectionVisible}
            />

          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section
        ref={aboutSectionRef}
        className="py-24 relative overflow-hidden bg-brand-dark"
      >
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 animate-[ping_60s_linear_infinite]"
          style={{
            backgroundImage: "url('/images/homePage/About%20Company/bg.jpg')",
            animation: 'slowBgZoom 30s alternate infinite ease-in-out'
          }}
        ></div>
        <style>{`
          @keyframes slowBgZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}</style>

        <div className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-[2px] z-0"></div>
        <div className="absolute inset-0 bg-black/40 z-0 mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Side: Image Showcase */}
            <div className="order-1 lg:order-1 relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[#0D8BC5]/30 group">
              {[1, 2, 3, 4].map((num, idx) => (
                <div
                  key={`about-slide-${idx}`}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${aboutSlide === idx
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0'
                    }`}
                >
                  <img
                    src={`/images/homePage/About%20Company/main${idx === 0 ? '' : idx + 1}.jpg`}
                    alt="Company Facility"
                    className="w-full h-full object-cover object-center md:object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform transform-gpu"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[20px] z-20 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_20px_rgba(13,139,197,0.3)] group-hover:border-[#0D8BC5]/50 border border-transparent"></div>
            </div>

            {/* Right Side: Professional Content */}
            <div className="order-2 lg:order-2 space-y-8 text-white">
              <div className="space-y-4">
                <span className={`inline-block text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em] transform transition-all duration-700 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  ABOUT HEX INDIA
                </span>
                <h2 className={`text-3xl md:text-5xl font-extrabold text-white leading-tight transition-all duration-700 delay-100 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Engineering Excellence.<br />
                  <span className="text-gray-300">Trusted Worldwide.</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className={`text-sm leading-relaxed text-gray-300 font-light transition-all duration-700 delay-200 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  HEX India Fasteners is a trusted manufacturer and exporter of premium industrial fasteners engineered for critical industrial applications. With years of manufacturing expertise, advanced production capabilities, and strict quality control, we deliver fastening solutions that meet international standards across energy, construction, petrochemical, marine, infrastructure, and heavy engineering industries.
                </p>
                <p className={`text-sm leading-relaxed text-gray-300 font-light transition-all duration-700 delay-300 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  From standard fasteners to fully customized manufacturing solutions, we combine engineering precision, innovation, and customer-focused service to provide reliable products that perform in the world's most demanding environments.
                </p>
              </div>

              {/* Feature Badges */}
              <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {['Premium Quality', 'Custom Manufacturing', 'Global Supply', 'ISO Standards'].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-[#0D8BC5]/10 hover:border-[#0D8BC5]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_4px_15px_rgba(13,139,197,0.2)]">
                    <div className="w-6 h-6 rounded-full bg-[#0D8BC5]/20 flex items-center justify-center text-[#0D8BC5]">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-100 tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className={`pt-4 transition-all duration-700 delay-500 ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Link to="/about-us" className="group relative inline-flex items-center px-8 py-4 bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-[#06425e] shadow-[0_4px_14px_rgba(13,139,197,0.4)]">
                  <span className="relative z-10 flex items-center">
                    Explore Company
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
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
            <h2 className="text-2xl font-extrabold uppercase tracking-wider text-[#0D8BC5]">
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
          <h1 className="text-lg md:text-xl font-bold text-white leading-relaxed">
            <h2 style={{ color: 'white' }}>Providing Precision-Build Fastening Solutions For Industrial Applications Worldwide.</h2>
          </h1>
          <div className="mt-8">
            <Link to="/about-us" className="px-8 py-3.5 bg-white text-[#0D8BC5] border border-white hover:bg-transparent hover:text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 inline-block shadow-md">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;
