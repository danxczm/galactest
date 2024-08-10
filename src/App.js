import { Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  const buildLinkClass = ({ isActive }) => {
    return { color: `${isActive ? 'green' : 'black'}` };
  };

  return (
    <div>
      <nav>
        <NavLink to="/" style={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" style={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/services" style={buildLinkClass}>
          Services
        </NavLink>
      </nav>
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
