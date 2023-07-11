import React from "react";

const Home = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>¡Bienvenido a Holy Place!</h1>
      <p style={descriptionStyle}>
        Descubrí nuestros <span style={highlight}>Sprinkles</span> en la página
        de productos 😀
      </p>
    </div>
  );
};

const containerStyle = {
  textAlign: "center",
  padding: "2rem",
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
};

const descriptionStyle = {
  fontSize: "1.5rem",
};

const highlight = {
  fontStyle: "italic",
  fontWeight: "bold",
  color: "#C88",
};

export default Home;