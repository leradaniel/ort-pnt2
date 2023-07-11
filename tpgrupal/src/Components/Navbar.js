import React from "react";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>
        Home
      </a>
      <a href="/informacion" style={linkStyle}>
        Información
      </a>
      <a href="/productos" style={linkStyle}>
        Productos
      </a>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(45deg, #FFE4E1, #FFB6C1)",
  padding: "1rem",
  borderRadius: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "5px",
  background: "#9f56a5",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  cursor: "pointer",
};

export default Navbar;
