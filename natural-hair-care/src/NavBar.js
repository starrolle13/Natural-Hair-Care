import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/location">Locations</Link>
    </div>
  );
}

export default NavBar;
