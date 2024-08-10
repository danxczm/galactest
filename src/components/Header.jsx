import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo logo" href="/">
          <img className="image__logo" src={logo} alt="logo" loading="lazy" />
        </a>
        <button className="header__button button" type="button">
          Sign up
        </button>
      </div>
      <div className="header__menu-wrapper">
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <NavLink to="/" className="header__menu-link">
                Home
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/about" className="header__menu-link">
                About us
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/services" className="header__menu-link">
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
