import React from "react";
import { Redirect } from "react-router-dom";
import "../../interceptor/headerInterceptor";
import { Header } from "../layout";

const Home = () => {
  const isLogined = !!localStorage.getItem("token");
  return (
    <React.Fragment>
      {!isLogined && <Redirect to="/login" />}
      <Header/>
      <div>router test</div>
    </React.Fragment>
  );
};

export default Home;
