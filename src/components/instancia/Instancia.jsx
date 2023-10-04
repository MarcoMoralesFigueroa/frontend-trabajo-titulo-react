import React, { useState } from "react";
import "./instancia.css";

const Instancia = ({setApiUrl}) => {
  const [formData, setFormData] = useState({
    instancias: 0,
    particulas: 20,
    t: 100,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    // Aquí puedes hacer lo que necesites con los datos en formData
    // console.log(`http://localhost:8080/api/PSO-DARP/${formData.instancias}/${formData.t}/${formData.particulas}`);
    setApiUrl(`http://localhost:8080/api/PSO-DARP/${formData.instancias}/${formData.t}/${formData.particulas}`);
  };

  return (
    <section id="instancia">
      <h5>Seleccione la instancia que desea ejecutar</h5>
      <h2>Instancias</h2>

      <div className="container.instancia__container">
        <form onSubmit={handleSubmit}>
          <div className="instancias__items">
            <div className="instancia__item">
              <label htmlFor="">Instancia de DARP</label>
              <select
                name="instancias"
                value={formData.instancias}
                onChange={handleInputChange}
              >
                <option value={1 - 1}>1</option>
                <option value={2 - 1}>2</option>
                <option value={3 - 1}>3</option>
                <option value={4 - 1}>4</option>
                <option value={5 - 1}>5</option>
                <option value={6 - 1}>6</option>
                {/* <option value={7 - 1}>7</option> */}
                {/* <option value={8 - 1}>8</option> */}
              </select>
            </div>
            <div className="instancia__item">
              <label htmlFor="">Cantidad de particulas de PSO</label>
              <input
                type="number"
                name="particulas"
                value={formData.particulas}
                onChange={handleInputChange}
                min={1}
              />
            </div>
            <div className="instancia__item">
              <label htmlFor="">Cantidad de iteracion de PSO</label>
              <input
                type="number"
                name="t"
                value={formData.t}
                onChange={handleInputChange}
                min={1}
              />
            </div>
            <div className="instancia__item">
              <button type="submit">Run</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Instancia;
