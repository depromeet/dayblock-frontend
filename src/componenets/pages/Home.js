import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Blocks from "../organisms/Blocks";

const Home = () => {
  //TODO mock 데이터로 block리스트 블러오기
  const body = (
    <main>
      <h1>My block</h1>
      <div className="blocks-div">
        <Blocks />
        <Blocks />
        <Blocks />
        <Blocks />
        <Blocks />
      </div>
    </main>
  );
  return <MainTemplate body={body} />;
};

export default Home;
