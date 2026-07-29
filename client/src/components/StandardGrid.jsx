import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const StandardGrid = ({ standards }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16 px-4 max-w-7xl mx-auto"
    >
      {standards.map((code, idx) => (
        <motion.div 
          key={idx} 
          variants={itemVariants}
          className="group relative bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[140px]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
          }}
        >
          {/* Subtle Hexagon Watermark / Background Accent */}
          <div className="absolute -right-8 -top-8 text-gray-50 opacity-[0.03] group-hover:text-[#0D8BC5] group-hover:opacity-10 transition-colors duration-500 pointer-events-none">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L22 7.77V16.23L12 22L2 16.23V7.77L12 2Z" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 group-hover:to-[#0D8BC5]/5 transition-colors duration-500 z-0"></div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded bg-gray-50 group-hover:bg-[#0D8BC5] flex items-center justify-center transition-colors duration-300">
                <FileText className="text-gray-400 group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-[#0D8BC5] transform group-hover:translate-x-1 transition-all duration-300" size={20} />
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0D8BC5] transition-colors duration-300 leading-snug">
              {code}
            </h3>
          </div>
          
          {/* Bottom border highlight on hover */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0D8BC5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StandardGrid;
