import React from "react";
import { NavLink } from "react-router-dom";

// Main bileşeni, ana sayfanın kahraman (hero) bölümünü temsil eder.
const Main = () => {
  return (
    <div className="hero-section"> {/* Ana container, hero bölümü için stil sınıfı */}
      <div className="mt-m"> {/* İçerik alanı, stil sınıfı ile yukarıdan boşluk eklenmiş */}
        <p>fırsatı kaçırma</p> {/* Kullanıcıyı teşvik eden kısa bir mesaj */}
        <h2>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR {/* Vurucu bir başlık, satır geçişiyle tasarlanmış */}
        </h2>
        <div className="flex-center mt-s"> {/* Butonun merkezi hizalamasını sağlayan container */}
          <button> {/* Sipariş formuna yönlendiren bir buton */}
            <NavLink to="/siparisFormu">ACIKTIM</NavLink> {/* Sipariş sayfasına yönlendirme */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main; // Main bileşeninin dışa aktarımı
