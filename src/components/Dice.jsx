import blueDice1 from "../assets/dice-blue-1.svg";
import blueDice2 from "../assets/dice-blue-2.svg";
import blueDice3 from "../assets/dice-blue-3.svg";
import blueDice4 from "../assets/dice-blue-4.svg";
import blueDice5 from "../assets/dice-blue-5.svg";
import blueDice6 from "../assets/dice-blue-6.svg";
import redDice1 from "../assets/dice-red-1.svg";
import redDice2 from "../assets/dice-red-2.svg";
import redDice3 from "../assets/dice-red-3.svg";
import redDice4 from "../assets/dice-red-4.svg";
import redDice5 from "../assets/dice-red-5.svg";
import redDice6 from "../assets/dice-red-6.svg";

const diceImg = {
  blue: [blueDice1, blueDice2, blueDice3, blueDice4, blueDice5, blueDice6],
  red: [redDice1, redDice2, redDice3, redDice4, redDice5, redDice6],
};

export default function Dice({ color, num }) {
  return (
    <>
      <img src={diceImg[color][num - 1]} alt="dice" />
    </>
  );
}
