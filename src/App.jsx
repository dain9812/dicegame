import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Board from "./components/Board";
import Button from "./components/Button";

const randomNum = () => {
  return Math.ceil(Math.random() * 6);
};

function App() {
  const [num, setNum] = useState(1);

  const rollDice = () => {
    const result = randomNum();
    setNum(result);
  };

  const resetDice = () => {
    console.log("reset");
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="logo" />
        <h1 className="App-title">주사위 게임</h1>
        <div>
          <Button onClick={rollDice} className="Button blue App-button">
            던지기
          </Button>
          <Button onClick={resetDice} className="Button red App-button">
            처음부터
          </Button>
        </div>
        <div className="App-boards">
          <Board name="나" color="blue" num={num} />
          <Board name="상대" color="red" num={num} />
        </div>
      </div>
    </div>
  );
}

export default App;
