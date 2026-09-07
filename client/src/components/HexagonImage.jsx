import React, { useRef, useEffect, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

const HexagonImage = ({ src, shape = 'container', alt = '', className = '', enableLightbox = true }) => {
  const canvasRef = useRef(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = src;

    img.onload = () => {
      // Clear previous canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.beginPath();

      if (shape === 'container') {
        ctx.moveTo(108.5, 4);
        ctx.arcTo(186, 49.5, 186, 73.5, 24);
        ctx.arcTo(186, 144.5, 162, 168.5, 24);
        ctx.arcTo(99.5, 198, 89.5, 192, 24);
        ctx.arcTo(13, 148.5, 13, 120.5, 24);
        ctx.arcTo(13, 51.5, 37, 30.5, 24);
        ctx.arcTo(93.5, 2, 109.5, 2, 24);
      } else if (shape === 'small') {
        ctx.moveTo(9, 28);
        ctx.lineTo(50, 5);
        ctx.arcTo(57, 0, 66, 5, 15);
        ctx.lineTo(105, 25);
        ctx.arcTo(114, 30, 114, 35, 15);
        ctx.lineTo(114, 88);
        ctx.arcTo(112, 93, 105, 99, 15);
        ctx.lineTo(66, 123);
        ctx.arcTo(57, 128, 50, 123, 15);
        ctx.lineTo(7, 99);
        ctx.arcTo(0, 93, 0, 88, 15);
        ctx.lineTo(0, 40);
        ctx.arcTo(2, 35, 9, 27, 15);
      } else if (shape === 'big') {
        ctx.moveTo(0, 68);
        ctx.arcTo(120, 0, 235, 65, 30);
        ctx.arcTo(240, 70, 240, 205, 30);
        ctx.arcTo(240, 205, 120, 260, 30);
        ctx.arcTo(120, 275, 5, 195, 30);
        ctx.arcTo(0, 205, 0, 70, 30);
        ctx.arcTo(0, 68, 120, 0, 30);
      } else if (shape === 'mini') {
        ctx.moveTo(1, 22);
        ctx.arcTo(45, 0, 85, 22, 15);
        ctx.arcTo(89, 26, 89, 70, 15);
        ctx.arcTo(89, 75, 50, 97, 15);
        ctx.arcTo(45, 102, 5, 80, 15);
        ctx.arcTo(1, 75, 1, 32, 15);
        ctx.arcTo(1, 22, 45, 0, 15);
      } else if (shape === 'giant') {
        ctx.moveTo(47, 72);
        ctx.arcTo(187, 0, 331, 72, 50);
        ctx.arcTo(374, 107, 374, 277, 50);
        ctx.arcTo(374, 312, 244, 392, 50);
        ctx.arcTo(187, 410, 47, 328, 50);
        ctx.arcTo(0, 312, 0, 128, 50);
        ctx.arcTo(0, 102, 47, 72, 50);
      } else if (shape === 'triangle1') {
        ctx.moveTo(0, 0);
        ctx.lineTo(194, 269);
        ctx.lineTo(389, 0);
      } else if (shape === 'triangle2') {
        ctx.moveTo(0, 269);
        ctx.lineTo(195, 0);
        ctx.lineTo(389, 269);
      }

      ctx.closePath();
      ctx.clip();

      // Calculate object-cover aspect ratio crop coordinates to prevent any compression/stretching
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let renderWidth = canvas.width;
      let renderHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        renderWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - renderWidth) / 2;
      } else {
        renderHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - renderHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      ctx.restore();
    };
  }, [src, shape]);

  // Determine canvas width and height based on the container requirements
  let width = 200;
  let height = 200;
  let wrapperClass = 'hexagon_container';

  if (shape === 'small') {
    width = 114;
    height = 128;
    wrapperClass = 'hexagon_small_container';
  } else if (shape === 'mini') {
    width = 90;
    height = 102;
    wrapperClass = 'hexagon_mini_container';
  } else if (shape === 'big') {
    width = 240;
    height = 270;
    wrapperClass = 'hexagon_big_container';
  } else if (shape === 'giant') {
    width = 374;
    height = 410;
    wrapperClass = 'hexagon_giant_container';
  } else if (shape === 'triangle1') {
    width = 389;
    height = 269;
    wrapperClass = 'triangle_container_type_01';
  } else if (shape === 'triangle2') {
    width = 389;
    height = 269;
    wrapperClass = 'triangle_container_type_02';
  }

  return (
    <>
      <div
        onClick={enableLightbox ? () => setIsLightboxOpen(true) : undefined}
        className={`${wrapperClass} ${className} relative group cursor-pointer transition-transform duration-300 hover:scale-105 inline-block`}
        title={alt || 'Click to preview high-resolution image'}
      >
        <canvas ref={canvasRef} width={width} height={height} alt={alt} className="block transition-transform duration-300 group-hover:scale-105" />

        {enableLightbox && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-[#0D8BC5] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 border border-white/30 cursor-pointer"
            title="Preview image"
            aria-label="Preview image"
          >
            <ZoomIn className="w-4 h-4 text-white" />
          </button>
        )}
      </div>

      {enableLightbox && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          image={src}
          title={alt || 'HEX INDIA - Product Photo Preview'}
        />
      )}
    </>
  );
};

export default HexagonImage;
