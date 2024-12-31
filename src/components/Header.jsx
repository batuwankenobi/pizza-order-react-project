import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    // Ana konteyner, flex düzeni ile alt öğeleri yerleştirir
    <div className="flex-col">
      <div className=" flex-col text-center barlow">
        {/* NavLink, aktif olup olmadığına göre stil değişikliğine olanak tanır */}
        <NavLink
          to="/"  // Anasayfaya yönlendirir
          className={(isActive) => 
            // Eğer aktif değilse, 'header' sınıfını ekler
            "header" + (!isActive ? "header" : "") 
          }
        >
          <h1>Teknolojik Yemekler</h1>
        </NavLink>
      </div>
    </div>
  );
}
