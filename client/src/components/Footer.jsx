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
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-10 md:p-14 border border-[#0D8BC5]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-[0_20px_40px_rgba(30,136,229,0.08)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D8BC5]/0 via-[#0D8BC5]/5 to-[#0D8BC5]/0 -translate-x-[150%] skew-x-[-15deg] group-hover:animate-[shine-sweep_1.5s_ease-in-out]"></div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Let's Build <span className="text-[#0D8BC5]">Strong Connections</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">Discuss your engineering projects with our experts or request custom manufacturing for high-integrity fasteners.</p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a href="mailto:sales@hexindiafasteners.com" className="px-8 py-4 bg-[#0D8BC5] hover:bg-[#1565C0] text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(30,136,229,0.39)] hover:shadow-[0_6px_20px_rgba(30,136,229,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <i className="icon-envelope text-lg"></i> Request a Quote
              </a>
              <a href="tel:+912235346200" className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0D8BC5] border-2 border-[#0D8BC5]/20 hover:border-[#0D8BC5] rounded-xl font-bold tracking-wide transition-all duration-300 shadow-sm hover:-translate-y-1 flex items-center justify-center gap-2">
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
                  <span className="text-2xl font-black text-[#0D8BC5]">12+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Years Exp.</span>
                </div>
                <div className="w-[1px] bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#0D8BC5]">250+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Clients</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-6 lg:col-span-2">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#0D8BC5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
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
                    <Link to={link.path} className="text-gray-600 hover:text-[#0D8BC5] text-sm font-medium flex items-center gap-2 group transition-colors inline-flex w-max">
                      <i className="icon-angle-right text-[#0D8BC5]/50 group-hover:text-[#0D8BC5] group-hover:translate-x-1 transition-all"></i> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col space-y-6 lg:col-span-4">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#0D8BC5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
                <h5 className="text-sm font-bold text-gray-900 tracking-widest uppercase m-0 leading-none pt-0.5">Contact Info</h5>
              </div>
              <div className="space-y-3 w-full">
                <a href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#0D8BC5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#0D8BC5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-map-marker text-[#0D8BC5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-[#0D8BC5] transition-colors">
                    Plot No. G4, Forsberry Rd, Sewri East, Mumbai, Maharashtra-400015, India.
                  </span>
                </a>
                <a href="tel:+912235346200" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#0D8BC5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#0D8BC5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-phone text-[#0D8BC5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium group-hover:text-[#0D8BC5] transition-colors">
                    +91 22 3534 6200
                  </span>
                </a>
                <a href="mailto:sales@hexindiafasteners.com" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#0D8BC5]/30 hover:shadow-[0_4px_20px_rgba(30,136,229,0.08)] transition-all group w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#0D8BC5]/50 group-hover:rotate-6 transition-all">
                    <i className="icon-envelope text-[#0D8BC5] text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium group-hover:text-[#0D8BC5] transition-colors break-words">
                    sales@hexindiafasteners.com
                  </span>
                </a>
              </div>
            </div>

            {/* Column 4: WhatsApp / Brochure */}
            <div className="flex flex-col space-y-6 lg:col-span-3">
              <div className="flex items-center gap-3 h-12">
                <svg viewBox="0 0 100 100" className="w-4 h-4 shrink-0 text-[#0D8BC5]"><polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="currentColor" /></svg>
                <h5 className="text-sm font-bold text-gray-900 tracking-widest uppercase m-0 leading-none pt-0.5">Connect & Download</h5>
              </div>
              <div className="bg-gradient-to-br from-[#25D366]/5 to-[#25D366]/10 p-6 rounded-[16px] border border-[#25D366]/20 flex flex-col items-center justify-center text-center group hover:shadow-[0_8px_24px_rgba(37,211,102,0.12)] transition-all">
                <div className="w-16 h-16 bg-[#25D366] text-white p-3.5 rounded-2xl shadow-sm mb-4 group-hover:scale-105 group-hover:rotate-6 transition-all flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                </div>
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 leading-tight">(click here to chat on WhatsApp)</p>
                <a href="https://api.whatsapp.com/send?phone=912235346200&text=Hello%20HEX%20INDIA%20Fasteners%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20products%20and%20services.%20Please%20share%20more%20information%20with%20me." target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-[#25D366] border border-[#25D366] rounded-lg text-white text-xs font-bold hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-2 shadow-sm mb-2">
                  Chat Now
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Google Map Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="w-full h-[300px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-4 border-white ring-1 ring-gray-100 hover:ring-[#0D8BC5]/30 transition-all duration-300 relative bg-gray-50">
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
      < div className="bg-[#0D8BC5] border-t border-[#086a98]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <div className="text-gray-400 text-xs font-medium tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">HEX INDIA FASTENERS</span>. All Rights Reserved.<br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Designed by <a href="https://chandan-tiwadi.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">Chandan Tiwadi</a>
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
              <a key={idx} href="#" aria-label={social.label} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0D8BC5] hover:text-white hover:border-[#0D8BC5] hover:-translate-y-1 transition-all duration-300 shadow-sm">
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
