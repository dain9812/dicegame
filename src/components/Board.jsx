import blueDice from "../assets/dice-blue-1.svg";
import redDice from "../assets/dice-red-1.svg";

export default function Board({ name, color }) {
  const dice = color === "blue" ? blueDice : redDice;

  return (
    <div class="Board App-board">
      <h2 class="Board-heading">{name}</h2>
      <img class="Dice" src={dice} alt={dice} />
      <h2 class="Board-heading">기록</h2>
      <p></p>
      <h2 class="Board-heading">총점</h2>
      <p>0</p>
    </div>
  );
}
