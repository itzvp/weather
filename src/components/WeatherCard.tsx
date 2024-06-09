// import { Card } from "@mui/material";
// import React from "react";

// interface Weather {
//   name: string;
//   main: {
//     temp: number;
//     humidity: number;
//   };
//   weather: {
//     description: string;
//   }[];
//   wind: {
//     speed: number;
//   };
//   sys: {
//     country: string;
//   };
// }

// interface WeatherCardProps {
//   weather: Weather;
// }

// const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
//   return (
//     <Card
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "16px",
//         maxWidth: "200px",
//         textAlign: "center",
//       }}
//     >
//       <h2>
//         {weather.name}, {weather.sys.country}
//       </h2>
//       <p>{weather.main.temp}°C</p>
//       <p>{weather.weather[0].description}</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//       <p>Wind: {weather.wind.speed} m/s</p>
//     </Card>
//   );
// };

// export default WeatherCard;

// WeatherCard.tsx
import React from "react";
import { Card } from "@mui/material";

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
    </Card>
  );
};

export default WeatherCard;
