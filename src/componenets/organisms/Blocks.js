import React, { useState } from "react";
import "./Block.scss";
import Block from "./Block";

const Blocks = props => {
  const { data } = props;
  const blockContainers = data.map((b, idx) => {
    let isMain = false;
    if (idx === 0) {
      isMain = true;
    }
    return <Block key={idx} isMain={isMain} data={b} />;
  });
  return <div className="blocks-div">{blockContainers}</div>;
};

export default Blocks;
