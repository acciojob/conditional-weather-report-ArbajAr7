import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';
import '../styles/App.css';

function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;