import React from "react";

import "./ProgressBar.css";

const ProgressBar = ({ percentage, status }) => {
  const progressStyle = {
    width: `${percentage}%`,
    backgroundColor: status,
  };

  return (
    <div className="progress--bar">
      <div className="progress--fill" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
