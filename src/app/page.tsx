// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import SearchBar from "@/components/SearchBar";
// import WeatherList from "@/components/WeatherList";
// import ToggleButton from "@/components/ToggleButton";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles, lightTheme, darkTheme } from "@/styles/GlobalStyles";
// import useDarkMode from "@/hooks/userDarkMode";

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

// const App = () => {
//   const [weathers, setWeathers] = useState<Weather[]>([]);
//   const [theme, toggleTheme] = useDarkMode();

//   const fetchWeather = async (locations: string[]) => {
//     try {
//       const weatherData = await Promise.all(
//         locations.map(async (location) => {
//           const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather`,
//             {
//               params: {
//                 q: location,
//                 units: "metric",
//                 appid: "a85ab06188c47e748b59e0229aa7ec1f",
//               },
//             }
//           );
//           return response.data;
//         })
//       );
//       setWeathers(weatherData);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       alert("Error fetching weather data. Please try again.");
//     }
//   };

//   return (
//     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <div
//         style={{
//           textAlign: "center",
//           padding: "20px",
//           // position: "fixed"
//         }}
//       >
//         <h1>Weather App</h1>
//         <ToggleButton toggleTheme={toggleTheme} theme={theme} />
//         <SearchBar onSearch={fetchWeather} />
//         <WeatherList weathers={weathers} />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;

// App.tsx
"use client";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import WeatherList from "@/components/WeatherList";
import ToggleButton from "@/components/ToggleButton";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "@/styles/GlobalStyles";
import useDarkMode from "@/hooks/userDarkMode";

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

const App = () => {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const [theme, toggleTheme] = useDarkMode();

  const fetchWeather = async (locations: string[]) => {
    try {
      const weatherData = await Promise.all(
        locations.map(async (location) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                q: location,
                units: "metric",
                appid: "a85ab06188c47e748b59e0229aa7ec1f",
              },
            }
          );
          return response.data;
        })
      );
      setWeathers(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app-container">
        <h1>Weather App</h1>
        <ToggleButton toggleTheme={toggleTheme} theme={theme} />
        <SearchBar onSearch={fetchWeather} />
        <WeatherList weathers={weathers} />
      </div>
    </ThemeProvider>
  );
};

export default App;
