import React, { useState } from "react";
import "./App.css";
import Box from "./Box";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`); // Optional: Handle search logic
  };

  return (
    <>
      <div className="testButton">
        <button>Wishlist</button>
        <button>Collection</button>
        <button>Login</button>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
      
      <div className="grid">
        <Box image="https://static.wikia.nocookie.net/gunplabuilders/images/f/fa/RG-RX-78-2-Gundam-(2.0)-box.jpg" />
        <Box content="Box 2" />
        <Box content="Box 3" />
        <Box content="Box 4" />
        <Box content="Box 5" />
        <Box content="Box 6" />
        <Box content="Box 7" />
        <Box content="Box 8" />
        <Box content="Box 9" />
        <Box content="Box 10" />
        <Box content="Box 11" />
        <Box content="Box 12" />
      </div>
    </>
  );
};

export default App;
