import { useEffect, useState } from "react";
import GetLondonForecast from "../../services/GetLondonForecast";

type Condition = {
  text: string;
  icon: string;
};

type Day = {
  condition: Condition;
};

type ForecastDay = {
  date: string;
  day: Day;
  astro: any; 
};

type Forecast = {
  forecastday: ForecastDay[];
};

type WeatherData = {
  location: any; 
  forecast: Forecast;
};

const GetLondonWeather = () => {
  const [londonForecast, setLondonForecast] = useState<ForecastDay[]>([]);

  useEffect(() => {
    fetchLondonForecast();
  }, []);

  const fetchLondonForecast = async () => {
    const londonForecast: WeatherData = await GetLondonForecast();
    setLondonForecast(londonForecast.forecast.forecastday);
  };

  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      {londonForecast.map((day, index) => (
        <div key={index} className="max-w-xs p-4 border-black border-2 rounded-md flex flex-col justify-center items-center">
            <h3>{day.date}</h3>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GetLondonWeather;
