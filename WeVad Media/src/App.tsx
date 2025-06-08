import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Portfolio />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;