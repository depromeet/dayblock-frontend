import React from "react";
import { Redirect } from "react-router-dom";
import "../../interceptor/headerInterceptor";

const Home = () => {
  const isLogined = !!localStorage.getItem("token");
  return (
    <React.Fragment>
      {!isLogined && <Redirect to="/login" />}
      <div>router test</div>
    </React.Fragment>
  );
};

export default Home;
