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
import Setion from "./components/Section";



function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Heder/>
<Routes>
<Route path="/inicio" element={<Setion/>} />
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
