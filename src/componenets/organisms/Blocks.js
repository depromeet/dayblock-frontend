import React from "react";
import "./Block.scss";
import { BlockTags } from "../molecules";
import BlockProgress from "./BlockProgress";

const Blocks = () => {
  const percentage = 80;
  const createDate = "19.11.28";
  return (
    <div className="home-block">
      <div className="block-img"></div>
      <h2>dsdsaddsa</h2>
      <BlockTags />
      <BlockProgress percentage={percentage} />
      <p className="create-date">{createDate}</p>
    </div>
  );
};

export default Blocks;
