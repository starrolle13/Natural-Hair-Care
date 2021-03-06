import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="logo"></Link>
      <section className="menuRight">
        <Link to="/" className="home">
          <h3>Home</h3>
        </Link>
        <Link to="/about" className="about">
          <h3>About</h3>
        </Link>
        <Link to="/pricing" className="price">
          <h3>Pricing</h3>
        </Link>
        <Link to="/locations" className="location">
          <h3>Locations</h3>
        </Link>
      </section>
    </div>
  );
}

export default NavBar;
