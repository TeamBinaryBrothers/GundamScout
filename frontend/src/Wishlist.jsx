import React from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <div>
      <h1 className="wishlist-header">Wishlist</h1>
      <div className="wishlist-button-container">
        <Link to="/" className="back-button">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
