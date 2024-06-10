import React from "react";
import { Card } from "@mui/material";
import moment from "moment";
interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <Card className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
    </Card>
  );
};

export default WeatherCard;
