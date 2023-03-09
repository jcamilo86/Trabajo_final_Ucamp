import "./App.css";
import Card from "./components/Card";
import Foter from "./components/Foter";
import Heder from "./components/Heder";
import Nav from "./components/Nav";
import "boxicons";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Mujer from "./rutas/Mujer";
import Hombre from "./rutas/Hombre";
import Carrito from "./components/carrito/Carrito";



function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Routes>
<Route path="/" element={<Heder/>} />
<Route path="/mujer" element={<Mujer/>} />
<Route path="/hombre" element={<Hombre/>} />
</Routes>

      <Nav />
      <Card/>
      <Carrito/>
      <Foter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
