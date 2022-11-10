import React, { useContext } from "react";
import "flowbite-react";
import "flowbite";
import { Link, NavLink } from "react-router-dom";
import navicon from "../../img/logo-cp.svg";
import { Navbar } from "flowbite-react";
import { contextProvider } from "../Context/AuthContext";
const Navber = () => {
  const { user, LogOut } = useContext(contextProvider);
  let activeStyle = {
    textDecoration: "underline",
  };
  const LogOutNow = () => {
    LogOut();
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="https://flowbite.com/">
        <img src={navicon} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HooM Cook
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
          active="true"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/blog"
        >
          Blog
        </NavLink>
        {user?.uid && (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/review"
          >
           My Review
          </NavLink>
        )}

        {user?.uid ? (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={LogOutNow}
          >
            LogOut
          </NavLink>
        ) : (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navber;
