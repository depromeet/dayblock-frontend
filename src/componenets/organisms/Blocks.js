import React from "react";
import "./Block.scss";
import Block from "./Block";

const Blocks = props => {
  const { data, modifyBlock, deleteBlock } = props;
  const blockContainers = data.map((b, idx) => {
    let isMain = false;
    if (idx === 0) {
      isMain = true;
    }
    return (
      <Block
        key={idx}
        isMain={isMain}
        data={b}
        modifyBlock={modifyBlock}
        deleteBlock={deleteBlock}
      />
    );
  });
  return <div className="blocks-div">{blockContainers}</div>;
};

export default Blocks;
