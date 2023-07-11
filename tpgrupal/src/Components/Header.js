import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={contentStyle}>
        <img
          src="../assets/imgs/HolyPlaceLogo2.png"
          style={imageStyle}
          alt="Holy Place logo"
        ></img>
        <h1 style={titleStyle}>Holy Place</h1>
      </div>
      <Navbar />
    </header>
  );
};

const headerStyle = {
  background: "linear-gradient(45deg, #C8A2C8, #B666D2)",
  padding: "1rem",
  textAlign: "center",
};

const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
};

const imageStyle = {
  width: "50px",
  height: "50px",
  marginRight: "0.5rem",
};

const titleStyle = {
  fontSize: "2rem",
  color: "#fff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontFamily: "Pacifico, cursive",
};

export default Header;
