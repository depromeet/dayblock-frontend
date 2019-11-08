import React from "react";
import "../../resources/sass/login/LoginModal.scss";
import mainLogo from "../../resources/images/main-logo.png";

const LoginModal = props => {
  const { setVisible } = props;
  const modalClose = e => {
    setVisible(false);
  };
  return (
    <React.Fragment>
      <div className="Modal-overlay" onClick={modalClose} />
      <div className="Modal">
        <img src={mainLogo} alt={mainLogo} />
        <h2 className="title">Sign - In</h2>
        <div className="content">
          <p className="left">email</p>
          <input type="email"></input>
          <p className="left">Password</p>
          <input type="Password"></input>
          <p className="right clickable">Forget your password?</p>
          <div>
            <button>Login</button>
          </div>
          <p className="clickable">Create your dayblock account</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginModal;
