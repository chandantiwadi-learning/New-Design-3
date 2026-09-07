import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, ZoomOut, RotateCcw, X, ExternalLink, Move } from 'lucide-react';

const ImageLightbox = ({ isOpen, onClose, image, title, categoryPath }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Reset zoom and pan whenever modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, image]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.3, 0.8);
      if (nextScale <= 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.15, 4));
    } else {
      setScale((prev) => {
        const nextScale = Math.max(prev - 0.15, 0.8);
        if (nextScale <= 1) setPosition({ x: 0, y: 0 });
        return nextScale;
      });
    }
  };

  // Mouse Dragging Logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Dragging Logic for Mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Close when clicking outside image backdrop
  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-between bg-gray-950/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn p-3 md:p-6 select-none"
    >
      {/* Top Header Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#0D8BC5] animate-pulse"></div>
          <div>
            <h3 className="text-white font-extrabold text-sm md:text-lg tracking-wide uppercase">
              {title || 'Product Catalogue Preview'}
            </h3>
            <p className="text-xs text-gray-400 font-medium hidden sm:block">
              HEX INDIA FASTENERS &bull; Industrial Catalogue
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {categoryPath && (
            <Link
              to={categoryPath}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-[#0D8BC5] hover:bg-[#0878AA] text-white text-xs font-bold uppercase rounded-lg transition-all shadow-md hover:shadow-[0_0_15px_rgba(13,139,197,0.4)]"
            >
              <span>Explore Category</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}

          <button
            onClick={onClose}
            className="p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white transition-colors duration-200 border border-gray-700 cursor-pointer"
            title="Close preview (ESC)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 w-full max-w-6xl flex items-center justify-center overflow-hidden my-3 cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative transition-transform duration-100 ease-out flex items-center justify-center max-w-full max-h-full"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
            willChange: 'transform',
          }}
        >
          <img
            src={image}
            alt={title}
            className="max-h-[70vh] md:max-h-[75vh] w-auto max-w-[90vw] md:max-w-[80vw] object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gray-800/60 pointer-events-none select-none"
            draggable="false"
          />
        </div>

        {/* Drag Hint Overlay when zoomed */}
        {scale > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-700/60 flex items-center gap-2 pointer-events-none">
            <Move className="w-3.5 h-3.5 text-[#0D8BC5]" />
            <span>Click &amp; drag to pan image</span>
          </div>
        )}
      </div>

      {/* Bottom Floating Toolbar */}
      <div className="w-full max-w-md bg-gray-900/90 border border-gray-800 rounded-2xl px-5 py-2.5 shadow-2xl backdrop-blur-md flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.8}
            className="p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-[#0D8BC5] disabled:opacity-40 disabled:hover:bg-gray-800 text-white transition-colors duration-200 cursor-pointer"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-xs font-bold text-gray-300 min-w-[50px] text-center font-mono">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            className="p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-[#0D8BC5] disabled:opacity-40 disabled:hover:bg-gray-800 text-white transition-colors duration-200 cursor-pointer"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetZoom}
            className="p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200 ml-1 cursor-pointer"
            title="Reset Zoom (100%)"
            aria-label="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="text-[11px] text-gray-400 font-medium">
          Scroll or click <span className="text-[#0D8BC5] font-bold">+</span> / <span className="text-[#0D8BC5] font-bold">-</span> to zoom
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
