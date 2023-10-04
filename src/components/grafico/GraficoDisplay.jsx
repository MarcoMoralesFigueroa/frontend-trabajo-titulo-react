import React from "react";
import Grafico2 from "./Grafico";
import "./grafico.css";

const GraficoDisplay = () => {
  return (
    <section id="graficoDisplay">
      <h5>Resultado grafico del problema Dial-a-Ride de la instancia n°</h5>
      <h2>Resultado grafico</h2>
      <div className="container grafico__container">
        <div className="grafico__display">
          <Grafico2 className="grafico"/>
        </div>
      </div>
    </section>
  );
};

export default GraficoDisplay;
