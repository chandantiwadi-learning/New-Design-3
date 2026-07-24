import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MaterialSidebar from '../components/MaterialSidebar';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Material = () => {
  return (
    <div className="materials-page bg-white text-gray-700 select-none">
      
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
          <img src="/images/generated/materials_hero_1784917955251.png" alt="Material Banner" className="w-full h-full object-cover object-[80%_center] md:object-[75%_center] lg:object-center" />
          
          {/* Gradient Overlay & Blur for clarity on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/60 via-black/40 md:via-black/20 to-transparent lg:to-transparent/10 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 55%)', maskImage: 'linear-gradient(to right, black 0%, transparent 55%)' }}></div>
        </motion.div>

        <div className="relative z-10 text-left px-4 max-w-7xl w-full mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(13,139,197,0.3)] hidden"
          >
            <i className="icon-picture text-4xl text-[#0D8BC5]"></i>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase mb-6"
          >
            Material
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Sourcing and manufacturing from premium ferrous and non-ferrous alloys to guarantee unmatched durability and corrosion resistance in any environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-1 w-24 bg-[#0D8BC5] mt-8 origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Main Content Area (3/4 width) */}
          <main className="flex-grow md:w-3/4 space-y-16">
            
            {/* Intro Text */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 text-gray-600 font-medium leading-[1.9] text-base md:text-lg text-justify"
            >
              <motion.p variants={fadeUp}>
                HEX INDIA Fasteners specializes in supplying and manufacturing high-integrity fasteners across a comprehensive catalog of premium ferrous and non-ferrous alloys. Sourcing raw materials from certified steel mills, we ensure full traceability and grade verification.
              </motion.p>
              <motion.p variants={fadeUp}>
                Our inventory stocks extensive raw material forms (round bars, wires, sheet plates) in specialized grades to feed our forging, hot heading, and thread rolling facilities. This enables rapid lead times for custom fastener requirements in critical engineering platforms.
              </motion.p>
            </motion.div>

            {/* Premium Testimonial Quote */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeft}
              className="bg-white border border-gray-100 p-8 md:p-10 rounded-2xl relative shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0D8BC5]/10 to-transparent rounded-bl-full -z-0"></div>
              <i className="icon-quote-left text-[#0D8BC5]/10 text-6xl absolute top-6 left-6 -z-0"></i>
              
              <blockquote className="space-y-6 relative z-10 pt-2 pl-4 md:pl-8">
                <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed font-medium">
                  "Chemical composure and mechanical testing are paramount. Our metallurgical checks verify pitting index ratings, yield strength limits, and hardness thresholds before materials are released for production."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0D8BC5]/10 flex items-center justify-center">
                    <i className="icon-flask text-[#0D8BC5] text-xl"></i>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm md:text-base tracking-wide">QUALITY ASSURANCE DEPT</div>
                    <div className="text-[#0D8BC5] text-xs font-bold uppercase tracking-[0.2em] mt-1">Hex India Fasteners</div>
                  </div>
                </div>
              </blockquote>
            </motion.div>

            {/* Featured Alloys Section */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Ferrous & Non-Ferrous Alloys Scope
                </h2>
                <div className="h-1 w-20 bg-[#0D8BC5] rounded-full"></div>
                <p className="text-gray-600 font-medium leading-[1.9] text-base md:text-lg">
                  We supply industrial fasteners in diverse structural configurations to match custom pressure ratings and mechanical loads. Below are the core materials grades available in our inventory:
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <motion.div variants={fadeUp} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5]">
                        <i className="icon-shield"></i>
                      </div>
                      Steel & Duplex Alloys
                    </h4>
                    <ul className="space-y-4">
                      {[
                        { name: 'Stainless Steel (304, 316, 321, 347, 904L)', path: '/stainless-steel' },
                        { name: 'Carbon Steel (High-Tensile Gr. 8.8, 10.9, 12.9)', path: '/carbon-steel' },
                        { name: 'Alloy Steel (ASTM A193 B7, B16, L7)', path: '/alloy-steel' },
                        { name: 'Duplex & Super Duplex Steel (F51, F53, F55)', path: '/duplex-steel' },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <i className="icon-angle-right text-[#0D8BC5] text-sm mt-1.5"></i>
                          <Link to={item.path} className="text-base font-bold text-gray-600 hover:text-[#0D8BC5] transition-colors">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div variants={fadeUp} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5]">
                        <i className="icon-beaker"></i>
                      </div>
                      Nickel & Specialized
                    </h4>
                    <ul className="space-y-4">
                      {[
                        { name: 'Nickel Alloys (Nickel 200, Monel 400, K500)', path: '/nickel-alloy' },
                        { name: 'Inconel & Incoloy (Alloy 600, 625, 718, 825)', path: '/inconel' },
                        { name: 'Hastelloy & Titanium (C276, Titanium Gr.2)', path: '/hastelloy' },
                        { name: 'Copper Alloys (Bronze, Brass)', path: '/brass' },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <i className="icon-angle-right text-[#0D8BC5] text-sm mt-1.5"></i>
                          <Link to={item.path} className="text-base font-bold text-gray-600 hover:text-[#0D8BC5] transition-colors">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Material yards info */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center mt-12 border border-gray-100 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]"
            >
              <div className="w-full lg:w-1/3 relative rounded-2xl overflow-hidden group shadow-lg">
                <img src="/images/pages_img_04.jpg" alt="HEX INDIA Material Stock" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="w-full lg:w-2/3 space-y-6">
                <h6 className="text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em]">Large-Scale Inventory</h6>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Raw Material Stockist Yard</h3>
                <p className="text-gray-600 font-medium leading-[1.8] text-base">
                  Our comprehensive raw material yard houses tons of stock in various sheet plates, round bars, wire coils, and hex bars in the aforementioned grades. This massive inventory volume allows us to rapidly feed raw metals into our hot heading and forging shops, enabling speed delivery of high-quality products.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0a192f] hover:bg-[#0D8BC5] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_10px_25px_rgba(13,139,197,0.4)] group">
                  Enquire for Grade Specifications 
                  <i className="icon-angle-right text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
                </Link>
              </div>
            </motion.div>
          </main>

          {/* Sidebar Area (1/4 width) */}
          <aside className="w-full md:w-1/4">
            <MaterialSidebar />
          </aside>

        </div>
      </section>
    </div>
  );
};

export default Material;
