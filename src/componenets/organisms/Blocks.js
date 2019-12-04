import React, { useState } from "react";
import "./Block.scss";
import Block from "./Block";

const Blocks = () => {
  const [blocks, setBlocks] = useState([
    {
      blockTitle: "분류1",
      percentage: 81,
      createDate: "19.11.28",
      blockTags: ["A", "d"]
    },
    {
      blockTitle: "분류2",
      percentage: 60,
      createDate: "19.11.28",
      blockTags: []
    },
    {
      blockTitle: "Test",
      percentage: 0,
      createDate: "19.11.28",
      blockTags: []
    }
  ]);
  const blockContainers = blocks.map((b, idx) => {
    let isMain = false;
    if (idx === 0) {
      isMain = true;
    }
    return <Block key={idx} isMain={isMain} data={b} />;
  });
  return <div className="blocks-div">{blockContainers}</div>;
};

export default Blocks;
