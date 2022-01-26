import NavBar from './NavBar';
import MapBox from './MapBox';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Spacer from './Spacer';
import Footer from './Footer';
import Banner from './Banner';
import LocationHeader from './LocationHeader';

function Locations() {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  const center = { lat: 41.44, lng: -90.15 };
  const zoom = 12;
  const mapId = 'fbe3afe67839325';
  return (
    <div>
      <NavBar />
      <LocationHeader />
      <Spacer />
      <Banner />
      <Spacer />
      <div className="mapBox">
        <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
          <MapBox center={center} zoom={zoom} mapId={mapId} />
        </Wrapper>
      </div>
      <Spacer />
      <Footer />
    </div>
  );
}

export default Locations;
