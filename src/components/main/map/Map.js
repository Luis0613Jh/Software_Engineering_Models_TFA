import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ28xMDA5IiwiYSI6ImNqeHY5ejU2ZjAycmszZHB1emlydWl4ZGwifQ.t0KqZ60okDTiJ88hzNVhNA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.20387268, -4.00947993],
      zoom: 12
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '60rem', height: '35rem' }} />;
};

export default Map;
