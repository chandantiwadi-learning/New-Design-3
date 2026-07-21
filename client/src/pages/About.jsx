import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

// --- Reusable Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Highlight Text Component ---
const Highlight = ({ children }) => (
  <span className="relative inline-block group cursor-default font-semibold text-[#0b709e] transition-colors duration-300">
    {children}
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0D8BC5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </span>
);

// --- Advanced Counter Component ---
const AnimatedCounter = ({ from = 0, to, suffix = "", title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(ease * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} className="text-center relative z-10">
      <motion.div
        className="text-5xl md:text-6xl font-extrabold text-[#0D8BC5] mb-2 drop-shadow-[0_0_15px_rgba(13,139,197,0.3)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {displayValue}{suffix}
      </motion.div>
      <div className="text-sm uppercase tracking-widest text-gray-300 font-medium">
        {title}
      </div>
    </div>
  );
};

// --- Mouse Parallax Card ---
const ParallaxCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 20; // max rotation 10deg
    const yPct = (mouseYPos / height - 0.5) * -20;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX: mouseY, rotateY: mouseX, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// --- Section Heading ---
const SectionHeading = ({ subtitle, title, light = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-16 md:mb-20 text-center relative z-10"
    >
      <span className={`inline-block font-bold text-xs uppercase tracking-[0.2em] mb-4 ${light ? 'text-[#0D8BC5]' : 'text-[#0D8BC5]'}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-24 mx-auto mt-8 ${light ? 'bg-white/20' : 'bg-[#0D8BC5]'}`}></div>
    </motion.div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const timelineScaleY = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const clientLogos = [
    '/images/our clients/our_client_logo_01.png', '/images/our clients/our_client_logo_02.png',
    '/images/our clients/our_client_logo_03.png', '/images/our clients/our_client_logo_04.png',
    '/images/our clients/our_client_logo_05.png', '/images/our clients/our_client_logo_06.png',
    '/images/our clients/our_client_logo_07.png', '/images/our clients/our_client_logo_08.png',
    '/images/our clients/our_client_logo_09.png'
  ];
  // Duplicate for infinite scroll
  const infiniteLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="about-page bg-[#f9fafd] overflow-hidden relative">

      {/* --- Sidebar Client Logos (Floating) --- REMOVED AS IT WAS MOVED TO FULL WIDTH SECTION */}      {/* 1. Hero Banner */}
      <section className="relative h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src="/images/parallax_bg_04.png" alt="Industrial Fasteners" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-left px-4 max-w-7xl w-full mx-auto mt-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            About Hex India
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Providing Precision-Build Fastening Solutions For Industrial Applications Worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-1 w-24 bg-[#0D8BC5] mt-8 origin-left"
          ></motion.div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0D8BC5]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Animated 3D Logo Presentation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeft}
            className="relative w-full h-[500px] flex flex-col items-center justify-center group [perspective:1200px]"
          >
            <style>{`
              @keyframes floatY {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes floatRotate {
                0%, 100% { transform: rotateY(-8deg) rotateX(-2deg); }
                50% { transform: rotateY(8deg) rotateX(2deg); }
              }
              @keyframes pulseGlow {
                0%, 100% { filter: drop-shadow(0 0 10px rgba(13,139,197,0.1)); }
                50% { filter: drop-shadow(0 0 25px rgba(13,139,197,0.3)); }
              }
              @keyframes shadowPulse {
                0%, 100% { transform: scale(1); opacity: 0.25; }
                50% { transform: scale(0.85); opacity: 0.15; }
              }
              @keyframes autoSweep {
                0%, 15% { left: -100%; opacity: 0; }
                16% { left: -100%; opacity: 1; }
                30% { left: 200%; opacity: 1; }
                31%, 100% { left: 200%; opacity: 0; }
              }
              @keyframes hoverSweep {
                0% { left: -100%; opacity: 1; }
                100% { left: 200%; opacity: 1; }
              }
              @keyframes spinSlow {
                100% { transform: rotate(360deg); }
              }
              @keyframes spinSlowRev {
                100% { transform: rotate(-360deg); }
              }

            `}</style>



            {/* Background Hexagons (Large, outlined, low opacity) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-[85%] max-w-[380px] absolute opacity-[0.03] text-[#0D8BC5]" style={{ animation: 'spinSlow 60s linear infinite' }}>
                <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg viewBox="0 0 100 100" className="w-[70%] max-w-[300px] absolute opacity-[0.04] text-[#0D8BC5]" style={{ animation: 'spinSlowRev 45s linear infinite' }}>
                <polygon points="50 3, 91 25, 91 75, 50 97, 9 75, 9 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Engineering rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] border border-[#0D8BC5]/10 rounded-full border-dashed" style={{ animation: 'spinSlow 35s linear infinite' }}></div>
              <div className="w-[360px] h-[360px] border border-[#0D8BC5]/5 rounded-full absolute" style={{ animation: 'spinSlowRev 40s linear infinite' }}>
                {/* Orbiting dots */}
                <div className="w-1.5 h-1.5 bg-[#0D8BC5]/50 rounded-full absolute -top-[3px] left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(13,139,197,0.6)]"></div>
                <div className="w-1 h-1 bg-[#0D8BC5]/40 rounded-full absolute -bottom-[2px] left-1/4 shadow-[0_0_5px_rgba(13,139,197,0.5)]"></div>
              </div>
            </div>

            {/* Expand/Contract Shadow beneath logo */}
            <div
              className="absolute bottom-[12%] w-[180px] h-[12px] bg-black/20 blur-md rounded-[50%]"
              style={{ animation: 'shadowPulse 5s ease-in-out infinite' }}
            ></div>

            {/* 3D Floating Logo Layers */}
            <div className="relative z-10 w-full max-w-[340px] flex items-center justify-center" style={{ animation: 'floatY 5s ease-in-out infinite' }}>
              <div className="relative w-full flex items-center justify-center [transform-style:preserve-3d]" style={{ animation: 'floatRotate 9s ease-in-out infinite' }}>
                <div className="relative w-full flex items-center justify-center" style={{ animation: 'pulseGlow 4s ease-in-out infinite' }}>

                  {/* Hover Interaction Wrapper */}
                  <div className="relative w-[90%] flex items-center justify-center transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:[transform:rotateY(10deg)_rotateX(4deg)] group-hover:[filter:drop-shadow(0_0_40px_rgba(13,139,197,0.4))]">

                    {/* The Logo Mask */}
                    <div className="relative w-full overflow-hidden flex items-center justify-center p-4">
                      <img
                        src="/images/about us/logo.png"
                        alt="HEX India Engineering Emblem"
                        className="w-full h-auto object-contain transform-gpu"
                      />

                      {/* Idle Light Sweep (Runs every 6s) */}
                      <div
                        className="absolute top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] mix-blend-overlay pointer-events-none group-hover:hidden"
                        style={{ animation: 'autoSweep 6s ease-in-out infinite' }}
                      ></div>

                      {/* Hover Light Sweep (Runs once on hover) */}
                      <div className="absolute top-0 bottom-0 w-[60%] left-[-100%] bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-25deg] mix-blend-overlay pointer-events-none hidden group-hover:block group-hover:animate-[hoverSweep_1s_ease-out_forwards]"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRight}
          >
            <span className="text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#0D8BC5]"></span>
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Engineering <span className="text-[#0D8BC5]">Strong Connections</span> Since Inception
            </h2>
            <div className="space-y-6 text-gray-600 font-medium leading-[1.9] text-lg max-w-[700px]">
              <p>
                Hex India Fasteners is one of the prominent Exporter, Manufacturer & Stockist of <Highlight>Stainless Steel</Highlight>, Inconel, Monel, Hastelloy, Titanium, Nickel & Nickel alloys, and all types of other premium grade steel.
              </p>
              <p>
                We specialize in <Highlight>manufacturing</Highlight> and exporting various types of <Highlight>industrial fasteners</Highlight> of Ferrous and Non-Ferrous Metals. Having established ourselves in the heart of India's commercial center, Mumbai, we have built up adequate stock levels of all essential items within our scope of supply and are positioned to offer immediate deliveries globally.
              </p>
            </div>
            <div className="mt-12">
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center p-[2px] overflow-hidden font-bold text-sm uppercase tracking-wider"
                style={{ clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)' }}
              >
                {/* The blue border simulation via parent background */}
                <span className="absolute inset-0 w-full h-full bg-[#0D8BC5]"></span>

                {/* Inner button surface (transparent to the page background) */}
                <span
                  className="relative flex items-center justify-center px-10 py-4 w-full h-full bg-[#f9fafd] group-hover:shadow-[0_4px_15px_rgba(13,139,197,0.3)] transition-all duration-300"
                  style={{ clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)' }}
                >
                  {/* The hover fill animation - EXACTLY as requested */}
                  <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full bg-[#0D8BC5] group-hover:translate-x-0"></span>

                  {/* Subtle metallic sweep on hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>

                  <span className="relative flex items-center gap-3 text-[#0D8BC5] group-hover:text-white transition-colors duration-300">
                    Explore Our Products
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100 absolute -right-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Legacy (Interactive Timeline) */}
      <section className="py-24 md:py-32 bg-[#f9fafd] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading subtitle="Our Legacy" title="A Journey of Excellence" />

          <div className="relative mt-20">
            {/* Animated Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0D8BC5] to-[#0878AA] -translate-x-1/2 hidden md:block origin-top"
              style={{ scaleY: timelineScaleY }}
            ></motion.div>

            <div className="space-y-24">
              {[
                { year: 'Experience', title: 'Decades of Mastery', desc: 'Over two decades of continuous innovation and refining our manufacturing processes to meet global industrial demands.', img: '/images/slider3.jpg' },
                { year: 'Excellence', title: 'Uncompromising Quality', desc: 'Zero-defect manufacturing policies backed by rigorous testing, international certifications, and advanced metallurgy.', img: '/images/home_img_20.jpg' },
                { year: 'Trust', title: 'Global Recognition', desc: 'A vast portfolio of satisfied Fortune 500 clients across multiple continents relying on our fastening solutions.', img: '/images/slider1.jpg' },
              ].map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-150px" }}
                    variants={isEven ? fadeRight : fadeLeft}
                    className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Center Node */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-200 z-10 items-center justify-center transition-all duration-500 hover:border-[#0D8BC5] hover:shadow-[0_0_20px_rgba(13,139,197,0.5)] group cursor-default">
                      <div className="w-6 h-6 rounded-full bg-gray-300 group-hover:bg-[#0D8BC5] transition-colors duration-500 group-hover:animate-ping absolute opacity-50"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 group-hover:bg-[#0D8BC5] transition-colors duration-500 relative z-20"></div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#0D8BC5]/30 transition-all duration-500 group relative overflow-hidden ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#0D8BC5] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0D8BC5] transition-colors">{item.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Image Card */}
                    <div className="w-full md:w-[45%] h-[250px] mt-8 md:mt-0 rounded-2xl overflow-hidden shadow-lg relative group">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose HEX INDIA (Premium Feature Cards) */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0D8BC5 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading subtitle="The Hex Advantage" title="Why Choose Hex India" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: 'icon_quality.png', title: 'Premium Quality', desc: 'Manufactured strictly to international standards using top-grade raw materials.' },
              { icon: 'icon_globe.png', title: 'Global Standards', desc: 'Compliance with DIN, ISO, ASTM, and BS specifications for global acceptance.' },
              { icon: 'icon_delivery.png', title: 'On-Time Delivery', desc: 'Strategic inventory management ensures fast processing and dispatch.' },
              { icon: 'icon_manufacturing.png', title: 'Custom Manufacturing', desc: 'Tailored fastening solutions engineered for specialized industrial needs.' },
              { icon: 'icon_team.png', title: 'Expert Team', desc: 'Highly qualified engineers and technicians driving manufacturing excellence.' },
              { icon: 'icon_clients.png', title: 'Trusted Clients', desc: 'A long legacy of serving Fortune 500 companies across diverse sectors.' },
            ].map((feature, idx) => (
              <ParallaxCard key={idx}>
                <motion.div
                  variants={fadeUp}
                  className="group h-full p-10 bg-white/40 backdrop-blur-xl border border-gray-100 rounded-2xl hover:shadow-[0_20px_40px_rgba(13,139,197,0.15)] hover:border-[#0D8BC5]/50 transition-all duration-500 relative overflow-hidden flex flex-col"
                >
                  {/* Glowing background blob on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0D8BC5]/0 via-[#0D8BC5]/5 to-[#0D8BC5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full translate-y-full group-hover:translate-y-0"></div>

                  {/* Top Border Animation */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0D8BC5] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-transparent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-[1.15] group-hover:rotate-6 transition-transform duration-500 group-hover:drop-shadow-[0_15px_15px_rgba(13,139,197,0.3)]">
                      <img src={`/images/about us/${feature.icon}`} alt={feature.title} className="w-[110%] h-[110%] max-w-none object-contain mix-blend-multiply transition-all duration-300" style={{ filter: 'contrast(1.1)' }} />
                    </div>
                    <div className="overflow-hidden mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:-translate-y-1 transition-transform duration-300">{feature.title}</h3>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-gray-600 font-medium leading-relaxed group-hover:-translate-y-1 transition-transform duration-300 delay-75">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </ParallaxCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Manufacturing Excellence (Animated Stats) */}
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img src="/images/factory-tour.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
        </motion.div>

        {/* Particle Effect */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/parallax_bg_02.png')] bg-fixed mix-blend-screen"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <AnimatedCounter from={0} to={25} suffix="+" title="Years Experience" />
            <AnimatedCounter from={0} to={500} suffix="+" title="Products" />
            <AnimatedCounter from={0} to={1000} suffix="+" title="Customers" />
            <AnimatedCounter from={0} to={100} suffix="%" title="Quality Assured" />
          </div>
        </div>
      </section>

      {/* 6. Our Clients */}
      <section className="py-24 md:py-32 bg-[#f9fafd] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Trusted By" title="Our Clients" />

          <div className="mt-16 relative w-full overflow-hidden flex items-center h-32 before:absolute before:left-0 before:top-0 before:z-10 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#f9fafd] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#f9fafd] after:to-transparent group">

            {/* Infinite Scroll Track using existing CSS animation */}
            <div className="flex w-max our_clients_first">
              {infiniteLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Client logo ${idx}`}
                    className="max-h-20 max-w-[150px] object-contain opacity-50 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_4px_12px_rgba(13,139,197,0.4)] transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industries We Serve (Showcase Cards) */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Sectors" title="Industries We Serve" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { name: 'Oil & Gas', img: '/images/parallax_img_01.jpg', icon: 'fa-oil-can', desc: 'High-pressure fastening for pipelines and rigs.' },
              { name: 'Power', img: '/images/parallax_bg_01.png', icon: 'fa-bolt', desc: 'Critical components for power generation plants.' },
              { name: 'Infrastructure', img: '/images/home_img_20.jpg', icon: 'fa-building', desc: 'Structural fasteners for heavy construction.' },
              { name: 'Marine', img: '/images/slider4.jpg', icon: 'fa-ship', desc: 'Corrosion-resistant marine grade hardware.' },
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative h-[380px] overflow-hidden rounded-2xl cursor-pointer border border-transparent hover:border-[#0D8BC5]/30 shadow-lg hover:shadow-[0_20px_40px_rgba(13,139,197,0.2)] transition-all duration-500"
              >
                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Diagonal Light Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-12 h-12 bg-[#0D8BC5] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <i className={`fas ${industry.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Call To Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D8BC5] to-[#0878AA]"></div>
        <motion.div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/images/parallax_bg_02.png')", opacity: 0.1, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white mb-10 leading-tight drop-shadow-lg tracking-tight"
          >
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Stronger Connections</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-[#0D8BC5] font-extrabold text-sm uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gray-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center gap-3">
                Contact Us Today <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}</style>
    </div>
  );
};

export default About;
