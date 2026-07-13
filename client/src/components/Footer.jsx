import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-brand-dark text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Intro */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold text-white tracking-wider uppercase border-b-2 border-primary pb-2 w-max">
              HEX INDIA FASTENERS
            </h5>
            <p className="text-xs leading-relaxed text-justify text-gray-300">
              <span className="font-bold text-white">Hex India Fasteners</span> is one of the leading Exporters, Manufacturers & Stockists of high integrity fasteners. We provide premium fastening solutions in Stainless Steel, Duplex, Carbon Steel, Alloy Steel, and High Nickel alloys, serving quality-critical environments globally.
            </p>
          </div>

          {/* Social Icons & Logo */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/logo1-2.png" alt="Hex India Fasteners" className="h-10 object-contain" />
            </div>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-colors">
                <i className="icon-twitter text-lg"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-colors">
                <i className="icon-facebook text-lg"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Google Plus" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-colors">
                <i className="icon-google-plus text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold text-white tracking-wider uppercase border-b-2 border-primary pb-2 w-max">
              Contact Info
            </h5>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <i className="icon-map-marker text-primary text-sm mt-0.5"></i>
                <span>107/111, Matka Building, Office No. 4, Gr. Floor, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Mumbai – 400 004 Maharashtra, India.</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-phone text-primary"></i>
                <span>
                  <a href="tel:02266518841" className="hover:text-primary transition-colors">+91 22 6651 8841</a> / <a href="tel:02266363268" className="hover:text-primary transition-colors">22 6636 3268</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-envelope text-primary"></i>
                <a href="mailto:sales@hexindiafasteners.com" className="hover:text-primary transition-colors">sales@hexindiafasteners.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-globe text-primary"></i>
                <a href="http://hexindiafasteners.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.hexindiafasteners.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15093.452223730259!2d72.827307!3d18.959567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0a4490654a6349e!2sECO+STEEL+ENGINEERING!5e0!3m2!1sen!2sin!4v1507702132063" 
            width="100%" 
            height="320" 
            style={{ border: 0 }} 
            allowFullScreen 
            title="Location Map"
          ></iframe>
        </div>

        {/* Copyrights */}
        <div className="border-t border-gray-800 pt-8 text-center text-[11px] text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyrights © 2017 - {new Date().getFullYear()} <span className="text-white font-semibold">HEX INDIA FASTENERS</span> | All Rights Reserved</p>
          <p>
            Designed & Developed By <a href="http://www.nuwebwave.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Nuwebwave Technologies</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 w-11 h-11 bg-primary text-white hover:bg-accent rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 z-50 cursor-pointer"
          title="Scroll to Top"
        >
          <i className="icon-chevron-up text-lg"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;
