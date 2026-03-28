import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ScrollUtils } from './components/ScrollUtils';
import { usePageTracking } from './hooks/useAnalytics';

// Lazy loading the pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="flex-1 w-full"
  >
    {children}
  </motion.div>
);

// Loading Fallback component
const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  usePageTracking();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><PageWrapper><Home /></PageWrapper></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><PageWrapper><About /></PageWrapper></Suspense>} />
        <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><PageWrapper><Portfolio /></PageWrapper></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><PageWrapper><Services /></PageWrapper></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<PageLoader />}><PageWrapper><Blog /></PageWrapper></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense fallback={<PageLoader />}><PageWrapper><BlogPost /></PageWrapper></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><PageWrapper><Contact /></PageWrapper></Suspense>} />
        <Route path="/mentions-legales" element={<Suspense fallback={<PageLoader />}><PageWrapper><LegalNotice /></PageWrapper></Suspense>} />
        <Route path="/politique-confidentialite" element={<Suspense fallback={<PageLoader />}><PageWrapper><PrivacyPolicy /></PageWrapper></Suspense>} />
        <Route path="*" element={<Suspense fallback={<PageLoader />}><PageWrapper><NotFound /></PageWrapper></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <ScrollUtils />
        <Navigation />
        <main className="pt-16 flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;