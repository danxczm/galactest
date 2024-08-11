import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="background">
        <Header />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Page />} />
            <Route path="/about" element={<Page />} />
            <Route path="/services" element={<Page />} />
            <Route path="*" element={<>404</>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Marquee />
      <Footer />
    </>
  );
};

export default App;
