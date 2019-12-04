import React, { useState } from "react";
import { BlockTags } from "../molecules";
import BlockProgress from "./BlockProgress";
import BlockMore from "./BlockMore";
import BlockModal from "../molecules/BlockModal";

const Block = props => {
  const { isMain, modifyBlock, deleteBlock } = props;
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const { id, percentage, createDate, blockTitle, blockTags } = props.data;
  const [dropdownShow, setDropDownShow] = useState(false);
  const onClickMore = () => {
    setDropDownShow(!dropdownShow);
  };
  const onClickDelete = () => {
    deleteBlock(id);
  };
  return (
    <div className={`home-block ${isMain ? "main-block" : ""}`}>
      {blockModalVisible ? (
        <BlockModal
          setVisible={setBlockModalVisible}
          data={props.data}
          saveCallback={modifyBlock}
        />
      ) : (
        ""
      )}
      <div className="flex-start">
        <div className="block-img">{blockTitle.charAt(0)}</div>
        <div onClick={onClickMore}>
          <div className="block-more-btn"></div>
          {dropdownShow ? (
            <BlockMore
              setDropDwonShow={setDropDownShow}
              onClickDelete={onClickDelete}
              setBlockModalVisible={setBlockModalVisible}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <h2>{blockTitle}</h2>
      <BlockTags blockTags={blockTags} />
      <BlockProgress percentage={percentage} />
      <p className="create-date">{createDate}</p>
    </div>
  );
};

export default Block;
