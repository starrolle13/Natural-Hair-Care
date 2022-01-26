import React, { useEffect, useRef } from 'react';

function MapBox({
  center,
  zoom,
  mapId,
  mapTypeId,
  Mar
}: {
  center: { lat: 41.44417, lng: -90.15196 },
  zoom: 12,
  mapId: 'fbe3afe67839325',
  mapTypeId: 'hybrid'
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom
    });
  });

  return (
    <div>
      <div ref={ref} id="map" />
    </div>
  );
}

export default MapBox;
