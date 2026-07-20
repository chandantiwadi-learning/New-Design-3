import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-white relative overflow-hidden border-t border-gray-100">
      <div className={`relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

        {/* Top CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-10 md:p-14 border border-[#1E88E5]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-[0_20px_40px_rgba(30,136,229,0.08)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E88E5]/0 via-[#1E88E5]/5 to-[#1E88E5]/0 -translate-x-[150%] skew-x-[-15deg] group-hover:animate-[shine-sweep_1.5s_ease-in-out]"></div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Let's Build <span className="text-[#1E88E5]">Strong Connections</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">Discuss your engineering projects with our experts or request custom manufacturing for high-integrity fasteners.</p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a href="mailto:sales@hexindiafasteners.com" className="px-8 py-4 bg-[#1E88E5] hover:bg-[#1565C0] text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(30,136,229,0.39)] hover:shadow-[0_6px_20px_rgba(30,136,229,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="icon-envelope text-lg"></i> Request a Quote
              </a>
              <a href="tel:+912235346200" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#1E88E5] border-2 border-[#1E88E5]/20 hover:border-[#1E88E5] rounded-xl font-bold tracking-wide transition-all duration-300 shadow-sm hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="icon-phone text-lg"></i> Call Us
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Column 1: Company Overview */}
            <div className="flex flex-col space-y-6 lg:col-span-3">
              <div className="flex items-center h-12 w-max">
                <img src="/images/homePage/ImageAnimation/logo.png" alt="Hex India Fasteners" className="h-12 object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-gray-600 font-medium">
                Premium manufacturers and stockists of high integrity fasteners for quality-critical environments globally.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#1E88E5]">12+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Years Exp.</span>
                </div>
                <div className="w-[1px] bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#1E88E5]">250+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Clients</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-6 lg:col-span-2">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#1E88E5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
                <h5 className="text-sm font-bold text-gray-900 tracking-widest uppercase m-0 leading-none pt-0.5">Quick Links</h5>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Products', path: '/products' },
                  { name: 'Material', path: '/material' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="text-gray-600 hover:text-[#1E88E5] text-sm font-medium flex items-center gap-2 group transition-colors inline-flex w-max">
                      <i className="icon-angle-right text-[#1E88E5]/50 group-hover:text-[#1E88E5] group-hover:translate-x-1 transition-all"></i> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col space-y-6 lg:col-span-4">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#1E88E5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
                <h5 className="text-sm font-bold text-gray-900 tracking-widest uppercase m-0 leading-none pt-0.5">Contact Info</h5>
              </div>
              <div className="space-y-3 w-full">
                <a href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#1E88E5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#1E88E5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-map-marker text-[#1E88E5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-[#1E88E5] transition-colors">
                    Plot No. G4, Forsberry Rd, Sewri East, Mumbai, Maharashtra-400015, India.
                  </span>
                </a>
                <a href="tel:+912235346200" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#1E88E5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#1E88E5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-phone text-[#1E88E5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium group-hover:text-[#1E88E5] transition-colors">
                    +91 22 3534 6200
                  </span>
                </a>
                <a href="mailto:sales@hexindiafasteners.com" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#1E88E5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#1E88E5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-envelope text-[#1E88E5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium group-hover:text-[#1E88E5] transition-colors break-words">
                    sales@hexindiafasteners.com
                  </span>
                </a>
              </div>
            </div>

            {/* Column 4: WhatsApp / Brochure */}
            <div className="flex flex-col space-y-6 lg:col-span-3">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#1E88E5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
                <h5 className="text-sm font-bold text-gray-900 tracking-widest uppercase m-0 leading-none pt-0.5">Connect & Download</h5>
              </div>
              <div className="bg-gradient-to-br from-[#1E88E5]/5 to-[#1E88E5]/10 p-6 rounded-[16px] border border-[#1E88E5]/20 flex flex-col items-center justify-center text-center group hover:shadow-[0_8px_24px_rgba(30,136,229,0.12)] transition-all">
                <div className="w-16 h-16 bg-white p-2 rounded-xl shadow-sm mb-4 border border-gray-100 group-hover:scale-105 transition-transform">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hexindiafasteners.com" alt="QR Code" className="w-full h-full opacity-80" />
                </div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Scan to Visit Website</p>
                <a href="#" className="w-full py-2.5 bg-white border border-[#1E88E5]/30 rounded-lg text-[#1E88E5] text-xs font-bold hover:bg-[#1E88E5] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <i className="icon-download-alt"></i> Corporate Brochure
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Google Map Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="w-full h-[300px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-4 border-white ring-1 ring-gray-100 hover:ring-[#1E88E5]/30 transition-all duration-300 relative bg-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.802188164344!2d72.8508902148972!3d18.989516087130456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce160773bc7d%3A0x3c8bbc1bad985f97!2sHEX+INDIA!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
              className="grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div >

      {/* Bottom Footer Navy Strip */}
      < div className="bg-[#0F172A] border-t border-[#1E293B]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <div className="text-gray-400 text-xs font-medium tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">HEX INDIA FASTENERS</span>. All Rights Reserved.<br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Designed by <a href="https://chandan-tiwadi.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-[#1E88E5] hover:text-white transition-colors">Chandan Tiwadi</a>
          </div>

          {/* Center Links & Badges */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-xs font-medium text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>

            <div className="h-4 w-[1px] bg-gray-600 hidden sm:block"></div>

            <div className="hidden sm:flex items-center gap-3">
              <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">ISO 9001:2015</span>
              <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">Make in India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: 'icon-twitter', label: 'Twitter' },
              { icon: 'icon-facebook', label: 'Facebook' },
              { icon: 'icon-linkedin', label: 'LinkedIn' },
            ].map((social, idx) => (
              <a key={idx} href="#" aria-label={social.label} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1E88E5] hover:text-white hover:border-[#1E88E5] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>

        </div>
      </div >
    </footer >
  );
};

export default Footer;
