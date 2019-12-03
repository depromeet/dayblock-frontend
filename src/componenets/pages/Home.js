import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Blocks from "../organisms/Blocks";
import home from "../../resources/images/home/icon-plus.svg";

const Home = () => {
  //TODO mock 데이터로 block리스트 블러오기
  const body = (
    <main style={{ padding: "56px 42px" }}>
      <h1>My block</h1>
      <Blocks />
      <button className="block-add-btn">
        <img src={home} alt={home}></img>
      </button>
      <h1>Team block</h1>
    </main>
  );
  return <MainTemplate body={body} />;
};

export default Home;
