import NavBar from './NavBar';
import Footer from './Footer';
import Spacer from './Spacer';
import SocialMedia from './SocialMedia';
function Pricing() {
  return (
    <div className="App">
      <NavBar />
      <Spacer />
      <div className="priceBox">
        <h1 className="priceHeader">Price List</h1>
      </div>
      <SocialMedia />
      <Spacer />
      <Footer />
    </div>
  );
}

export default Pricing;
