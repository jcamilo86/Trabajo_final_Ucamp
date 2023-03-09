import React from 'react'


export default function Hombre({title,imgeSource}) {
  return (
    <div>
      <br/>  <br/>
<div className='contendor-hombre'>
     <img alt="" className="hombre"
    src={require("../imag/baner_hombre.png")} />
   <br/>     <br/>     <br/>


  <div className="productos">
     <div className="producto">
         <div className="producto_img">
     <img  src={imgeSource} alt="" />
     </div>
    
     
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

     </div>

    </div>
  )
}
