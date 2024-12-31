import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="flex-col">
      <div className=" flex-col text-center barlow">
        <NavLink
          to="/"
          className={(isActive) => "header" + (!isActive ? "header" : "")}
        >
          <h1>Teknolojik Yemekler</h1>
        </NavLink>
      </div>
    </div>
  );
}
