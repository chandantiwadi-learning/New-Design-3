import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 text-gray-900 select-none px-4 overflow-hidden relative">
      
      {/* Background grid pattern minimal */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0D8BC5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <style>{`
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50% { transform: translateY(-10px) translateZ(0); }
        }
        @keyframes pulseOpacity {
          0%, 100% { opacity: 0.8; }
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
          animation: floatLogo 6s ease-in-out infinite;
          will-change: transform;
          transition: all 0.3s ease-in-out;
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

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Animated HUD Logo */}
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] logo-hud-enter mb-10">
          <div className="relative w-full h-full logo-hud-container">
            <img src="/images/homePage/ImageAnimation/behind-logo.png" className="absolute inset-0 w-full h-full object-contain ring-outer opacity-20" alt="" style={{ filter: 'brightness(0) invert(0) opacity(0.1)' }} />
            <img src="/images/homePage/ImageAnimation/left%20to%20right.png" className="absolute inset-0 w-full h-full object-contain ring-middle opacity-30" alt="" style={{ filter: 'brightness(0) invert(0) opacity(0.15)' }} />
            <img src="/images/homePage/ImageAnimation/right%20to%20left.png" className="absolute inset-0 w-full h-full object-contain ring-inner opacity-40" alt="" style={{ filter: 'brightness(0) invert(0) opacity(0.2)' }} />
            <img src="/images/homePage/ImageAnimation/logo.png" className="absolute top-1/2 left-1/2 w-[55%] h-[55%] object-contain z-10 drop-shadow-sm" style={{ willChange: 'transform', transform: 'translate(-50%, -50%) translateZ(0)' }} alt="Hex India Logo" />
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tighter">
            404
          </h1>
          <div className="h-1 w-16 bg-[#0D8BC5] mx-auto rounded-full"></div>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
              Page Not Found
            </h2>
            <p className="text-gray-500 font-medium max-w-md mx-auto text-sm md:text-base">
              The requested industrial specification, product dimensional data, or page cannot be located in our current directory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-bold uppercase tracking-wider text-xs md:text-sm rounded transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0D8BC5] border-2 border-[#0D8BC5] text-white hover:bg-[#0a73a3] hover:border-[#0a73a3] font-bold uppercase tracking-wider text-xs md:text-sm rounded transition-colors"
              >
                <Home className="w-4 h-4" />
                Back Home
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ErrorPage;
