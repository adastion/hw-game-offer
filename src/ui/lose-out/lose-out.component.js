import { PlayAgain } from "../play-again/play-again.js";

export function LoseGame() {
  const containerElement = document.createElement("div");
  containerElement.textContent = "You Lose :(( ";

  const buttonPlayAgain = PlayAgain("play again");
  containerElement.append(buttonPlayAgain);
  return containerElement;
}
