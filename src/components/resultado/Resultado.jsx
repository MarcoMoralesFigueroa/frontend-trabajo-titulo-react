import React from "react";
import "./resultado.css";

const Resultado = ({ data }) => {
  console.log(data);
  return (
    <section id="resultado">
      <h5>Rutas de los vehiculos de la instancioa seleccionada</h5>
      <h2>Resultado DARP</h2>

      <div className="container resultado__container">
        {data &&
          data.map((vehiculo) => (
            <div className="resultado__vehiculo" key={vehiculo.id}>
              <h3>{vehiculo.nombre}</h3>
              <div className="resultado__contenido">
                <h5>Orden de parada vehículos</h5>
                {vehiculo.rutas.map((ruta, index) => (
                  <article className="resultado__detalles" key={index}>
                    <div>
                      <h4>{ruta.pasajero}</h4>
                      <small className={"text-light"}>{ruta.accion}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Resultado;
