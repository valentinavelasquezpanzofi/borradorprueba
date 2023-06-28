import React from "react";
import NavBar from "./NavBar";
import fondobanner from "../a/fondobanner.png";
import Mymelody from "../a/Mymelody.webp";
import { FiArrowRight } from "react-icons/fi";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-text-section">
        <h1 className="primary-heading">Bienvenido a la pagina borrador</h1>
        <p className="primary-text">Esta es una pagina de prueba de Panzofi</p>
        <button className="secondary-button">
          Click aqui uwu
          <FiArrowRight />
        </button>
        <h1>
          <a href="https://www.youtube.com/watch?v=gdZLi9oWNZg">video</a>
        </h1>
      </div>

      <div className="home-image-section">
        <img src={Mymelody} alt="" />
      </div>
    </div>
  );
};

export default Home;
