import React from 'react'
import Section from "./Section"
import modelo1 from "../imag/modelo1.jpg";
import modelo2 from "../imag/modelo2.webp";
import modelo3 from "../imag/modelo3.jpg";
import modelo4 from "../imag/modelo4.jpeg";

const tarjeta =[
{
  id:1,
  tile:"oufis1",
  image:modelo1
},
{
  id:2,
  tile:"oufis2",
  image:modelo2
},
{
  id:3,
  tile:"oufis3",
  image:modelo3
},
{
  id:4,
  tile:"oufis4",
  image:modelo4
}
]

export default function Card() {
  return (
    <div className='contenendor-galeria'>
        <div className='espaciado'>
           {
            tarjeta.map(tarjeta=>(
                  <div className='espaciado' key={tarjeta.id}>
                     < Section title ={tarjeta.title} imgeSource= {tarjeta.image} />
                  </div>
            ))
           }
            

        </div>
      
    </div>
  )
}

