import React from 'react'
import logo from "../imag/logo.png"

function Heder() {
  return (
    <div className='container-heder'>
      <box-icon name="menu"></box-icon>
      <div>
        <a href='#'>
          <div className='logo'>
            <img src={logo} alt="logo" width="150"/>
          </div>
        </a>
      </div>
      <ul className='HederMenu'>
    <li>
      <a href='#'>Inicio</a></li>
      
    <li>
      <a href='#'>Mujer</a></li>

    <li>
      <a href='#'>Hombre</a> </li>
     </ul>
<div className='cart'>
  <box-icon name="cart"></box-icon>
  <span className='item_tota'>0</span>
</div>
    </div>
  )
}

export default Heder
