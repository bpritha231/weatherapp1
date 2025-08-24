import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // custom css

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=ba64f9337da1607e234546e39230c547"; // 🔹 Replace with your OpenWeatherMap API Key

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=london&appid=ba64f9337da1607e234546e39230c547`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <div className="weather-box">
        <h2>Weather Report</h2>
        <p>I can give you a weather report about your city !</p>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Report</button>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="result">
            <p><strong>Weather:</strong> {weather.weather[0].main}</p>
            <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
            <p><strong>Description:</strong> {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
