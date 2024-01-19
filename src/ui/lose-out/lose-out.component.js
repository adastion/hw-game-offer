import { PlayAgain } from "../play-again/play-again.js";

export function LoseGame() {
  const containerElement = document.createElement("div");
  containerElement.classList.add("finish")
  containerElement.style.backgroundImage = 'url("src/assets/images/icon-lose.svg")';

  

  const buttonPlayAgain = PlayAgain("play again");
  containerElement.append(buttonPlayAgain);
  return containerElement;
}
