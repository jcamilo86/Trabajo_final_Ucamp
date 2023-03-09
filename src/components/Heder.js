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
        <Link to="inicio">Inicio</Link>
        </li>

        <li>
          <Link to="mujer">Mujer</Link>
        </li>

        <li>
        <Link to="hombre">Hombre</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="user-circle" type="solid"></box-icon>
        <box-icon name="cart"></box-icon>
        <span className="item_tota">0</span>
      </div>
      <Outlet/>
    </div>
  );
}

export default Heder;
