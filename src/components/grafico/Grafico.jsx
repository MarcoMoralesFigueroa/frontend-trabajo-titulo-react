import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./grafico.css";

const Grafico = () => {
  const secondCanvas = useRef(null);

  const drawGraph = () => {
    const canvas = secondCanvas.current.canvas.drawing;
    const context = canvas.getContext("2d");

    const vehicles = [
      {
        color: "#FF0000", // Rojo
        points: [
          { x: 0, y: 0 },
          { x: -6.614, y: 0.072 },
          { x: -6.614, y: 1.952 },
          { x: -1.061, y: 8.752 },
          { x: -9.251, y: 6.614 },
          { x: -9.251, y: 8.321 },
          { x: 5.586, y: -1.554 },
          { x: 0, y: 0 },
        ],
      },
      {
        color: "#00FF00", // Verde
        points: [
          { x: 0, y: 0 },
          { x: 7.976, y: -9.0 },
          { x: 4.404, y: -1.952 },
          { x: -8.321, y: 4.404 },
          { x: 6.883, y: -4.388 },
          { x: 5.586, y: 3.388 },
          { x: 8.938, y: 0.882 },
          { x: 0, y: 0 },
        ],
      },
      // ... otros vehículos
    ];

    const scale = 20;
    const xOffset = canvas.width / 2;
    const yOffset = canvas.height / 2;

    // Dibujar ejes X e Y (en negro)
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(0, yOffset);
    context.lineTo(canvas.width, yOffset);
    context.moveTo(xOffset, 0);
    context.lineTo(xOffset, canvas.height);
    context.stroke();

    // Dibujar puntos para cada vehículo
    vehicles.forEach((vehicle) => {
      context.strokeStyle = vehicle.color;
      context.beginPath();
      context.moveTo(
        vehicle.points[0].x * scale + xOffset,
        vehicle.points[0].y * scale + yOffset
      );

      for (let i = 1; i < vehicle.points.length; i++) {
        context.lineTo(
          vehicle.points[i].x * scale + xOffset,
          vehicle.points[i].y * scale + yOffset
        );
      }

      context.stroke();
    });
  };

  return (
    <div>
      {/* <button onClick={drawGraph}>Dibujar Gráfico</button> */}
      <a onClick={drawGraph} className="btn">
        Dibujar Gráfico
      </a>
      <div className="grafico">
        <CanvasDraw
          className="canvas"
          ref={secondCanvas}
          hideGrid={true}
          disabled={true}
          canvasWidth={400}
          canvasHeight={400}
        />
      </div>
    </div>
  );
};

export default Grafico;
