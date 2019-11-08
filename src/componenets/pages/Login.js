import React, { useState } from "react";
import "../../resources/sass/login/Login.scss";
import { LoginModal } from "../molecules";
// import prev from "../../resources/images/login/icon-back.svg";
// import next from "../../resources/images/login/icon-next.svg";

const Login = () => {
  const onLoginButtonClick = () => {
    setVisible(!visible);
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className="slide">
      {visible ? <LoginModal setVisible={setVisible} /> : ""}
      <input type="radio" name="pos" id="pos1" defaultChecked />
      <input type="radio" name="pos" id="pos2" />
      <input type="radio" name="pos" id="pos3" />
      <input type="radio" name="pos" id="pos4" />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="center">
        <button className="login-btn" onClick={onLoginButtonClick}>
          Get Started
        </button>
      </div>
      <p className="bullet center">
        {/* <img src={prev} alt={prev} /> */}
        <label htmlFor="pos1">1</label>
        <label htmlFor="pos2">2</label>
        <label htmlFor="pos3">3</label>
        <label htmlFor="pos4">4</label>
        {/* <img src={next} alt={next} /> */}
      </p>
    </div>
  );
};

export default Login;
