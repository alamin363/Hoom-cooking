import React from "react";
import "flowbite-react";
import "flowbite";
import { Link, NavLink } from "react-router-dom";
import navicon from "../../img/logo-cp.svg";
import { Navbar } from "flowbite-react";
const Navber = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="https://flowbite.com/">
        <img src={navicon} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sumaiya Bagery
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
          active={true}
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
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/review"
        >
          Review
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/login"
        >
          Login
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navber;
