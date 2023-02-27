import "./App.css";
import Card from "./components/Card";
import Foter from "./components/Foter";
import Heder from "./components/Heder";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Heder />
      <Nav />
      <Card/>
      <Foter />
    </div>
  );
}

export default App;
