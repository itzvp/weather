import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

interface ToggleButtonProps {
  toggleTheme: () => void;
  theme: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleTheme, theme }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          name="themeToggle"
          color="default"
        />
      }
      label={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      style={{ marginBottom: "20px", fontSize: "16px" }}
    />
  );
};

export default ToggleButton;
