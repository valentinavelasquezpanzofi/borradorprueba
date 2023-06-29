import React from "react";
import NavBar from "./NavBar";
import Mymelody from "../a/Mymelody.webp";
import { FiArrowRight } from "react-icons/fi";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-text-section">
        <h1 className="primary-heading">Bienvenido a la pagina borrador</h1>
        <p className="primary-text">Esta es una pagina de prueba de Panzofi </p>
        <button className="secondary-button">
          Click aqui uwu
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
