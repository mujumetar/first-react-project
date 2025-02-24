// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar.js";
import { Card } from "./components/card.js";

function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <div className="row g-4">
          {arr.map((ele) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
