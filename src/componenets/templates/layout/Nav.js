import React from "react";
import { Link } from 'react-router-dom';
import home from "../../../resources/images/nav/home.svg"
import schedule from "../../../resources/images/nav/schedule.svg"
import kanban from "../../../resources/images/nav/kanban.svg"
import report from "../../../resources/images/nav/report.svg"
import settings from "../../../resources/images/nav/settings.svg"
import "./nav.css";

const Nav = () => {
  const onClick = (e) => {
    e.target.closest(".nav").querySelector(".clicked").classList.remove("clicked");
    e.currentTarget.classList.add("clicked");
  };
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/blocks"><span onClick={onClick}><img src={home} alt={home}></img></span></Link>
        <Link to="/schedule"><span className="clicked" onClick={onClick}><img src={schedule} alt={schedule}></img></span></Link>
        <Link to="/kanban"><span onClick={onClick}><img src={kanban} alt={kanban}></img></span></Link>
        <Link to="/report"><span onClick={onClick}><img src={report} alt={report}></img></span></Link>
      </div>
      <Link to="/settings"><span onClick={onClick}><img src={settings} alt={settings}></img></span></Link>
    </nav>
  );
};

export default Nav;
