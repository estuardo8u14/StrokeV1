import React from "react";
import Particles from "../Fondo/Particles";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const lista = () => {
    let pathLista = "/lista";
    navigate(pathLista);
  };

  return (
    <html>
      <Particles />
      <div class="row">
        <div class="column">
          <div className="contenedor">
            <div class="centro">
              <button className="btn" onClick={routeChange}>
                <svg
                  width="180px"
                  height="200px"
                  viewBox="0 0 180 200"
                  class="border"
                >
                  <polyline
                    points="179,1 179,199 1,199 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,199 1,199 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>NUEVO PACIENTE</span>
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div className="contenedor">
            <div class="centro">
              <button className="btn" onClick={lista}>
                <svg
                  width="180px"
                  height="200px"
                  viewBox="0 0 180 200"
                  class="border"
                >
                  <polyline
                    points="179,1 179,199 1,199 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,199 1,199 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>VER PACIENTES</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
