import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="hero-section">
      <div className="mt-m">
        <p>fırsatı kaçırma</p>
        <h2>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h2>
        <div className="flex-center mt-s">
          <button>
            <NavLink to="/siparisFormu">ACIKTIM</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;