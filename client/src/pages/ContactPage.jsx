import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Turnstile } from '@marsidev/react-turnstile';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Building, MessageSquare, Send, CheckCircle, Clock, MapPin, Globe } from 'lucide-react';
import { useEnquiryForm } from '../hooks/useEnquiryForm';


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
  const {
    isSuccess,
    setIsSuccess,
    referenceId,
    turnstileSiteKey,
    formMethods,
    onSubmit
  } = useEnquiryForm();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = formMethods;

  return (
    <div className="contact-page bg-white text-gray-700 select-none">
      <Toaster position="top-right" />
      {/* Premium Dark Top Banner matching About.jsx and Products.jsx */}
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
            filter: drop-shadow(0 0 6px rgba(13, 139, 197, 0.2)) drop-shadow(0 0 16px rgba(13, 139, 197, 0.1));
            transition: all 0.3s ease-in-out;
          }
          .logo-hud-container:hover { transform: scale(1.05) translateZ(0) !important; }
          .logo-hud-container:hover .glow-ring { filter: drop-shadow(0 0 10px rgba(13, 139, 197, 0.3)) drop-shadow(0 0 25px rgba(13, 139, 197, 0.2)); }
          
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
        <div className="absolute top-6 right-6 z-50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] logo-hud-enter">
          <div className="relative w-full h-full logo-hud-container">
            <img src="/images/homePage/ImageAnimation/behind-logo.png" className="absolute inset-0 w-full h-full object-contain ring-outer glow-ring" alt="" />
            <img src="/images/homePage/ImageAnimation/left%20to%20right.png" className="absolute inset-0 w-full h-full object-contain ring-middle glow-ring" alt="" />
            <img src="/images/homePage/ImageAnimation/right%20to%20left.png" className="absolute inset-0 w-full h-full object-contain ring-inner glow-ring" alt="" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/60 via-black/40 md:via-black/20 to-transparent lg:to-transparent/10 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 55%)', maskImage: 'linear-gradient(to right, black 0%, transparent 55%)' }}></div>
        </motion.div>

        <div className="relative z-10 text-left px-4 max-w-7xl w-full mx-auto mt-20 group cursor-default">
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
            Connect with our global operations and engineering teams for custom manufacturing solutions.
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
            className="w-full lg:w-4/12 space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h6 className="text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em]">Let's Connect</h6>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Global Headquarters</h2>
              <div className="h-1 w-20 bg-[#0D8BC5] rounded-full"></div>
            </motion.div>

            <motion.a 
              variants={fadeUp}
              href="https://maps.app.goo.gl/ZrMkbSf1CoCujsF67" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(13,139,197,0.12)] transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
              <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5] group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900 uppercase group-hover:text-[#0D8BC5] transition-colors">Main Branch</h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Plot No. G4, Forsberry Rd, Sewri East,<br />
                    Mumbai, Maharashtra 400015,<br />India.
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.div 
              variants={fadeUp}
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(13,139,197,0.12)] transition-all relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
              <div className="relative z-10 flex gap-6">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="space-y-4 w-full">
                  <h4 className="text-lg font-extrabold text-gray-900 uppercase group-hover:text-[#0D8BC5] transition-colors">Contact Info</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-gray-400 font-bold uppercase text-xs flex items-center gap-2"><Phone size={14}/> Phone</span>
                      <a href="tel:+912235346200" className="text-gray-700 font-medium hover:text-[#0D8BC5] transition-colors">+91 22 3534 6200</a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-gray-400 font-bold uppercase text-xs flex items-center gap-2"><Mail size={14}/> Email</span>
                      <a href="mailto:sales@hexindiafasteners.com" className="text-gray-700 font-medium hover:text-[#0D8BC5] transition-colors">sales@hexindiafasteners.com</a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-gray-400 font-bold uppercase text-xs flex items-center gap-2"><Globe size={14}/> Website</span>
                      <a href="http://www.hexindiafasteners.com" target="_blank" rel="noreferrer" className="text-gray-700 font-medium hover:text-[#0D8BC5] transition-colors">hexindiafasteners.com</a>
                    </li>
                    <li className="flex justify-between items-center pt-1">
                      <span className="text-gray-400 font-bold uppercase text-xs flex items-center gap-2"><Clock size={14}/> Hours</span>
                      <span className="text-gray-700 font-medium">Mon-Sat, 9AM-6PM</span>
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
            transition={{ duration: 0.6 }}
            className="w-full lg:w-8/12"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900">Thank you for contacting HEX INDIA.</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We have successfully received your enquiry. Our team will review your message and get back to you shortly.
                  </p>
                  <div className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 w-full max-w-sm">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Your Reference ID</p>
                    <p className="text-xl font-mono font-bold text-[#0D8BC5]">{referenceId}</p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#0D8BC5] font-bold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">Send an Enquiry</h3>
                    <p className="text-gray-500 font-medium text-sm">Please provide your details below and our sales team will respond promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase">Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input
                            {...register('name')}
                            className={`w-full !pl-12 !pr-4 !py-3 bg-gray-50 border ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#0D8BC5]'} rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 placeholder-gray-400`}
                            placeholder="Full Name"
                          />
                        </div>
                        {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name.message}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase">Email <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input
                            {...register('email')}
                            className={`w-full !pl-12 !pr-4 !py-3 bg-gray-50 border ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#0D8BC5]'} rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 placeholder-gray-400`}
                            placeholder="Email Address"
                          />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email.message}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase">Phone <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input
                            {...register('phone')}
                            className={`w-full !pl-12 !pr-4 !py-3 bg-gray-50 border ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-[#0D8BC5]'} rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 placeholder-gray-400`}
                            placeholder="Phone Number"
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
                      </div>

                      {/* Company */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700 uppercase">Company</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input
                            {...register('company')}
                            className="w-full !pl-12 !pr-4 !py-3 bg-gray-50 border border-gray-200 focus:border-[#0D8BC5] rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 placeholder-gray-400"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase">Subject</label>
                      <input
                        {...register('subject')}
                        className="w-full !px-4 !py-3 bg-gray-50 border border-gray-200 focus:border-[#0D8BC5] rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 placeholder-gray-400"
                        placeholder="Enquiry Subject"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase">Message <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                        <textarea
                          {...register('message')}
                          rows={4}
                          className={`w-full !pl-12 !pr-4 !py-3 bg-gray-50 border ${errors.message ? 'border-red-400' : 'border-gray-200 focus:border-[#0D8BC5]'} rounded-xl outline-none focus:ring-4 focus:ring-[#0D8BC5]/10 resize-none placeholder-gray-400`}
                          placeholder="Your requirements..."
                        />
                      </div>
                      {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message.message}</p>}
                    </div>

                    {/* Turnstile Captcha */}
                    {turnstileSiteKey && (
                      <div className="pt-4 pb-2 flex justify-center lg:justify-start w-full">
                        <div className="min-h-[65px] relative">
                          <Turnstile 
                            siteKey={turnstileSiteKey}
                            onSuccess={(token) => setValue('turnstileToken', token, { shouldValidate: true })}
                            onError={() => setValue('turnstileToken', '')}
                            onExpire={() => setValue('turnstileToken', '')}
                            options={{
                              theme: 'light',
                            }}
                          />
                          <AnimatePresence>
                            {errors.turnstileToken && (
                              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-xs text-red-500 font-semibold absolute -bottom-5 left-0">
                                {errors.turnstileToken.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0D8BC5] hover:bg-[#0a192f] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
