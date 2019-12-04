import React, { useState, useCallback } from "react";
import MainTemplate from "../templates/MainTemplate";
import Blocks from "../organisms/Blocks";
import home from "../../resources/images/home/icon-plus.svg";
import BlockModal from "../molecules/BlockModal";

const Home = () => {
  //TODO mock 데이터로 block리스트 블러오기
  let id = 3;
  const [blockModalVisible, setBlockModalVisible] = useState(false);
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      blockTitle: "분류1",
      percentage: 81,
      createDate: "19.11.28",
      blockTags: ["A", "d"]
    },
    {
      id: 2,
      blockTitle: "분류2",
      percentage: 60,
      createDate: "19.11.28",
      blockTags: []
    },
    {
      id: 3,
      blockTitle: "Test",
      percentage: 0,
      createDate: "19.11.28",
      blockTags: ["C"]
    }
  ]);
  const onAddButtonClick = () => {
    setBlockModalVisible(!blockModalVisible);
  };
  const getIncreaseID = useCallback(() => {
    return ++id;
  }, [id]);
  const addBlock = blockData => {
    setBlocks(
      blocks.concat({
        id: getIncreaseID(),
        ...blockData
      })
    );
  };
  const modifyBlock = blockData => {
    setBlocks(
      blocks.map(b => (blockData.id === b.id ? { ...b, ...blockData } : b))
    );
  };

  const deleteBlock = id => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const body = (
    <main style={{ padding: "56px 42px" }}>
      {blockModalVisible ? (
        <BlockModal setVisible={setBlockModalVisible} saveCallback={addBlock} />
      ) : (
        ""
      )}
      <h1>My block</h1>
      <Blocks
        data={blocks}
        modifyBlock={modifyBlock}
        deleteBlock={deleteBlock}
      />
      <button className="block-add-btn" onClick={onAddButtonClick}>
        <img src={home} alt={home}></img>
      </button>
      {/* <h1>Team block</h1> // TODO : 일단 개인 블록 이후 작업*/}
    </main>
  );
  return <MainTemplate body={body} />;
};

export default Home;
