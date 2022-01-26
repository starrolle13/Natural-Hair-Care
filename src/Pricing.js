import NavBar from './NavBar';
import Footer from './Footer';
import Spacer from './Spacer';
import SocialMedia from './SocialMedia';
import Header from './Header';
function Pricing() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Spacer />
      <div className="priceBox">
        <h1 className="priceHeader">Price List</h1>
        <p className="column1"></p>
        <p className="column2"></p>
      </div>
      <SocialMedia />
      <Spacer />
      <Footer />
    </div>
  );
}

export default Pricing;
