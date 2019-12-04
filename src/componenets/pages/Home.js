import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Blocks from "../organisms/Blocks";
import home from "../../resources/images/home/icon-plus.svg";
import BlockModal from "../molecules/BlockModal";

const Home = () => {
  //TODO mock 데이터로 block리스트 블러오기
  const [visible, setVisible] = useState(false);
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
  const onAddButtonClick = () => {
    setVisible(!visible);
  };
  const addBlock = blockData => {
    setBlocks(blocks.concat(blockData));
  };
  const body = (
    <main style={{ padding: "56px 42px" }}>
      {visible ? (
        <BlockModal setVisible={setVisible} addBlock={addBlock} />
      ) : (
        ""
      )}
      <h1>My block</h1>
      <Blocks data={blocks} />
      <button className="block-add-btn" onClick={onAddButtonClick}>
        <img src={home} alt={home}></img>
      </button>
      {/* <h1>Team block</h1> // TODO : 일단 개인 블록 이후 작업*/}
    </main>
  );
  return <MainTemplate body={body} />;
};

export default Home;
