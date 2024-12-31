import React from "react";
import { NavLink } from "react-router-dom";

// Header bileşeni, uygulamanın üst kısmında gösterilen bir başlık oluşturur.
export function Header() {
  return (
    <div className="flex-col"> {/* Header bileşenini kapsayan ana container */}
      <div className="flex-col text-center barlow"> {/* Stil sınıflarını içeren alt container */}
        <NavLink
          to="/" // Ana sayfaya yönlendiren bağlantı
          className={(isActive) => "header" + (!isActive ? "header" : "")} // Dinamik class tanımlaması
        >
          <h1>Teknolojik Yemekler</h1> {/* Başlık yazısı */}
        </NavLink>
      </div>
    </div>
  );
}
