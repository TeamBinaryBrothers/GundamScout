import React from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <div className="wishlist-button-container">
      <Link to="/" className="back-button">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Wishlist;
