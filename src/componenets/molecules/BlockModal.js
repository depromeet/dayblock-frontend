import React, { useState, useCallback } from "react";
import "./BlockModal.scss";

const defaultBlock = {
  blockTitle: "",
  blockTags: new Array(3).fill(null)
};

const BlockModal = props => {
  const { setVisible, data } = props;
  const modalClose = () => {
    setVisible(false);
  };
  const [block, setBlock] = useState(data ? data : defaultBlock);
  const onTitileChange = useCallback(
    e => {
      block.blockTitle = e.target.value;
      setBlock({ blockTitle: e.target.value, ...block });
    },
    [block]
  );

  const tags = block.blockTags.map((t, idx) => {
    return <input type="text" key={idx} idx={idx} defaultValue={t}></input>;
  });
  return (
    <React.Fragment>
      <div className="Modal-overlay" onClick={modalClose} />
      <div className="Modal">
        <div className="content">
          <div className="button-group">
            <button className="left selected">My block</button>
            <button className="right">Team block</button>
          </div>
          <div className="block-img">{block.blockTitle.charAt(0)}</div>
          <p className="left">Name Project</p>
          <input
            type="text"
            id="block_title"
            defaultValue={block.blockTitle}
            onChange={onTitileChange}
          ></input>
          <p className="left">Project tag</p>
          {tags}
          <div>
            <button>Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockModal;
