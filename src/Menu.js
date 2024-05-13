import React from "react";
import { NavLink } from "react-router-dom";
// import Homepage1 from "./Homepage1";
// import HomePageOne from "./Components/Homepage1/HomePageOne";

const Menu = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        Homepage 1
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/about">
        Homepage 2
      </NavLink>
    </>
  );
};

export default Menu;
