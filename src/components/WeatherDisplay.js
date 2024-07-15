import React from 'react';
import '../styles/WeatherDisplay.css';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div className="weather-display">
      <p className="temperature" style={{ color: temperatureColor }}>
        Temperature: {temperature}
      </p>
      <p className="conditions">
        Conditions: {conditions}
      </p>
    </div>
  );
}

export default WeatherDisplay;