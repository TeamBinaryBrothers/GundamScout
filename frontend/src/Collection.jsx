import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="collection-button-container">
      <Link to="/" className="back-button">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
};

export default Collection;
