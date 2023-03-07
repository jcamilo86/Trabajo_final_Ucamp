import "./App.css";
import Card from "./components/Card";
import Foter from "./components/Foter";
import Heder from "./components/Heder";
import Nav from "./components/Nav";
import "boxicons";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Mujer from "./rutas/Mujer";



function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Routes>
<Route path="/" element={<Heder/>} />
<Route path="/mujer" element={<Mujer/>} />

</Routes>
      
      <Nav />
      <Card/>
      <Foter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
