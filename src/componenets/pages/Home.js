import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Blocks from "../organisms/Blocks";

const Home = () => {
  //TODO mock 데이터로 block리스트 블러오기
  const body = (
    <main>
      <Blocks />
    </main>
  );
  return <MainTemplate body={body} />;
};

export default Home;
