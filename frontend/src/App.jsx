import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";
import { debounce } from "lodash";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [boxes, setBoxes] = useState([
    {
      image:
        "https://static.wikia.nocookie.net/gunplabuilders/images/f/fa/RG-RX-78-2-Gundam-(2.0)-box.jpg",
      content: "RG 1/144 RX-78-2 Gundam [Ver. 2.0]",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png",
      content: "MG 1/100 ASW-G-08 Gundam Barbatos",
    },
    {
      image:
        "https://static.wikia.nocookie.net/gunplabuilders/images/2/2e/MG-Gundam-NT-1-%28Ver.2.0%29-box.jpg",
      content: "MG 1/100 RX-78NT-1 Gundam NT-1 Alex Ver 2.0",
    },
    {
      image:
        "https://static.wikia.nocookie.net/gunplabuilders/images/b/b7/PG-Unicorn-Gundam-box.jpg",
      content: "PG 1/60 Unicorn Gundam",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2786/5582/files/boxart_45828b86-66cc-4905-b463-906b778f84bf.jpg",
      content: "HG 1/144 Gundam Calibarn",
    },
    {
      image:
        "https://ae01.alicdn.com/kf/Sa5c9f138c7ac4292bd149bba57923c71l.jpg",
      content: "SD Gundam Aerial EX-Standard Gunpla",
    },
    { image: "", content: "Box 7" },
    { image: "", content: "Box 8" },
    { image: "", content: "Box 9" },
    { image: "", content: "Box 10" },
    { image: "", content: "Box 11" },
    { image: "", content: "Box 12" },
  ]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [boxCounter, setBoxCounter] = useState(boxes.length);

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleFilter = () => {
    console.log("Filter button clicked");
  };

  const loadMoreBoxes = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      setBoxes((prevBoxes) => {
        const newBoxes = [
          {
            image: "https://via.placeholder.com/150",
            content: `Box ${prevBoxes.length + 1}`,
          },
          {
            image: "https://via.placeholder.com/150",
            content: `Box ${prevBoxes.length + 2}`,
          },
          {
            image: "https://via.placeholder.com/150",
            content: `Box ${prevBoxes.length + 3}`,
          },
          {
            image: "https://via.placeholder.com/150",
            content: `Box ${prevBoxes.length + 4}`,
          },
        ];

        return [...prevBoxes, ...newBoxes];
      });

      setBoxCounter((prevCounter) => {
        const updatedCounter = prevCounter + 4;
        console.log(`Box counter: ${updatedCounter}`);

        if (updatedCounter >= 116) {
          setHasMore(false);
        }

        return updatedCounter;
      });

      setLoading(false);
    }, 1000);
  };

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 10) {
      loadMoreBoxes();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [boxes, boxCounter]);

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
        {boxes.map((box, index) => (
          <Box key={index} image={box.image} content={box.content} />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default App;
