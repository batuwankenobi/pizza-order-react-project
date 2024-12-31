import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    // Hero bölümünü tanımlar, genellikle dikkat çekici bir alan olarak kullanılır
    <div className="hero-section">
      <div className="mt-m">
        {/* Kullanıcıya fırsatı kaçırmamaları gerektiği hatırlatılır */}
        <p>fırsatı kaçırma</p>
        <h2>
          {/* Kullanıcıyı pizzaya yönlendiren başlık */}
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h2>
        <div className="flex-center mt-s">
          {/* Kullanıcıyı sipariş formuna yönlendiren buton */}
          <button>
            <NavLink to="/siparisFormu">ACIKTIM</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
