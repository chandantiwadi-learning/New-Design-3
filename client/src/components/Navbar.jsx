import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

      if (currentScrollY > 100) {
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
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
    { name: 'Home', path: '/', exact: true },
    { 
      name: 'About Us', 
      path: '/about-us',
      submenu: [{ name: 'Factory Tour', path: '/factory-tour' }]
    },
    { 
      name: 'Products', 
      path: '/products',
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
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <header className={`header sticky top-0 w-full z-[100] transition-transform duration-300 bg-white ${isScrolled ? 'header-small shadow-md' : ''} ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container relative flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Mock Language switch for GEBO style */}
        <div className="absolute top-2 right-4 text-[10px] text-gray-500 font-bold hidden md:block">
          <span className="text-[#0D8BC5] hover:underline cursor-pointer">EN</span>
          <span className="mx-1.5">|</span>
          <span className="text-gray-400 hover:underline cursor-pointer">NL</span>
        </div>

        {/* Logo - Always visible with proper padding */}
        <Link className="logo flex-shrink-0 flex items-center py-2 relative z-50" to="/" title="Hex India Fasteners">
          <img src="/images/hex-india-logo.png" alt="Hex India Fasteners" className="w-[180px] sm:w-[220px] md:w-[260px] h-auto object-contain" />
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-50 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-[#0D8BC5] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>

        {/* Desktop Main Menu - Hidden on Mobile */}
        <ul className="main_menu hidden md:flex items-center">
          <li className={isActive('/') && location.pathname === '/' ? 'current_item' : ''}>
            <Link to="/">
              <span className="hex_elem_rounded"><i className="icon-home"></i></span>
              Home
            </Link>
          </li>

          <li className={`has-submenu ${isActive('/about-us') || isActive('/factory-tour') ? 'current_item' : ''}`}>
            <Link to="/about-us">
              <span className="hex_elem_rounded"><i className="icon-cog"></i></span>
              About Us
            </Link>
            <ul>
              <li><Link to="/factory-tour">Factory Tour</Link></li>
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/products' || isActive('/bolts') || isActive('/screw') || isActive('/stud-bolts') || isActive('/nuts') || isActive('/washers') || isActive('/accessories') ? 'current_item' : ''}`}>
            <Link to="/products">
              <span className="hex_elem_rounded"><i className="icon-tasks"></i></span>
              Products
            </Link>
            <ul>
              <li><Link to="/bolts">Bolts</Link></li>
              <li><Link to="/screw">Screws</Link></li>
              <li><Link to="/stud-bolts">Stud Bolts</Link></li>
              <li><Link to="/nuts">Nuts</Link></li>
              <li><Link to="/washers">Washers</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/material' || navLinks[3].submenu.some(s => isActive(s.path)) ? 'current_item' : ''}`}>
            <Link to="/material">
              <span className="hex_elem_rounded"><i className="icon-picture"></i></span>
              Material
            </Link>
            <ul>
              {navLinks[3].submenu.map((item, idx) => (
                <li key={idx}><Link to={item.path}>{item.name}</Link></li>
              ))}
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/standard' || navLinks[4].submenu.some(s => isActive(s.path)) ? 'current_item' : ''}`}>
            <Link to="/standard">
              <span className="hex_elem_rounded"><i className="icon-flag"></i></span>
              Standard
            </Link>
            <ul>
              {navLinks[4].submenu.map((item, idx) => (
                <li key={idx}><Link to={item.path}>{item.name}</Link></li>
              ))}
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

      {/* Mobile Slide-in Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col h-full ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Mobile Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 h-[80px] shrink-0">
          <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">Navigation</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Mobile Drawer Content */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <ul className="space-y-1">
            {navLinks.map((link, idx) => {
              const isCurrent = link.exact ? location.pathname === link.path : isActive(link.path);
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isSubmenuOpen = activeMobileSubmenu === link.name;
              
              return (
                <li key={idx} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.path}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold text-[15px] transition-colors ${isCurrent ? 'bg-[#0D8BC5]/10 text-[#0D8BC5]' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {link.name}
                    </Link>
                    {hasSubmenu && (
                      <button 
                        onClick={(e) => toggleMobileSubmenu(link.name, e)}
                        className={`p-3 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-[#0D8BC5] transition-all ${isSubmenuOpen ? 'text-[#0D8BC5] rotate-180' : ''}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                    )}
                  </div>

                  {/* Submenu Drawer */}
                  {hasSubmenu && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                      <ul className="pl-4 py-2 space-y-1 border-l-2 border-gray-100 ml-6">
                        {link.submenu.map((subItem, subIdx) => {
                          const isSubCurrent = isActive(subItem.path);
                          return (
                            <li key={subIdx}>
                              <Link 
                                to={subItem.path}
                                className={`block py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${isSubCurrent ? 'text-[#0D8BC5] font-bold bg-[#0D8BC5]/5' : 'text-gray-500 hover:text-[#0D8BC5] hover:bg-gray-50'}`}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
          <a href="tel:+912235346200" className="flex items-center justify-center gap-2 w-full py-3 bg-[#0D8BC5] text-white rounded-xl font-bold shadow-md hover:bg-[#086a98] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Call Us Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
