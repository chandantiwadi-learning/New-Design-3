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
    if (window.innerWidth <= 767) {
      e.preventDefault();
      setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
    }
  };

  return (
    <header className={`header sticky top-0 w-full z-50 transition-transform duration-300 bg-white ${isScrolled ? 'header-small shadow-md' : ''} ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container relative flex items-center justify-between">
        {/* Mock Language switch for GEBO style */}
        <div className="absolute top-2 right-4 text-[10px] text-gray-500 font-bold hidden md:block">
          <span className="text-primary hover:underline cursor-pointer">EN</span>
          <span className="mx-1.5">|</span>
          <span className="text-gray-400 hover:underline cursor-pointer">NL</span>
        </div>

        {/* Start logo */}
        <Link className="logo" to="/" title="Hex India Fasteners">
          <img src="/images/hex-india-logo.png" alt="Hex India Fasteners" />
        </Link>
        {/* End logo */}

        {/* Start main menu toggle button */}
        <button
          className="menu_button md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img className="r_logo" src="/images/Hex India Logo Final.png" alt="Logo" />
          <img className="r_button" src="/images/r_menu_button.png" alt="Menu button" />
        </button>

        {/* Start main menu */}
        <ul
          className="main_menu flex items-center"
          style={{ display: window.innerWidth > 767 ? 'flex' : (isMobileMenuOpen ? 'block' : 'none') }}
        >
          <li className={isActive('/') && location.pathname === '/' ? 'current_item' : ''}>
            <Link to="/">
              <span className="hex_elem_rounded"><i className="icon-home"></i></span>
              Home
            </Link>
          </li>

          <li className={`has-submenu ${isActive('/about-us') || isActive('/factory-tour') ? 'current_item' : ''}`}>
            <Link to="/about-us" onClick={(e) => toggleMobileSubmenu('about', e)}>
              <span className="hex_elem_rounded"><i className="icon-cog"></i></span>
              About Us
            </Link>
            <ul style={{ display: activeMobileSubmenu === 'about' ? 'block' : '' }}>
              <li><Link to="/factory-tour">Factory Tour</Link></li>
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/products' || isActive('/bolts') || isActive('/screw') || isActive('/stud-bolts') || isActive('/nuts') || isActive('/washers') || isActive('/accessories') ? 'current_item' : ''}`}>
            <Link to="/products" onClick={(e) => toggleMobileSubmenu('products', e)}>
              <span className="hex_elem_rounded"><i className="icon-tasks"></i></span>
              Products
            </Link>

            <ul style={{ display: activeMobileSubmenu === 'products' ? 'block' : '' }}>
              <li><Link to="/bolts">Bolts</Link></li>
              <li><Link to="/screw">Screws</Link></li>
              <li><Link to="/stud-bolts">Stud Bolts</Link></li>
              <li><Link to="/nuts">Nuts</Link></li>
              <li><Link to="/washers">Washers</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/material' ||
            isActive('/stainless-steel') || isActive('/carbon-steel') || isActive('/alloy-steel') ||
            isActive('/duplex-steel') || isActive('/super-duplex-steel') || isActive('/nickel-alloy') ||
            isActive('/monel') || isActive('/inconel') || isActive('/incoloy') || isActive('/hastelloy') ||
            isActive('/copper-nickel') || isActive('/titanium') || isActive('/silicon-bronze') ||
            isActive('/phosphor-bronze') || isActive('/aluminium-bronze') || isActive('/brass') ||
            isActive('/tantalum') || isActive('/zirconium') ? 'current_item' : ''
            }`}>
            <Link to="/material" onClick={(e) => toggleMobileSubmenu('materials', e)}>
              <span className="hex_elem_rounded"><i className="icon-picture"></i></span>
              Material
            </Link>

            <ul style={{ display: activeMobileSubmenu === 'materials' ? 'block' : '' }}>
              <li><Link to="/stainless-steel">Stainless Steel</Link></li>
              <li><Link to="/carbon-steel">Carbon Steel</Link></li>
              <li><Link to="/alloy-steel">Alloy Steel</Link></li>
              <li><Link to="/duplex-steel">Duplex Steel</Link></li>
              <li><Link to="/super-duplex-steel">Super Duplex Steel</Link></li>
              <li><Link to="/nickel-alloy">Nickel</Link></li>
              <li><Link to="/monel">Monel</Link></li>
              <li><Link to="/inconel">Inconel</Link></li>
              <li><Link to="/incoloy">Incoloy</Link></li>
              <li><Link to="/hastelloy">Hastelloy</Link></li>
              <li><Link to="/copper-nickel">Copper Nickel</Link></li>
              <li><Link to="/titanium">Titanium</Link></li>
              <li><Link to="/silicon-bronze">Silicon Bronze</Link></li>
              <li><Link to="/phosphor-bronze">Phosphor Bronze</Link></li>
              <li><Link to="/aluminium-bronze">Aluminum Bronze</Link></li>
              <li><Link to="/brass">Brass</Link></li>
              <li><Link to="/tantalum">Tantalum</Link></li>
              <li><Link to="/zirconium">Zirconium</Link></li>
            </ul>
          </li>

          <li className={`has-submenu ${location.pathname === '/standard' ||
            isActive('/asme-standards') || isActive('/din-standards') || isActive('/sae-standards') ||
            isActive('/iso-standards') || isActive('/bs-standards') || isActive('/bis-standards') ||
            isActive('/uni-standards') ? 'current_item' : ''
            }`}>
            <Link to="/standard" onClick={(e) => toggleMobileSubmenu('standards', e)}>
              <span className="hex_elem_rounded"><i className="icon-flag"></i></span>
              Standard
            </Link>

            <ul style={{ display: activeMobileSubmenu === 'standards' ? 'block' : '' }}>
              <li><Link to="/asme-standards">ASME</Link></li>
              <li><Link to="/din-standards">DIN</Link></li>
              <li><Link to="/sae-standards">SAE</Link></li>
              <li><Link to="/iso-standards">ISO</Link></li>
              <li><Link to="/bs-standards">BS</Link></li>
              <li><Link to="/bis-standards">BIS</Link></li>
              <li><Link to="/uni-standards">UNI</Link></li>
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
        {/* End main menu */}
      </div>
    </header>
  );
};

export default Navbar;
