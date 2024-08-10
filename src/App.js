import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return (
    <>
      <div className="background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={
              <>
                <h1>Services</h1>
              </>
            }
          />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
