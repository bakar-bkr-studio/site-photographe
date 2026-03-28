import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { usePageTracking } from './hooks/useAnalytics';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  usePageTracking();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;