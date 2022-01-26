import "./App.css";
import logo from "./assets/logo.png";
import Board from "./components/Board";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="logo" />
        <h1 className="App-title">주사위 게임</h1>
        <div>
          <Button className="Button blue App-button">던지기</Button>
          <Button className="Button red App-button">처음부터</Button>
        </div>
        <div className="App-boards">
          <Board name="나" color="blue" />
          <Board name="상대" color="red" />
        </div>
      </div>
    </div>
  );
}

export default App;
