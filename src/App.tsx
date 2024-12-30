import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState<string>("");

  const [weatherData, setWeatherData] = useState<any>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(city);
    await getWeather(city);
    setCity("");
  };

  const getWeather = async (city: string) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f65ce3193921ab07cd774dcf0feb2ee`
    );

    console.log(res.data);

    setWeatherData(res.data);
  };

  return (
    <main className="w-screen h-screen p-3">
      <h1 className="w-full text-center font-bold text-3xl">
        React Weather App
      </h1>
      <form
        className="w-96 mx-auto p-3 rounded"
        onSubmit={(e: any) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="city" className="vk-form-label">
            City
          </label>
          <input
            type="text"
            className="vk-form-input"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        <div className="pt-3">
          <button type="submit" className="vk-btn-blue w-full">
            Get Weather
          </button>
        </div>
      </form>

      {weatherData && (
        <div className="w-96 mx-auto p-3 mt-3 rounded shadow border">
          <h1 className="text-center font-semibold text-2xl">
            {weatherData.name}
          </h1>
          <h1 className="text-center font-bold text-3xl pt-2">
            {weatherData.main.temp - 273.15}°C
          </h1>
        </div>
      )}
    </main>
  );
}

export default App;
