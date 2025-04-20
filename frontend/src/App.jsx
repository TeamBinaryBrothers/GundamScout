import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Box from "./Box";
import { debounce } from "lodash";
import axios from "axios";
import Wishlist from "./Wishlist";
import Collection from "./Collection";
import Login from "./Login";

const MainLayout = () => {
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [boxCounter, setBoxCounter] = useState(0);

  // Fetching API
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get("http://localhost:8080/gundams/init");
      setBoxes(response.data.gundams);
    };
    fetchAPI();
  }, []);

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
        const newBoxes = Array.from({ length: 12 }, (_, i) => ({
          image: "",
          content: `Box ${prevBoxes.length + i + 1}`,
        }));
        return [...prevBoxes, ...newBoxes];
      });

      setBoxCounter((prevCounter) => {
        const updatedCounter = prevCounter + 12;
        console.log(`Box counter: ${updatedCounter}`);
        if (updatedCounter >= 120) setHasMore(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [boxes, boxCounter]);

  return (
    <>
      <div className="filterButton">
        <button onClick={handleFilter}>Filter</button>
      </div>

      <div className="testButton">
        <Link to="/wishlist">
          <button>Wishlist</button>
        </Link>
        <Link to="/collection">
          <button>Collection</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      {location.pathname === "/" && (
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="grid">
              {boxes.map((box, index) => (
                <Box key={index} image={box.image} content={box.content} />
              ))}
              {loading && <div>Loading...</div>}
            </div>
          }
        />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
