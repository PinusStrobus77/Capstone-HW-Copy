import React, { useState, useEffect } from 'react';
import { BiSun, BiCloud, BiCloudRain, BiCloudSnow } from 'react-icons/bi';
const WeatherDropdown = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    // Function to fetch weather data from API
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=325dda8cce28425ebc804939232405&q=Cincinnati');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Partly cloudy':
        return <h4><BiCloud className="text-white" /></h4>;
      case 'Moderate rain':
        return <h4><BiCloudRain className="text-white" /></h4>;
      case 'Patchy snow possible':
        return <h4><BiCloudSnow className="text-white" /></h4>;
      // Add more cases for other weather conditions and icons
      default:
        return <h4><BiSun className="text-white" /></h4>;
    }
  };
  return (
    <span className="col-lg-1 align-self-start" id='weather'>
      <div className="dropdown">
            <button className="btn dropdown-toggle" href="#" id="weatherDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {weatherData && getWeatherIcon(weatherData.current.condition.text)}
            </button>
            <div className="dropdown-menu" aria-labelledby="weatherDropdown">
            {weatherData && (
    <div>
      <h5 className='dropdown-item'>{weatherData.location.name}</h5>
      <p className='dropdown-item'>{weatherData.current.temp_f}°F</p>
      <p className='dropdown-item'>{weatherData.current.condition.text}</p>
    </div>
  )}
            </div>
          </div>
    </span>
  );
};
export default WeatherDropdown;











