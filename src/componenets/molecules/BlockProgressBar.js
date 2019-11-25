import React from "react";

const BlockProgressBar = props => {
  const { percentage } = props;
  return (
    <div className="progress-bar">
      <div className="progress-value" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default BlockProgressBar;
