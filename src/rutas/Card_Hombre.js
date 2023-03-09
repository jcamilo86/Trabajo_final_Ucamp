import React from 'react';
import Hombre from './Hombre'
import hombre1 from "../imag/hombre1.jpg"
 import hombre2 from "../imag/hombre2.jpg"
 import hombre3 from "../imag/hombre3.jpg"
 import hombre4 from "../imag/hombre4.jpg"

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
     
     
    export default function Card_Hombre() {
      return (
        <div className='contenendor-galeria'>
       <div className='espaciado'>
           {
               tarjeta.map(tarjeta=>(
                   <div className="espaciado" key={ tarjeta.id}> 
                     <Hombre title ={tarjeta.title} imgeSource= {tarjeta.image} />
                   </div>

               ))
           }
            
       </div>

        </div>
      )
    }




