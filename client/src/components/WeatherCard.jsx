import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.weather}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
