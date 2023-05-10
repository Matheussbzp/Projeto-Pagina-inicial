import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Container principal */}
      <div className="home-container" style={{ height: "100vh" }}>
        {/* Duas partes lado a lado */}
        <div className="d-flex parts">
          {/* Parte 1 */}
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-right">
              Desenvolvedor MERN Stack
            </h2>
            <div className="h-50">
              {/* Animação Lottie */}
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          {/* Parte 2 */}
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              {/* Animação Lottie */}
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 className="text-white mt-4" data-aos="slide-left">
              Youtuber
            </h2>
          </div>
        </div>
        {/* Texto de separação */}
        <div className="separator-text">
          <span>TECHINFOYT</span>
        </div>
      </div>
    </>
  );
};

export default Home;
