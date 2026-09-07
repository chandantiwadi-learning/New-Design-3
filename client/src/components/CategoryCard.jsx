import React from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn } from 'lucide-react';

const CategoryCard = ({ product, onPreview }) => {
  const handleCardClick = (e) => {
    onPreview(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group aspect-[4/3] relative rounded-lg overflow-hidden shadow-md border border-gray-100 hover:border-[#0D8BC5] hover:shadow-[0_8px_24px_rgba(13,139,197,0.25)] transition-all duration-300 block bg-slate-100 cursor-pointer select-none"
    >
      {/* Full-bleed Responsive Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 will-change-transform transform-gpu z-0"
        loading="lazy"
        decoding="async"
      />

      {/* Brand Blue Hover Overlay */}
      <div className="absolute inset-0 bg-[#0D8BC5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>

      {/* Zoom Icon Overlay Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPreview(product);
        }}
        className="absolute top-3 right-3 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-900/70 hover:bg-[#0D8BC5] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 border border-white/20 hover:border-[#0D8BC5] group/zoom cursor-pointer"
        title={`Zoom ${product.name} image`}
        aria-label={`Preview ${product.name}`}
      >
        <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-white group-hover/zoom:scale-110 transition-transform duration-200" />
      </button>

      {/* Hexagon Category Label */}
      <div className="absolute bottom-4 left-4 z-30">
        <Link
          to={product.path}
          onClick={(e) => e.stopPropagation()}
          className="hexagon-tag inline-block bg-[#0D8BC5] hover:bg-[#0878AA] text-white font-bold text-[10px] uppercase px-7 py-2 transition-colors duration-300 shadow-md cursor-pointer"
        >
          {product.name}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
