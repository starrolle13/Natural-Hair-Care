import NavBar from './NavBar';
import Footer from './Footer';
import Spacer from './Spacer';
import SocialMedia from './SocialMedia';
import PricingHeader from './PricingHeader';
function Pricing() {
  return (
    <div className="App">
      <NavBar />
      <PricingHeader />
      <Spacer />
      <div className="priceBox">
        <div className="priceTextBox">
          <h1 className="priceHeader">Price List</h1>
          <p className="column1">
            <span className="bold">Facial </span> amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum......................$300
          </p>
          <p className="column2">
            <span className="bold">Steam </span>ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.........$175
          </p>
          <p className="column3">
            <span className="bold">Nails </span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum..................$200
          </p>
        </div>
      </div>

      <SocialMedia />
      <Spacer />
      <Footer />
    </div>
  );
}

export default Pricing;
