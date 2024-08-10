import logo from '../images/logo.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} className="image__logo" alt="logo" loading="lazy" />
        </div>
        <div className="footer__links">
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
        </div>
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
        <div className="footer__contact">
          <h3 className="footer__contact-title">Contact us</h3>
          <a className="footer__contact-email" href="mailto:support@markify.com">
            support@markify.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
