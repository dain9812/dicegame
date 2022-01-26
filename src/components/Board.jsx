import Dice from "./Dice";

export default function Board({ name, color, num }) {
  return (
    <div class="Board App-board">
      <h2 class="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 class="Board-heading">기록</h2>
      <p></p>
      <h2 class="Board-heading">총점</h2>
      <p>0</p>
    </div>
  );
}
