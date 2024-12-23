import React, { useState } from "react";
import "./App.css";
import Box from "./Box";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleFilter = () => {
    console.log("Filter button clicked");
  };

  return (
    <>
      <div className="filterButton">
        <button onClick={handleFilter}>Filter</button>
      </div>

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
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid">
        <Box
          image="https://static.wikia.nocookie.net/gunplabuilders/images/f/fa/RG-RX-78-2-Gundam-(2.0)-box.jpg"
          content="RG 1/144 RX-78-2 Gundam [Ver. 2.0]"
        />
        <Box
          image="https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png"
          content="MG 1/100 ASW-G-08 Gundam Barbatos"
        />
        <Box
          image="https://static.wikia.nocookie.net/gunplabuilders/images/2/2e/MG-Gundam-NT-1-%28Ver.2.0%29-box.jpg"
          content="MG 1/100 RX-78NT-1 Gundam NT-1 Alex Ver 2.0"
        />
        <Box
          image="https://static.wikia.nocookie.net/gunplabuilders/images/b/b7/PG-Unicorn-Gundam-box.jpg"
          content="PG 1/60 Unicorn Gundam"
        />
        <Box
          image="https://cdn.shopify.com/s/files/1/2786/5582/files/boxart_45828b86-66cc-4905-b463-906b778f84bf.jpg"
          content="HG 1/144 Gundam Calibarn"
        />
        <Box
          image="https://ae01.alicdn.com/kf/Sa5c9f138c7ac4292bd149bba57923c71l.jpg"
          content="SD Gundam Aerial EX-Standard Gunpla"
        />
        <Box image="" content="Box 7" />
        <Box image="" content="Box 8" />
        <Box image="" content="Box 9" />
        <Box image="" content="Box 10" />
        <Box image="" content="Box 11" />
        <Box image="" content="Box 12" />
      </div>
    </>
  );
};

export default App;
