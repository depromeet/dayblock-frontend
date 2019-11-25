import React, { useState } from "react";
import Axios from "axios";

import "../../resources/sass/login/LoginModal.scss";
import mainLogo from "../../resources/images/main-logo.png";
import { SERVER_URL } from ".";

const LoginModal = props => {
  const { setVisible } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const modalClose = () => {
    setVisible(false);
  };

  const onkeypressEnter = e => {
    if (e.key === "Enter") {
      login();
    }
  };
  const login = () => {
    console.log(email, password);
    Axios({
      method: "post",
      url: `${SERVER_URL}/api/auth/login`,
      data: {
        email,
        password
      },
      config: { headers: { "Content-Type": "application/json" } }
    })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.accessToken);
          document.location.href = "/";
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="Modal-overlay" onClick={modalClose} />
      <div className="Modal">
        <img src={mainLogo} alt={mainLogo} />
        <h2 className="title">Sign - In</h2>
        <div className="content">
          <p className="left">email</p>
          <input
            type="email"
            id="email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          ></input>
          <p className="left">Password</p>
          <input
            type="Password"
            id="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            onKeyPress={onkeypressEnter}
          ></input>
          <p className="right clickable">Forget your password?</p>
          <div>
            <button onClick={login}>Login</button>
          </div>
          <p className="clickable">Create your dayblock account</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginModal;
