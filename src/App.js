import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1>About us</h1>
            </>
          }
        />
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
  );
};

export default App;
