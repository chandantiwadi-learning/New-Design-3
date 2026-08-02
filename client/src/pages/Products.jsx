import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductSidebar from '../components/ProductSidebar';
import SidebarContactForm from '../components/SidebarContactForm';

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

const Products = () => {
  const productsList = [
    { name: 'Bolts', path: '/bolts', img: '/images/products/our products/bolts-nuts.jpg' },
    { name: 'Nuts', path: '/nuts', img: '/images/products/our products/nuts.jpg' },
    { name: 'Stud Bolts', path: '/stud-bolts', img: '/images/products/our products/stud-bolts.jpg' },
    { name: 'Washers', path: '/washers', img: '/images/products/our products/washers.jpg' },
    { name: 'Screws', path: '/screw', img: '/images/products/our products/screws.jpg' },
    { name: 'Accessories', path: '/accessories', img: '/images/products/our products/ublots.jpg' }
  ];

  return (
    <div className="products-page bg-white text-gray-700 select-none">

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
        <div
          className="absolute top-6 right-6 z-50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] logo-hud-enter"
        >
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
          <img src="/images/products/products_hero.jpg" alt="Products Banner" className="w-full h-full object-cover object-[80%_center] md:object-[75%_center] lg:object-center" />

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
            <i className="icon-tasks text-4xl text-[#0D8BC5]"></i>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase mb-6 group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
          >
            Products
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover our comprehensive range of high-tensile industrial fasteners, meticulously engineered for critical applications and maximum structural integrity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="h-1 w-24 bg-[#0D8BC5] mt-8 origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Top Intro & Product Sidebar Row (Aligned Top) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Main Intro Text (3/4 width) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-grow md:w-3/4 space-y-6 text-gray-600 font-medium leading-[1.9] text-base md:text-lg text-justify"
          >
            <motion.p variants={fadeUp}>
              At <b><i>HEX INDIA</i></b>, we manufactures, stocks, and exports a wide catalog of premium industrial fasteners tailored for critical environments. Leveraging our state-of-the-art forging, thread rolling, and machining machinery, we deliver high tensile fasteners that guarantee joint reliability and shear strength.
            </motion.p>
            <motion.p variants={fadeUp}>
              Our production scope adheres to strict dimensional and chemical certification standards (ASME, DIN, ISO, BS, BIS, and UNI), supplying global operations across oil & gas, petro-chemical, power generation, heavy structural construction, marine engineering, and infrastructure platforms.
            </motion.p>
          </motion.div>

          {/* Product Sidebar Widget - Category list only (1/4 width) */}
          <div className="w-full md:w-1/4">
            <ProductSidebar showContactForm={false} />
          </div>

        </div>
      </section>

      {/* Our Products Section (Header + 6 Cards Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-extrabold uppercase text-[#0D8BC5]"
            style={{ textShadow: '0 4px 12px rgba(13, 139, 197, 0.25)' }}
          >
            Our Products
          </h2>
          <div className="h-1 w-20 bg-[#0D8BC5] mx-auto mt-3 rounded-full"></div>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Browse through our wide range of premium industrial fasteners engineered for critical environments.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsList.map((prod, idx) => (
              <Link
                to={prod.path}
                key={idx}
                className="group aspect-[4/3] relative rounded-lg overflow-hidden shadow-md border border-gray-100 hover:border-[#0D8BC5] hover:shadow-[0_8px_24px_rgba(13,139,197,0.25)] transition-all duration-300 block"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform transform-gpu z-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[#0D8BC5]/28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 z-30">
                  <div className="hexagon-tag bg-[#0D8BC5] text-white font-bold text-[10px] uppercase px-7 py-2 transition-colors duration-300 shadow-md">
                    {prod.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Custom Solution & Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Custom Machining Note Banner (Left, ~2/3 width) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeRight}
            className="w-full lg:w-2/3 bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]"
          >
            <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden group shadow-lg flex-shrink-0">
              <img src="/images/products/custom-machined-blueprint.jpg" alt="HEX INDIA Fasteners Machining" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <h6 className="text-[#0D8BC5] font-bold text-xs uppercase tracking-[0.2em]">Custom Solutions</h6>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Custom Machined Blueprints</h3>
              <p className="text-gray-600 font-medium leading-[1.8] text-base">
                Apart from the standard fastener specifications listed, we feature complete custom machining capabilities. Send us your engineering CAD drawings, thread requirements, and material grades, and our machining specialists will fabricate custom solutions matching your exact specifications.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0a192f] hover:bg-[#0D8BC5] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_10px_25px_rgba(13,139,197,0.4)] group">
                Enquire for Custom Fasteners
                <i className="icon-angle-right text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </motion.div>

          {/* Sidebar Contact Form Component (Right, ~1/3 width) */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <SidebarContactForm />
          </div>

        </div>
      </section>

      {/* Featured Product Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Product Categories & Forms
            </h2>
            <div className="h-1 w-20 bg-[#0D8BC5] rounded-full"></div>
            <p className="text-gray-600 font-medium leading-[1.9] text-base md:text-lg">
              We supply industrial fasteners in diverse structural configurations to match custom pressure ratings and mechanical loads. Below are the core fasteners groups available in ferrous and non-ferrous alloys:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D8BC5]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150 z-0"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-extrabold text-gray-900 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D8BC5]/10 flex items-center justify-center text-[#0D8BC5]">
                    <i className="icon-tasks"></i>
                  </div>
                  Primary Threads
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Bolts (Hex, Socket Head, Lag, Flange)', path: '/bolts' },
                    { name: 'Screws (Machine, Self-Tapping, Set)', path: '/screw' },
                    { name: 'Stud Bolts (Continuous Thread, Double-End)', path: '/stud-bolts' },
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
                    <i className="icon-cogs"></i>
                  </div>
                  Secondary Components
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Nuts (Hex, Heavy Hex, Nylon Lock, Wing)', path: '/nuts' },
                    { name: 'Washers (Flat, Spring, Lock, Tab)', path: '/washers' },
                    { name: 'Accessories (Pins, Rivets, Threaded Rods)', path: '/accessories' },
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
      </section>

    </div>
  );
};

export default Products;
