import React from "react";
import { BlockProgressBar } from "../molecules";

const BlockProgress = props => {
  const { percentage } = props;
  return (
    <div className="progress-div" style={{ width: "240px" }}>
      <span name="v" style={{ marginLeft: `calc(${percentage}%)` }}>
        {percentage}%
      </span>
      <BlockProgressBar percentage={percentage} />
    </div>
  );
};

export default BlockProgress;
