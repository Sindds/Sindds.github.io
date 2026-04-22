import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weatherApp.css';

function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Moscow');
  const [inputError, setInputError] = useState('');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'b42e7dd5195e44cde1bfe40d6570352c';

  // Функция для конвертации hPa в мм рт. ст.
  const convertPressure = (hpa) => {
    return Math.round(hpa * 0.750062);
  };

  // Функция валидации названия города
  const validateCityName = (cityName) => {
    const trimmedCity = cityName.trim();
    
    if (!trimmedCity) {
      return 'Пожалуйста, введите название города';
    }
    
    if (!/^[a-zA-Zа-яА-Я\s\-]+$/i.test(trimmedCity)) {
      return 'Название города содержит недопустимые символы';
    }
    
    if (trimmedCity.length < 2) {
      return 'Название города слишком короткое';
    }
    
    return '';
  };

  const fetchWeatherData = async (cityName) => {
    try {
      setWeatherLoading(true);
      
      // Текущая погода
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`
      );
      setCurrentWeather(currentResponse.data);

      // Прогноз на 5 дней
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`
      );
      setForecast(forecastResponse.data);
      
      setError(null);
      setInputError('');
    } catch (err) {
      setError('Город не найден. Попробуйте другой.');
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    
    // Валидация введенного города
    const validationError = validateCityName(city);
    if (validationError) {
      setInputError(validationError);
      return;
    }
    
    if (trimmedCity) {
      setCity(trimmedCity); // Обновляем состояние очищенным значением
      fetchWeatherData(trimmedCity);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    
    // Сбрасываем ошибку при изменении input
    if (inputError) {
      setInputError('');
    }
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  // Группируем прогноз по дням с разделением на день/ночь
  const getDailyForecast = () => {
    if (!forecast) return [];
    
    const dailyData = {};
    forecast.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      const hour = new Date(item.dt * 1000).getHours();
      const isDaytime = hour >= 6 && hour < 18;
      
      if (!dailyData[date]) {
        dailyData[date] = {
          date: date,
          dayTemps: [],
          nightTemps: [],
          dayIcons: [],
          nightIcons: [],
          descriptions: [],
          pressures: []
        };
      }
      
      if (isDaytime) {
        dailyData[date].dayTemps.push(item.main.temp);
        dailyData[date].dayIcons.push(item.weather[0].icon);
      } else {
        dailyData[date].nightTemps.push(item.main.temp);
        dailyData[date].nightIcons.push(item.weather[0].icon);
      }
      
      dailyData[date].descriptions.push(item.weather[0].description);
      dailyData[date].pressures.push(item.main.pressure);
    });

    // Преобразуем в массив и вычисляем средние значения
    return Object.values(dailyData).map(day => ({
      date: day.date,
      dayTemp: day.dayTemps.length > 0 ? Math.round(day.dayTemps.reduce((a, b) => a + b, 0) / day.dayTemps.length) : null,
      nightTemp: day.nightTemps.length > 0 ? Math.round(day.nightTemps.reduce((a, b) => a + b, 0) / day.nightTemps.length) : null,
      dayIcon: day.dayIcons.length > 0 ? day.dayIcons[Math.floor(day.dayIcons.length / 2)] : '01d',
      nightIcon: day.nightIcons.length > 0 ? day.nightIcons[Math.floor(day.nightIcons.length / 2)] : '01n',
      pressure: Math.round(day.pressures.reduce((a, b) => a + b, 0) / day.pressures.length),
      description: day.descriptions[0]
    })).slice(0, 4);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  if (weatherLoading) {
    return (
      <div className="weather-app">
        <div className="weather-container">
          <div className="weather-loader-container">
            <div className="weather-loader"></div>
            <p className="weather-loading-text">Загрузка погоды...</p>
          </div>
        </div>
      </div>
    );
  }

  const dailyForecast = getDailyForecast();

  return (
    <div className="weather-app">
      <div className="weather-container">
        <form onSubmit={handleSubmit} className="weather-search-form">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Введите город..."
            className="weather-search-input"
          />
          <button type="submit" className="weather-search-button">
            Поиск
          </button>
        </form>

        {inputError && <div className="weather-error-message" style={{marginTop: '5px'}}>{inputError}</div>}
        {error && <div className="weather-error-message">{error}</div>}

        {currentWeather && (
          <>
            {/* Текущая погода */}
            <div className="weather-current">
              <div className="weather-header">
                <h2 className="weather-city-name">{currentWeather.name}</h2>
                <p className="weather-description">
                  {currentWeather.weather[0].description}
                </p>
              </div>

              <div className="weather-main">
                <div className="weather-temperature">
                  {Math.round(currentWeather.main.temp)}°C
                </div>
                <img
                  src={getWeatherIcon(currentWeather.weather[0].icon)}
                  alt={currentWeather.weather[0].description}
                  className="weather-icon"
                />
              </div>

              <div className="weather-details-grid">
                <div className="weather-detail-item">
                  <span className="weather-label">Ощущается как</span>
                  <span className="weather-value">{Math.round(currentWeather.main.feels_like)}°C</span>
                </div>
                <div className="weather-detail-item">
                  <span className="weather-label">Влажность</span>
                  <span className="weather-value">{currentWeather.main.humidity}%</span>
                </div>
                <div className="weather-detail-item">
                  <span className="weather-label">Ветер</span>
                  <span className="weather-value">{Math.round(currentWeather.wind.speed)} м/с</span>
                </div>
                <div className="weather-detail-item">
                  <span className="weather-label">Давление</span>
                  <span className="weather-value">{convertPressure(currentWeather.main.pressure)} мм рт. ст.</span>
                </div>
              </div>
            </div>

            {/* Прогноз */}
            {forecast && dailyForecast.length > 0 && (
              <div className="weather-forecast">
                <h3 className="forecast-title">Прогноз на ближайшие дни</h3>
                <div className="forecast-days">
                  {dailyForecast.map((day, index) => (
                    <div key={index} className="forecast-day">
                      <div className="forecast-date">{formatDate(day.date)}</div>
                      
                      <div className="forecast-temps">
                        <div className="temp-day">
                          <span className="temp-icon">☀️</span>
                          <span className="temp-value">{day.dayTemp !== null ? `${day.dayTemp}°` : '—'}</span>
                        </div>
                        
                        <div className="temp-divider">/</div>
                        
                        <div className="temp-night">
                          <span className="temp-icon">🌙</span>
                          <span className="temp-value">{day.nightTemp !== null ? `${day.nightTemp}°` : '—'}</span>
                        </div>
                      </div>

                      <div className="forecast-icons">
                        <img
                          src={getWeatherIcon(day.dayIcon)}
                          alt="День"
                          className="forecast-icon-day"
                        />
                        <img
                          src={getWeatherIcon(day.nightIcon)}
                          alt="Ночь"
                          className="forecast-icon-night"
                        />
                      </div>

                      <div className="forecast-pressure">
                        {convertPressure(day.pressure)} мм
                      </div>
                      <div className="forecast-desc">{day.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;