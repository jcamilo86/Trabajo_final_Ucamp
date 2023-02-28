import React from "react";



function Setion({title,imgeSource }) {
  return (
    <>
    <h1 className="title">Productos</h1>
    <div className="productos">
      <di className="producto">
      <img  src={imgeSource} alt="" />
      </di>
     
      <div className="tarjeta">
        <h4 className="titulo">{title}</h4>
        <p className="texto-image">Shirt Pants</p>
        <p className="precie">$ 50.000</p>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <br />
        <div className="buttom">
        <button className="btn">Añadir al carrito</button>
        <a href="#" className="btn">vista</a>
      </div>
      </div>
    </div>
    </>
  );
}

export default Setion;
