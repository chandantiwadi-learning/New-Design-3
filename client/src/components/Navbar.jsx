import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const location = useLocation();

  // Scroll listener to toggle header-small class behavior and smart sticky effect
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileSubmenu = (menu, e) => {
    e.preventDefault();
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  const navLinks = [
    { name: 'Home', path: '/', exact: true, icon: 'icon-home' },
    { 
      name: 'About Us', 
      path: '/about-us',
      icon: 'icon-cog',
      submenu: [{ name: 'Factory Tour', path: '/factory-tour' }]
    },
    { 
      name: 'Products', 
      path: '/products',
      icon: 'icon-tasks',
      submenu: [
        { name: 'Bolts', path: '/bolts' },
        { name: 'Screws', path: '/screw' },
        { name: 'Stud Bolts', path: '/stud-bolts' },
        { name: 'Nuts', path: '/nuts' },
        { name: 'Washers', path: '/washers' },
        { name: 'Accessories', path: '/accessories' },
      ]
    },
    { 
      name: 'Material', 
      path: '/material',
      icon: 'icon-picture',
      submenu: [
        { name: 'Stainless Steel', path: '/stainless-steel' },
        { name: 'Carbon Steel', path: '/carbon-steel' },
        { name: 'Alloy Steel', path: '/alloy-steel' },
        { name: 'Duplex Steel', path: '/duplex-steel' },
        { name: 'Super Duplex Steel', path: '/super-duplex-steel' },
        { name: 'Nickel', path: '/nickel-alloy' },
        { name: 'Monel', path: '/monel' },
        { name: 'Inconel', path: '/inconel' },
        { name: 'Incoloy', path: '/incoloy' },
        { name: 'Hastelloy', path: '/hastelloy' },
        { name: 'Copper Nickel', path: '/copper-nickel' },
        { name: 'Titanium', path: '/titanium' },
        { name: 'Silicon Bronze', path: '/silicon-bronze' },
        { name: 'Phosphor Bronze', path: '/phosphor-bronze' },
        { name: 'Aluminum Bronze', path: '/aluminium-bronze' },
        { name: 'Brass', path: '/brass' },
        { name: 'Tantalum', path: '/tantalum' },
        { name: 'Zirconium', path: '/zirconium' }
      ]
    },
    { 
      name: 'Standard', 
      path: '/standard',
      icon: 'icon-flag',
      submenu: [
        { name: 'ASME', path: '/asme-standards' },
        { name: 'DIN', path: '/din-standards' },
        { name: 'SAE', path: '/sae-standards' },
        { name: 'ISO', path: '/iso-standards' },
        { name: 'BS', path: '/bs-standards' },
        { name: 'BIS', path: '/bis-standards' },
        { name: 'UNI', path: '/uni-standards' }
      ]
    },
    { name: 'Contact Us', path: '/contact', icon: 'icon-envelope' },
    { name: 'Blog', path: '/blog', icon: 'icon-plane' }
  ];

  return (
    <>
      <header 
        className={`header sticky top-0 w-full z-50 transition-all duration-500 ease-out 
        ${isScrolled ? 'header-small shadow-[0_4px_25px_rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-md' : 'bg-white shadow-sm'} 
        ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="container relative flex items-center justify-between">
          <div className="absolute top-2 right-4 text-[10px] text-gray-500 font-bold hidden md:block">
            <span className="text-[#0D8BC5] hover:underline cursor-pointer">EN</span>
            <span className="mx-1.5">|</span>
            <span className="text-gray-400 hover:underline cursor-pointer">NL</span>
          </div>

          <Link className="logo transition-transform duration-300 hover:scale-[1.02]" to="/" title="Hex India Fasteners">
            <img src="/images/hex-india-logo.png" alt="Hex India Fasteners" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-50 transition-colors z-[60] mr-4 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>

          {/* Desktop main menu */}
          <ul
            className="main_menu flex items-center"
            style={{ display: window.innerWidth > 767 ? 'flex' : 'none' }}
          >
            <li className={isActive('/') && location.pathname === '/' ? 'current_item' : ''}>
              <Link to="/">
                <span className="hex_elem_rounded"><i className="icon-home"></i></span>
                Home
              </Link>
            </li>

            <li className={`has-submenu group relative ${isActive('/about-us') || isActive('/factory-tour') ? 'current_item' : ''}`}>
              <Link to="/about-us">
                <span className="hex_elem_rounded"><i className="icon-cog"></i></span>
                About Us
              </Link>
              <ul className="absolute left-0 top-[100%] mt-2 w-56 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] flex flex-col">
                <li><Link to="/factory-tour" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Factory Tour</Link></li>
              </ul>
            </li>

            <li className={`has-submenu group relative ${location.pathname === '/products' || isActive('/bolts') || isActive('/screw') || isActive('/stud-bolts') || isActive('/nuts') || isActive('/washers') || isActive('/accessories') ? 'current_item' : ''}`}>
              <Link to="/products">
                <span className="hex_elem_rounded"><i className="icon-tasks"></i></span>
                Products
              </Link>
              <ul className="absolute left-0 top-[100%] mt-2 w-56 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] flex flex-col">
                <li><Link to="/bolts" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Bolts</Link></li>
                <li><Link to="/screw" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Screws</Link></li>
                <li><Link to="/stud-bolts" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Stud Bolts</Link></li>
                <li><Link to="/nuts" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Nuts</Link></li>
                <li><Link to="/washers" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Washers</Link></li>
                <li><Link to="/accessories" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">Accessories</Link></li>
              </ul>
            </li>

            <li className={`has-submenu group relative ${location.pathname === '/material' ||
              isActive('/stainless-steel') || isActive('/carbon-steel') || isActive('/alloy-steel') ||
              isActive('/duplex-steel') || isActive('/super-duplex-steel') || isActive('/nickel-alloy') ||
              isActive('/monel') || isActive('/inconel') || isActive('/incoloy') || isActive('/hastelloy') ||
              isActive('/copper-nickel') || isActive('/titanium') || isActive('/silicon-bronze') ||
              isActive('/phosphor-bronze') || isActive('/aluminium-bronze') || isActive('/brass') ||
              isActive('/tantalum') || isActive('/zirconium') ? 'current_item' : ''
              }`}>
              <Link to="/material">
                <span className="hex_elem_rounded"><i className="icon-picture"></i></span>
                Material
              </Link>
              <ul className="absolute left-0 top-[100%] mt-2 w-[500px] grid grid-cols-2 bg-white border border-gray-100 shadow-2xl rounded-lg py-4 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] gap-1">
                <li><Link to="/stainless-steel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Stainless Steel</Link></li>
                <li><Link to="/carbon-steel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Carbon Steel</Link></li>
                <li><Link to="/alloy-steel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Alloy Steel</Link></li>
                <li><Link to="/duplex-steel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Duplex Steel</Link></li>
                <li><Link to="/super-duplex-steel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Super Duplex Steel</Link></li>
                <li><Link to="/nickel-alloy" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Nickel</Link></li>
                <li><Link to="/monel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Monel</Link></li>
                <li><Link to="/inconel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Inconel</Link></li>
                <li><Link to="/incoloy" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Incoloy</Link></li>
                <li><Link to="/hastelloy" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Hastelloy</Link></li>
                <li><Link to="/copper-nickel" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Copper Nickel</Link></li>
                <li><Link to="/titanium" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Titanium</Link></li>
                <li><Link to="/silicon-bronze" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Silicon Bronze</Link></li>
                <li><Link to="/phosphor-bronze" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Phosphor Bronze</Link></li>
                <li><Link to="/aluminium-bronze" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Aluminum Bronze</Link></li>
                <li><Link to="/brass" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Brass</Link></li>
                <li><Link to="/tantalum" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Tantalum</Link></li>
                <li><Link to="/zirconium" className="block px-5 py-2 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors rounded-md">Zirconium</Link></li>
              </ul>
            </li>

            <li className={`has-submenu group relative ${location.pathname === '/standard' ||
              isActive('/asme-standards') || isActive('/din-standards') || isActive('/sae-standards') ||
              isActive('/iso-standards') || isActive('/bs-standards') || isActive('/bis-standards') ||
              isActive('/uni-standards') ? 'current_item' : ''
              }`}>
              <Link to="/standard">
                <span className="hex_elem_rounded"><i className="icon-flag"></i></span>
                Standard
              </Link>
              <ul className="absolute left-0 top-[100%] mt-2 w-48 bg-white border border-gray-100 shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] flex flex-col">
                <li><Link to="/asme-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">ASME</Link></li>
                <li><Link to="/din-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">DIN</Link></li>
                <li><Link to="/sae-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">SAE</Link></li>
                <li><Link to="/iso-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">ISO</Link></li>
                <li><Link to="/bs-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">BS</Link></li>
                <li><Link to="/bis-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">BIS</Link></li>
                <li><Link to="/uni-standards" className="block px-5 py-2.5 text-[13px] uppercase tracking-wider font-bold text-gray-600 hover:bg-[#0a192f] hover:text-[#0D8BC5] transition-colors">UNI</Link></li>
              </ul>
            </li>

            <li className={isActive('/contact') ? 'current_item' : ''}>
              <Link to="/contact">
                <span className="hex_elem_rounded"><i className="icon-envelope"></i></span>
                Contact Us
              </Link>
            </li>

            <li className={isActive('/blog') ? 'current_item' : ''}>
              <Link to="/blog">
                <span className="hex_elem_rounded"><i className="icon-plane"></i></span>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Drawer using Framer Motion for premium feel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-gray-900/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 bottom-0 right-0 z-[120] w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col h-[100dvh] rounded-l-2xl overflow-hidden"
          >
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between p-4 h-[80px] shrink-0 bg-white">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/images/hex-india-logo.png" alt="Hex India Fasteners" className="h-10 object-contain" />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-[#0D8BC5] hover:bg-[#0D8BC5]/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="h-[1px] w-full bg-gray-100 shrink-0"></div>

            {/* Mobile Drawer Content */}
            <div className="flex-1 overflow-y-auto py-3 px-4 bg-white">
              <ul className="space-y-1 pb-8">
                {navLinks.map((link, idx) => {
                  const isCurrent = link.exact ? location.pathname === link.path : isActive(link.path);
                  const hasSubmenu = link.submenu && link.submenu.length > 0;
                  const isSubmenuOpen = activeMobileSubmenu === link.name;
                  
                  return (
                    <li key={idx} className="flex flex-col group">
                      <div className="flex items-center justify-between min-h-[52px]">
                        <Link 
                          to={link.path}
                          className={`flex-1 flex items-center gap-3.5 py-3 px-3 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:translate-x-1 ${isCurrent ? 'bg-[#0D8BC5]/10 text-[#0D8BC5]' : 'text-gray-700 hover:bg-[#0D8BC5]/5 hover:text-[#0D8BC5]'}`}
                          onClick={hasSubmenu ? undefined : () => setIsMobileMenuOpen(false)}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.05] shrink-0 ${isCurrent ? 'bg-[#0D8BC5] text-white shadow-sm shadow-[#0D8BC5]/20' : 'bg-gray-50 text-gray-400 group-hover:bg-[#0D8BC5]/10 group-hover:text-[#0D8BC5]'}`}>
                             <i className={`${link.icon} text-lg`}></i>
                          </div>
                          <span className="flex-1">{link.name}</span>
                        </Link>
                        {hasSubmenu && (
                          <button 
                            onClick={(e) => toggleMobileSubmenu(link.name, e)}
                            className={`w-11 h-11 flex items-center justify-center rounded-xl text-gray-400 hover:bg-[#0D8BC5]/5 hover:text-[#0D8BC5] transition-all ${isSubmenuOpen ? 'text-[#0D8BC5] rotate-180 bg-[#0D8BC5]/10' : ''}`}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </button>
                        )}
                      </div>

                      {/* Submenu Drawer with Framer Motion */}
                      <AnimatePresence>
                        {hasSubmenu && isSubmenuOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="pl-4 py-2 space-y-1 border-l-2 border-gray-100 ml-7 mt-1 mb-2">
                              {link.submenu.map((subItem, subIdx) => {
                                const isSubCurrent = isActive(subItem.path);
                                return (
                                  <li key={subIdx}>
                                    <Link 
                                      to={subItem.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`block py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${isSubCurrent ? 'text-[#0D8BC5] font-bold bg-[#0D8BC5]/5' : 'text-gray-500 hover:text-[#0D8BC5] hover:bg-gray-50'}`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="h-[1px] w-full bg-gray-100 shrink-0"></div>
            <div className="p-4 bg-gray-50 shrink-0 space-y-3">
              <a href="tel:+912235346200" className="flex items-center justify-center gap-2 w-full min-h-[44px] bg-[#0D8BC5] text-white rounded-xl font-bold shadow-md hover:bg-[#086a98] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call Us Now
              </a>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full min-h-[44px] bg-white border border-[#0D8BC5]/30 text-[#0D8BC5] rounded-xl font-bold shadow-sm hover:bg-[#0D8BC5] hover:text-white transition-colors">
                <i className="icon-envelope"></i>
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
