import React, { useState } from "react";
import "./UserInfo.scss";
import arrownDownSvg from "../../resources/images/header/icon-arrow-down.svg";
import notiSvg from "../../resources/images/header/notifications-on.svg";
import UserDropDown from "../organisms/UserDropDown";

const UserInfo = props => {
  const { name, email, url } = props.data;
  const [dropdownShow, setDropDwonShow] = useState(false);
  const onClickDropDown = e => {
    e.target.closest(".arrow-down").classList.toggle("click");
    setDropDwonShow(!dropdownShow);
  };
  return (
    <React.Fragment>
      <img src={notiSvg} alt={notiSvg}></img>
      <div className="user-info">
        <img src={url} alt={url}></img>
        <span className="name">{name}</span>
        <span>{email}</span>
      </div>
      <span className="arrow-down" onClick={onClickDropDown}>
        <img src={arrownDownSvg} alt={arrownDownSvg}></img>
        {dropdownShow ? <UserDropDown setDropDwonShow={setDropDwonShow} /> : ""}
      </span>
    </React.Fragment>
  );
};

export default UserInfo;
