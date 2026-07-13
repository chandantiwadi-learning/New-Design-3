import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeTimer = setTimeout(() => {
        setVisible(false);
      }, 1000); // 1s transition matching scripts.js fadeOut(1000)
      return () => clearTimeout(fadeTimer);
    }, 1300); // 1300ms delay matching scripts.js loader

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 bg-black z-[99999] flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/images/load.gif"
        alt="Loading..."
        className="transform scale-50"
      />
    </div>
  );
};

export default Preloader;
