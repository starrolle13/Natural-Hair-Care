import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footerBox">
      <div className="footer">
        <Link to="/" className="footerLogo"></Link>
        <div className="footerMenu">
          <Link to="/" className="footerHome">
            <h4>Home</h4>
          </Link>
          <Link to="/about" className="footerAbout">
            <h4>About</h4>
          </Link>
          <Link to="/pricing" className="footerPrice">
            <h4>Pricing</h4>
          </Link>
          <Link to="/locations" className="footerLocation">
            <h4>Locations</h4>
          </Link>
          <div className="social">
            <h4>Follow us @skynlodge</h4>
            <Link to="https://www.facebook.com/skynlodge">
              <div className="facebook"></div>
            </Link>
            <Link to="https://www.instagram.com/skynlodge/">
              <div className="instagram"></div>
            </Link>
          </div>
        </div>
        <div className="footerContactUs">
          <Link to="/locations">
            <div className="footerPhone">
              <h4>Phone</h4>
            </div>
          </Link>
          <Link to="/locations">
            <div className="footerEmail">
              <h4>Email</h4>
            </div>
          </Link>
          <Link to="/locations">
            <div className="footerAddress">
              <h4>Address</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="copyright">
        <Link to="/privacyPolicy">
          <p className="policy">Privacy Policy</p>
        </Link>
        <Link to="/privacyPolicy">
          <p className="tos">Terms of Service</p>
        </Link>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
