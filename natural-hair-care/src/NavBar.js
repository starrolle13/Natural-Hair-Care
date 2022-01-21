import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/locations">Locations</Link>
    </div>
  );
}

export default NavBar;
