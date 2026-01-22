import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';

// Wrapper to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Home />} /> {/* Reusing Home for now as it has Services */}
            <Route path="/about" element={<Home />} /> {/* Reusing Home for now */}
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
