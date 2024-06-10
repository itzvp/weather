import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .app-container {
    text-align: center;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .search-bar {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 20px;
  }

  .search-input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
  }

  .search-button {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .weather-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .weather-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    max-width: 200px;
    text-align: center;
    flex: 1 1 calc(100% - 40px);
    margin: 20px;
  }

  @media (min-width: 600px) {
    .weather-card {
      flex: 1 1 calc(50% - 40px);
    }
  }

  @media (min-width: 900px) {
    .weather-card {
      flex: 1 1 calc(33.33% - 40px);
    }
  }

  @media (min-width: 1200px) {
    .weather-card {
      flex: 1 1 calc(25% - 40px);
    }
  }
`;

export const lightTheme = {
  body: "#fff",
  text: "#000",
};

export const darkTheme = {
  body: "#1a1a1a",
  text: "#fff",
};
