import './App.css';
import NavBar from './NavBar';
import MapBox from './MapBox';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
// import ErrorComponent from './ErrorComponent';
// import Spinner from './Spinner';
// import React, { useEffect, useRef, ReactElement } from 'react';

// const location = {
//   address: '732 S Spring St, Los Angeles, California.',
//   lat: 41.44417,
//   lng: -90.15196
// };
console.log(process.env.REACT_APP_API_KEY);
function App() {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  const center = { lat: 41.44417, lng: -90.15196 };
  const zoom = 12;
  const mapId = 'fbe3afe67839325';
  return (
    <div className="App">
      <NavBar />
      <div className="mapBox">
        <Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render}>
          <MapBox center={center} zoom={zoom} mapId={mapId} />
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
