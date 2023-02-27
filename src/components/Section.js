import React from "react";



function Setion({title,imgeSource }) {
  return (
    <div className="contenedor-galeria">
      
      <img  src={imgeSource} alt="" />
      <div className="tarjeta">
        <h4 className="titulo">{title}</h4>
        <p className="texto-imagen">Shirt Pants</p>
        <h3>$ 50.000</h3>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <br />
        <button>ADD TO CART</button>
      </div>

    </div>
  );
}

export default Setion;
