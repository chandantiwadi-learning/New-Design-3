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
    <footer className="bg-white text-[#4B5563] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Intro */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold text-[#1F2937] tracking-wider uppercase border-b-2 border-[#0D8BC5] pb-2 w-max">
              HEX INDIA FASTENERS
            </h5>
            <p className="text-xs leading-relaxed text-justify text-[#4B5563]">
              <span className="font-bold text-[#1F2937]">Hex India Fasteners</span> is one of the leading Exporters, Manufacturers & Stockists of high integrity fasteners. We provide premium fastening solutions in Stainless Steel, Duplex, Carbon Steel, Alloy Steel, and High Nickel alloys, serving quality-critical environments globally.
            </p>
          </div>

          {/* Social Icons & Logo */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg shadow-sm">
              <img src="\images\Hex India Logo Final.png" alt="Hex India Fasteners" className="h-10 object-contain" />
            </div>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0D8BC5] text-[#4B5563] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <i className="icon-twitter text-lg"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0D8BC5] text-[#4B5563] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <i className="icon-facebook text-lg"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Google Plus" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0D8BC5] text-[#4B5563] hover:text-white flex items-center justify-center transition-colors shadow-sm">
                <i className="icon-google-plus text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-sm font-bold text-[#1F2937] tracking-wider uppercase border-b-2 border-[#0D8BC5] pb-2 w-max">
              Contact Info
            </h5>
            <ul className="space-y-3 text-xs text-[#4B5563]">
              <li className="flex items-start">
                <a
                  href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group cursor-pointer"
                >
                  <i className="icon-map-marker text-[#0D8BC5] text-sm mt-0.5 transition-colors duration-200"></i>
                  <span className="leading-relaxed text-[#4B5563] group-hover:text-[#0D8BC5] transition-colors duration-200">
                    107/111, Matka Building, Office No. 4, Ground Floor, Dr. M. G. Mahimtura Marg, 3rd Kumbharwada, Mumbai – 400 004, Maharashtra, India
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-phone text-[#0D8BC5]"></i>
                <span>
                  <a href="tel:02266518841" className="text-[#0D8BC5] hover:text-[#0878AA] font-medium transition-colors">+91 22 6651 8841</a> / <a href="tel:02266363268" className="text-[#0D8BC5] hover:text-[#0878AA] font-medium transition-colors">22 6636 3268</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-envelope text-[#0D8BC5]"></i>
                <a href="mailto:sales@hexindiafasteners.com" className="text-[#0D8BC5] hover:text-[#0878AA] font-medium transition-colors">sales@hexindiafasteners.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="icon-globe text-[#0D8BC5]"></i>
                <a href="http://hexindiafasteners.com" target="_blank" rel="noopener noreferrer" className="text-[#0D8BC5] hover:text-[#0878AA] font-medium transition-colors">www.hexindiafasteners.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.802188164344!2d72.8508902148972!3d18.989516087130456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce160773bc7d%3A0x3c8bbc1bad985f97!2sHEX+INDIA!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            title="Location Map"
          ></iframe>
        </div>

        {/* Copyrights */}
        <div className="border-t border-gray-200 pt-8 text-center text-[11px] text-[#4B5563] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyrights © 2017 - {new Date().getFullYear()} <span className="text-[#1F2937] font-semibold">HEX INDIA FASTENERS</span> | All Rights Reserved</p>
          <p className="text-[#4B5563] font-medium">
            Designed & Developed by <a href="https://chandan-tiwadi.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-[#0D8BC5] hover:text-[#0878AA] hover:underline font-semibold transition-colors duration-200">Chandan Tiwadi</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-11 h-11 bg-themeBlue text-white hover:bg-[#0878AA] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(13,139,197,0.30)] hover:shadow-[0_6px_20px_rgba(13,139,197,0.40)] transition-all duration-200 transform hover:-translate-y-[2px] z-50 cursor-pointer border-none outline-none"
          title="Scroll to Top"
        >
          <i className="icon-chevron-up text-lg text-white"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;
