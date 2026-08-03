import React from 'react';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const StandardGrid = ({ standards }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-16"
    >
      {standards.map((item, idx) => {
        const isObj = typeof item === 'object' && item !== null;
        const displayCode = isObj ? (item.code || item.name) : (item || 'Unknown');

        return (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group flex items-center gap-3 p-3 rounded-lg border bg-white border-gray-100 hover:bg-gray-50 hover:border-[#0D8BC5]/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="w-6 h-8 bg-[#0D8BC5] text-white rounded-[4px] flex items-center justify-center relative shrink-0">
              <span className="absolute top-0 left-0 w-full h-full rotate-[60deg] bg-inherit rounded-[inherit] -z-10"></span>
              <span className="absolute top-0 left-0 w-full h-full -rotate-[60deg] bg-inherit rounded-[inherit] -z-10"></span>
              <i className="icon-angle-right text-sm"></i>
            </div>
            <span className="text-xs font-bold text-gray-700 group-hover:text-[#0D8BC5] transition-colors leading-snug">
              {displayCode}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StandardGrid;
