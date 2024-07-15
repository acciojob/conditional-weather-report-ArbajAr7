import React from 'react';
import '../styles/WeatherDisplay.css';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const temperatureColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div className="weather-display">
      <p className="temperature">
        Temperature: <span style={{ color: temperatureColor }}>{temperature}</span>
      </p>
      <p className="conditions">
        Conditions: <span>{conditions}</span>
      </p>
    </div>
  );
}

export default WeatherDisplay;