import React from "react";
import { BlockTags } from "../molecules";
import BlockProgress from "./BlockProgress";
import more from "../../resources/images/home/more.svg";

const Block = props => {
  const { isMain } = props;
  const { percentage, createDate, blockTitle, blockTags } = props.data;
  return (
    <div className={`home-block ${isMain ? "main-block" : ""}`}>
      <div className="flex-start">
        <div className="block-img"></div>
        <div className="block-more" />
      </div>
      <h2>{blockTitle}</h2>
      <BlockTags blockTags={blockTags} />
      <BlockProgress percentage={percentage} />
      <p className="create-date">{createDate}</p>
    </div>
  );
};

export default Block;
