import React , { useState, useEffect } from "react";
import Axios from "axios";
import { SERVER_URL, UserInfo } from "../molecules";
import "../../interceptor/headerInterceptor";
import "./header.css";

const Header = () => {
  const isLogined = !!localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    if(!isLogined) return;

    Axios.get(`${SERVER_URL}/api/profile`)
    .then((res) => {
      if(res.status === 200) {
        setUserInfo(res.data);
      }
    })
    .catch(error => {
      console.error(error);
      localStorage.removeItem("token");
    })
  }, []);

  return (
    <header className="header">
      <div className="header-logo"></div>
      {userInfo? <UserInfo data={userInfo}/> : ''}
    </header>
  );
};

export default Header;
