import React from "react";
import "./Specials.css";
import sofa from "../../assets/sofa.png";

const Special = () => {
  return (
    <>
      <div className="special">
        <div className="special-header">
          <img src={sofa} alt="Header Image" />
        </div>
        <div className="special-content">
          <h2>Get Inspired</h2>
          <p>
          Discover our favorite looks across the home to inspire your space.
          </p>
        </div>
      </div>
    </>
  );
};

export default Special;
