import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (locations: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location) {
      const locationsArray = location.split(",").map((loc) => loc.trim());
      onSearch(locationsArray);
      setLocation("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter cities or zip codes separated by commas"
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
