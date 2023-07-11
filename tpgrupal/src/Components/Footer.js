import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>2023 - Todos los derechos reservados®</p>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  background: "linear-gradient(45deg, #C8A2C8, #B666D2)",
  padding: "1rem",
  textAlign: "center",
};

const textStyle = {
  margin: "0",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#FFF",
  letterSpacing: "1px",
};

export default Footer;
