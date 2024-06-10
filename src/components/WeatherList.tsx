import React from "react";
import WeatherCard from "./WeatherCard";

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

interface WeatherListProps {
  weathers: Weather[];
}

const WeatherList: React.FC<WeatherListProps> = ({ weathers }) => {
  return (
    <div className="weather-list">
      {weathers.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
