import React, { Component } from "react";

const Nav = () => {
  return (
    <div className="Navbar">
      <img className="Navbar--image" src={require("../images/no.gif")} />
      <h3 className="Navbar--title">Meme Machine</h3>
      <p className="Navbar--subtitle"> A React JS practice project</p>
      <img className="Navbar--image" src={require("../images/ok.gif")} />
    </div>
  );
};

export default Nav;
