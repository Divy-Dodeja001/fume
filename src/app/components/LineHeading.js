import React from "react";
import "../css/lineheading.css";

const LineHeading = ({ title }) => {
  return (
    <div className="d-flex align-items-center wrapper">
      <div className="line"></div>
      <h2 className="mx-2 mb-0 text-uppercase title">{title}</h2>
      <div className="line"></div>
    </div>
  );
};

export default LineHeading;
