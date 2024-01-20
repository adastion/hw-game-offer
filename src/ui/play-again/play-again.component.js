import { newStartGame } from "../../data/game.data.js";

export function PlayAgain(text) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");
  buttonElement.textContent = text;

  buttonElement.addEventListener("click", newStartGame);

  return buttonElement;
}
