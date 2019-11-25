import React from "react";
import { Redirect } from "react-router-dom";
import "../../interceptor/headerInterceptor";
import { Header, Nav } from "../layout";

const MainTemplate = props => {
  // const isLogined = !!localStorage.getItem("token");
  const isLogined = true;
  return (
    <React.Fragment>
      {!isLogined && <Redirect to="/login" />}
      <Header />
      <Nav />
      {props.body}
    </React.Fragment>
  );
};

export default MainTemplate;
