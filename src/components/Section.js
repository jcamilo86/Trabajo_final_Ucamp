import React from "react";



function Setion({title,imgeSource }) {
  return (
   
    <>
   
    <div className="productos">
      <div className="producto">
        <a href="#">
          <div className="producto_img">
      <img  src={imgeSource} alt="" />
      </div>
      </a>
      <div className="tarjeta">
        <h4 className="titulo">{title}</h4>
        <p className="texto-image">Shirt Pants</p>
        <p className="precie">$ 50.000</p>
      
        <br />
        <div className="buttom">
        <button className="btn">Añadir al carrito</button>
        <a href="#" className="btn1">vista</a>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Setion;
