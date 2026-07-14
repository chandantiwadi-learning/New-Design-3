import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Preloader removed
// Scroll to top on route change to match standard web behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy Load Core Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const FactoryTour = lazy(() => import('./pages/FactoryTour'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Products = lazy(() => import('./pages/Products'));
const Material = lazy(() => import('./pages/Material'));
const Standard = lazy(() => import('./pages/Standard'));
const Blog = lazy(() => import('./pages/Blog'));


// Lazy Load Product Pages
const Bolts = lazy(() => import('./pages/products/Bolts'));
const Screws = lazy(() => import('./pages/products/Screws'));
const StudBolts = lazy(() => import('./pages/products/StudBolts'));
const Nuts = lazy(() => import('./pages/products/Nuts'));
const Washers = lazy(() => import('./pages/products/Washers'));
const Accessories = lazy(() => import('./pages/products/Accessories'));

// Lazy Load Material Pages
const StainlessSteel = lazy(() => import('./pages/materials/StainlessSteel'));
const CarbonSteel = lazy(() => import('./pages/materials/CarbonSteel'));
const AlloySteel = lazy(() => import('./pages/materials/AlloySteel'));
const DuplexSteel = lazy(() => import('./pages/materials/DuplexSteel'));
const SuperDuplexSteel = lazy(() => import('./pages/materials/SuperDuplexSteel'));
const NickelAlloy = lazy(() => import('./pages/materials/NickelAlloy'));
const Monel = lazy(() => import('./pages/materials/Monel'));
const Inconel = lazy(() => import('./pages/materials/Inconel'));
const Incoloy = lazy(() => import('./pages/materials/Incoloy'));
const Hastelloy = lazy(() => import('./pages/materials/Hastelloy'));
const CopperNickel = lazy(() => import('./pages/materials/CopperNickel'));
const Titanium = lazy(() => import('./pages/materials/Titanium'));
const SiliconBronze = lazy(() => import('./pages/materials/SiliconBronze'));
const PhosphorBronze = lazy(() => import('./pages/materials/PhosphorBronze'));
const AluminiumBronze = lazy(() => import('./pages/materials/AluminiumBronze'));
const Brass = lazy(() => import('./pages/materials/Brass'));
const Tantalum = lazy(() => import('./pages/materials/Tantalum'));
const Zirconium = lazy(() => import('./pages/materials/Zirconium'));

// Lazy Load Standards Pages
const AsmeStandards = lazy(() => import('./pages/standards/AsmeStandards'));
const DinStandards = lazy(() => import('./pages/standards/DinStandards'));
const SaeStandards = lazy(() => import('./pages/standards/SaeStandards'));
const IsoStandards = lazy(() => import('./pages/standards/IsoStandards'));
const BsStandards = lazy(() => import('./pages/standards/BsStandards'));
const BisStandards = lazy(() => import('./pages/standards/BisStandards'));
const UniStandards = lazy(() => import('./pages/standards/UniStandards'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        {/* Main Content Area - Adding padding top to prevent content overlap with fixed Navbar */}
        <main className="flex-grow pt-[85px] md:pt-[105px]">
          <Suspense
            fallback={
              <div className="h-[400px] flex items-center justify-center">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Loading...</span>
              </div>
            }
          >
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/factory-tour" element={<FactoryTour />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/products" element={<Products />} />
              <Route path="/material" element={<Material />} />
              <Route path="/standard" element={<Standard />} />
              <Route path="/blog" element={<Blog />} />


              {/* Product Routes */}
              <Route path="/bolts" element={<Bolts />} />
              <Route path="/screw" element={<Screws />} />
              <Route path="/stud-bolts" element={<StudBolts />} />
              <Route path="/nuts" element={<Nuts />} />
              <Route path="/washers" element={<Washers />} />
              <Route path="/accessories" element={<Accessories />} />

              {/* Material Routes */}
              <Route path="/stainless-steel" element={<StainlessSteel />} />
              <Route path="/carbon-steel" element={<CarbonSteel />} />
              <Route path="/alloy-steel" element={<AlloySteel />} />
              <Route path="/duplex-steel" element={<DuplexSteel />} />
              <Route path="/super-duplex-steel" element={<SuperDuplexSteel />} />
              <Route path="/nickel-alloy" element={<NickelAlloy />} />
              <Route path="/monel" element={<Monel />} />
              <Route path="/inconel" element={<Inconel />} />
              <Route path="/incoloy" element={<Incoloy />} />
              <Route path="/hastelloy" element={<Hastelloy />} />
              <Route path="/copper-nickel" element={<CopperNickel />} />
              <Route path="/titanium" element={<Titanium />} />
              <Route path="/silicon-bronze" element={<SiliconBronze />} />
              <Route path="/phosphor-bronze" element={<PhosphorBronze />} />
              <Route path="/aluminium-bronze" element={<AluminiumBronze />} />
              <Route path="/brass" element={<Brass />} />
              <Route path="/tantalum" element={<Tantalum />} />
              <Route path="/zirconium" element={<Zirconium />} />

              {/* Standards Routes */}
              <Route path="/asme-standards" element={<AsmeStandards />} />
              <Route path="/din-standards" element={<DinStandards />} />
              <Route path="/sae-standards" element={<SaeStandards />} />
              <Route path="/iso-standards" element={<IsoStandards />} />
              <Route path="/bs-standards" element={<BsStandards />} />
              <Route path="/bis-standards" element={<BisStandards />} />
              <Route path="/uni-standards" element={<UniStandards />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
