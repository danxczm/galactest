import logo from '../images/logo.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>
            <img src={logo} className="image__logo" alt="logo" loading="lazy" />
          </h2>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="/">
                Home
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                About us
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Services
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/">
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__media">
          <a href="https://facebook.com" className="footer__media-link">
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://linkedin.com/"
            className="footer__media-link footer__media-link--linkedin"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/" className="footer__media-link">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <address className="footer__contact">
          <h3 className="footer__contact-title">Contact us</h3>
          <a className="footer__contact-email" href="mailto:support@markify.com">
            support@markify.com
          </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
