import React from "react";

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <div style={profileContainerStyle}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/587ca9f4579fb302489fb7da/1632016414590-HE54AJHRINWNUQBR7YS4/NoraKay_Chef_small.jpeg?format=1000w"
          alt="Juliet Perez"
          style={profilePictureStyle}
        />
        <h1 style={nameStyle}>Juliet Perez</h1>
        <p style={descriptionStyle}>
          Apasionada cocinera con más de 10 años de experiencia creando
          deliciosas obras maestras dulces.
        </p>
      </div>
      <div style={excerptContainerStyle}>
        <h2 style={sectionTitleStyle}>¿Por qué elegirme?</h2>
        <p style={excerptStyle}>
          Soy una talentosa pastelera conocida por mis creaciones
          irresistibles. Mis sprinkles no solo son visualmente atractivos,
          sino que también despiertan una explosión de sabores en cada bocado.
          Con mi dedicación y atención al detalle, elevo la cocina a
          otro nivel, dejando a todos mis clientes con una sonrisa en la cara.
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  fontFamily: "Arial, sans-serif",
};

const profileContainerStyle = {
  textAlign: "center",
  marginBottom: "2rem",
};

const profilePictureStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "1rem",
};

const nameStyle = {
  fontSize: "2.5rem",
  marginBottom: "0.5rem",
};

const descriptionStyle = {
  fontSize: "1.5rem",
  color: "#888",
};

const excerptContainerStyle = {
  marginBottom: "2rem",
};

const sectionTitleStyle = {
  fontSize: "1.8rem",
  marginBottom: "1rem",
};

const excerptStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.5",
};

export default AboutMe;
