import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footerBox">
      <div className="footer">
        <div className="footerLogo"></div>
        <div className="footerMenu">
          <Link to="/" className="footerHome">
            <h3>Home</h3>
          </Link>
          <Link to="/about" className="footerAbout">
            <h3>About</h3>
          </Link>
          <Link to="/pricing" className="footerPrice">
            <h3>Pricing</h3>
          </Link>
          <Link to="/locations" className="footerLocation">
            <h3>Locations</h3>
          </Link>
        </div>
        <div className="footerContactUs">
          <Link to="/locations">
            <div className="footerPhone">
              <h3>Phone</h3>
            </div>
          </Link>
          <Link to="/locations">
            <div className="footerEmail">
              <h3>Email</h3>
            </div>
          </Link>
          <Link to="/locations">
            <div className="footerAddress">
              <h3>Address</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
