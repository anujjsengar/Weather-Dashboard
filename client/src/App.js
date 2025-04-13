import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      
      const response = await axios.get(`https://weather-backend-5pf7.onrender.com/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found.');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
