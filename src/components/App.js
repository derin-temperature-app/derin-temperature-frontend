import React from 'react';
import LocationDetail from '../containers/LocationDetail';
import WeatherOverview from '../containers/WeatherOverview';


export default function App() {
  return (
    <section>
      <LocationDetail />
      <WeatherOverview />
    </section>
  );
}

