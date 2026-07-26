import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    securityCode: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [captchaUrl, setCaptchaUrl] = useState('/api/captcha');

  const refreshCaptcha = () => {
    setCaptchaUrl(`/api/captcha?t=${Date.now()}`);
    setFormData((prev) => ({ ...prev, securityCode: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim() || formData.name === 'Name') {
      tempErrors.name = 'Please enter your Name';
    }
    if (!formData.email.trim() || formData.email === 'Email Address') {
      tempErrors.email = 'Please enter your Email';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }
    if (!formData.phone.trim() || formData.phone === 'Phone No.') {
      tempErrors.phone = 'Please enter your Phone No.';
    } else if (isNaN(formData.phone)) {
      tempErrors.phone = 'Please enter a valid numeric phone number';
    } else if (formData.phone.length < 10 || formData.phone.length > 15) {
      tempErrors.phone = 'Phone number must be between 10-15 digits';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter your Message';
    }
    if (!formData.securityCode.trim() || formData.securityCode === 'Security Code') {
      tempErrors.securityCode = 'Please enter the Security Code';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message.');
      }
      
      setSubmitStatus('success');
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
      
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      setErrors({ form: err.message || 'Failed to send message. Please try again.' });
      refreshCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page bg-white text-gray-700 select-none">
      
      {/* Premium Dark Top Banner matching About.jsx */}
      <section className="relative h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        
        {/* Custom HUD Animations for Hero */}
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
          className="absolute top-6 right-6 z-50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] logo-hud-enter"
        >
          <div className="relative w-full h-full logo-hud-container">
            <img src="/images/homePage/ImageAnimation/behind-logo.png" className="absolute inset-0 w-full h-full object-contain ring-outer" alt="" />
            <img src="/images/homePage/ImageAnimation/left%20to%20right.png" className="absolute inset-0 w-full h-full object-contain ring-middle" alt="" />
            <img src="/images/homePage/ImageAnimation/right%20to%20left.png" className="absolute inset-0 w-full h-full object-contain ring-inner" alt="" />
            <img src="/images/homePage/ImageAnimation/logo.png" className="absolute top-1/2 left-1/2 w-[45%] h-[45%] object-contain z-10" style={{ willChange: 'transform', transform: 'translate(-50%, -50%) translateZ(0)' }} alt="" />
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src="/images/generated/contact_hero_1784917976666.png" alt="Contact Us Banner" className="w-full h-full object-cover object-[80%_center] md:object-[75%_center] lg:object-center" />
          
          {/* Gradient Overlay & Blur for clarity on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/60 via-black/40 md:via-black/20 to-transparent lg:to-transparent/10 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 55%)', maskImage: 'linear-gradient(to right, black 0%, transparent 55%)' }}></div>
        </motion.div>

        <div className="relative z-10 text-left px-4 max-w-7xl w-full mx-auto mt-20 group cursor-default">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(13,139,197,0.3)] hidden"
          >
            <i className="icon-envelope text-4xl text-[#0D8BC5]"></i>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase mb-6 group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Connect with our global operations and engineering teams for custom manufacturing solutions, material specifications, and international orders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-1 w-24 bg-[#0D8BC5] mt-8 origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Details (Left Side) */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full lg:w-5/12 space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h6 className="text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em]">Let's Connect</h6>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Global Operations & Headquarters
              </h2>
              <div className="h-1 w-20 bg-[#0D8BC5] rounded-full"></div>
              <p className="text-gray-600 font-medium leading-[1.8] text-base pt-2">
                Our sales and engineering teams are available to discuss custom blueprint machining, material specifications, and bulk international orders.
              </p>
            </motion.div>

            {/* Address Card */}
            <motion.a 
              variants={fadeUp}
              href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
              <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5] transition-transform duration-300 group-hover:scale-110">
                  <i className="icon-map-marker text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-wider mb-2 group-hover:text-[#0D8BC5] transition-colors">Main Branch</h4>
                  <p className="text-gray-600 leading-[1.8] font-medium">
                    Plot No. G4, Forsberry Rd, Sewri East,<br />
                    Mumbai, Maharashtra 400015,<br />
                    India.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Contact Details Card */}
            <motion.div 
              variants={fadeUp}
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
              <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5] transition-transform duration-300 group-hover:scale-110">
                  <i className="icon-phone text-2xl"></i>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-wider group-hover:text-[#0D8BC5] transition-colors">Contact Information</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600 font-medium">
                      <span className="text-gray-400 font-bold uppercase text-xs w-16">Phone:</span>
                      <a href="tel:+912235346200" className="hover:text-[#0D8BC5] transition-colors">+91 22 3534 6200</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 font-medium">
                      <span className="text-gray-400 font-bold uppercase text-xs w-16">Email:</span>
                      <a href="mailto:sales@hexindiafasteners.com" className="hover:text-[#0D8BC5] transition-colors break-all">sales@hexindiafasteners.com</a>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 font-medium">
                      <span className="text-gray-400 font-bold uppercase text-xs w-16">Web:</span>
                      <a href="http://www.hexindiafasteners.com" target="_blank" rel="noreferrer" className="hover:text-[#0D8BC5] transition-colors">www.hexindiafasteners.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0D8BC5]/5 to-transparent rounded-bl-[200px] pointer-events-none"></div>
              
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">Send an Inquiry</h3>
                <p className="text-gray-500 font-medium text-sm">Fill out the form below and our sales team will get back to you within 24 hours.</p>
              </div>

              {errors.form && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-bold flex items-center gap-2">
                  <i className="icon-warning-sign"></i>
                  {errors.form}
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-600 text-sm font-bold flex items-center gap-2">
                  <i className="icon-check"></i>
                  Message sent successfully! Redirecting...
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className={`icon-user ${errors.name ? 'text-red-400' : 'text-gray-400'}`}></i>
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0D8BC5] focus:ring-[#0D8BC5]/20'} rounded-xl text-gray-700 font-medium outline-none transition-all focus:ring-4`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.name && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-bold text-red-500 mt-1">{errors.name}</motion.p>}
                    </AnimatePresence>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className={`icon-envelope ${errors.email ? 'text-red-400' : 'text-gray-400'}`}></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0D8BC5] focus:ring-[#0D8BC5]/20'} rounded-xl text-gray-700 font-medium outline-none transition-all focus:ring-4`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.email && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-bold text-red-500 mt-1">{errors.email}</motion.p>}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className={`icon-phone ${errors.phone ? 'text-red-400' : 'text-gray-400'}`}></i>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0D8BC5] focus:ring-[#0D8BC5]/20'} rounded-xl text-gray-700 font-medium outline-none transition-all focus:ring-4`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.phone && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-bold text-red-500 mt-1">{errors.phone}</motion.p>}
                  </AnimatePresence>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Message <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your requirements, CAD specifications, or material needs..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-4 bg-gray-50 border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0D8BC5] focus:ring-[#0D8BC5]/20'} rounded-xl text-gray-700 font-medium outline-none transition-all focus:ring-4 resize-none`}
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-bold text-red-500 mt-1">{errors.message}</motion.p>}
                  </AnimatePresence>
                </div>

                {/* Security Code */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="shrink-0 p-2 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group">
                      <img
                        src={captchaUrl}
                        alt="Security Code Captcha"
                        className="h-12 w-32 object-contain bg-white mix-blend-multiply"
                      />
                      <button 
                        type="button"
                        onClick={refreshCaptcha}
                        className="absolute inset-0 bg-[#0a192f]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        title="Click to refresh security code"
                      >
                        <i className="icon-refresh text-xl"></i>
                      </button>
                    </div>
                    
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="text"
                        id="securityCode"
                        name="securityCode"
                        placeholder="Enter the code shown left"
                        value={formData.securityCode}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 bg-gray-50 border ${errors.securityCode ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0D8BC5] focus:ring-[#0D8BC5]/20'} rounded-xl text-gray-700 font-medium outline-none transition-all focus:ring-4`}
                      />
                      <AnimatePresence>
                        {errors.securityCode && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs font-bold text-red-500 mt-1">{errors.securityCode}</motion.p>}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-[#0D8BC5] hover:bg-[#0a192f] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_10px_25px_rgba(13,139,197,0.3)] hover:shadow-[0_15px_30px_rgba(10,25,47,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-3 mt-4"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending Message...' : 'Send Inquiry'}</span>
                  {!isSubmitting && <i className="icon-angle-right text-lg relative z-10 transition-transform duration-300 group-hover:translate-x-1"></i>}
                  
                  {/* Button shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
