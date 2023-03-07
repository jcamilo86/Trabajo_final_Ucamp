import React from "react";
import logo from "../imag/logo.png";
import { Link, Outlet } from "react-router-dom";



function Heder() {
  return (
    <div className="container-heder">
      <box-icon name="menu"></box-icon>
      <div>
        <a href="#">
          <div className="logo">
            <img src={logo} alt="logo" width="150" />
          </div>
        </a>
      </div>
      <ul className="HederMenu">
        <li>
          <a href="#">Inicio</a>
        </li>

        <li>
          <Link to="mujer">Mujer</Link>
        </li>

        <li>
          <a href="#">Hombre</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="user-circle" type="solid"></box-icon>
        <box-icon name="cart"></box-icon>
        <span className="item_tota">0</span>
      </div>
     
    </div>
  );
}

export default Heder;
