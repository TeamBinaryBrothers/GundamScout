import React from "react";
import "./Box.css";

const Box = ({ content, image }) => {
  return (
    <div className="box">
      {image && <img src={image} alt={content} className="box-image" />}
      <div className="box-content">{content}</div>
    </div>
  );
};

export default Box;
