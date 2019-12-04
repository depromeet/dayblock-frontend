import React, { useState, useCallback } from "react";
import "./BlockModal.scss";

const defaultBlock = {
  blockTitle: "",
  blockTags: new Array(3).fill(null)
};

const BlockModal = props => {
  const { setVisible, addBlock, data } = props;
  const modalClose = () => {
    setVisible(false);
  };
  const [block, setBlock] = useState(data ? data : defaultBlock);
  const onTitileChange = useCallback(
    e => {
      const title = e.target.value;
      if (title.length > 0) {
        document.getElementById("alert_block_title").style.display = "none";
      }
      block.blockTitle = title;
      setBlock({ blockTitle: title, ...block });
    },
    [block]
  );

  const onTagChange = useCallback(
    e => {
      const idx = e.target.getAttribute("idx");
      block.blockTags[idx] = e.target.value;
      setBlock({ blockTags: block.blockTags, ...block });
    },
    [block]
  );

  const handleSave = () => {
    if (block.blockTitle.length === 0) {
      document.getElementById("alert_block_title").style.display = "";
      return;
    }
    //TODO: 데이터 넘기기 전에 tags 빈값 필터
    addBlock(block);
    modalClose();
  };

  const tags = block.blockTags.map((t, idx) => {
    return (
      <input
        type="text"
        key={idx}
        idx={idx}
        defaultValue={t}
        onChange={onTagChange}
      ></input>
    );
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
          <p
            className="alert"
            id="alert_block_title"
            style={{ display: "none" }}
          >
            Please put in a name
          </p>
          <p className="left">Project tag</p>
          {tags}
          <div>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockModal;
