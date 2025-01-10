import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";

const Collection = () => {
  return (
    <div>
      <h1 className="collection-header">Collection</h1>
      <div className="collection-button-container">
        <Link to="/" className="back-button">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
