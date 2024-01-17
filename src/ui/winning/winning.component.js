import { PlayAgain } from "../play-again/play-again.js";

export function WinGame() {
  const containerElement = document.createElement("div");
  containerElement.textContent = "You Win!!!";

  const buttonPlayAgain = PlayAgain("play again");
  containerElement.append(buttonPlayAgain);
  return containerElement;
}
