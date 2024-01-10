import { start } from "../../data/game.data.js";

export function StartGeme() {
  const buttonStart = document.createElement("button");
  buttonStart.classList.add("btn", "btn--start");
  buttonStart.textContent = "Start game";
  buttonStart.addEventListener("click", start);

  return buttonStart;
}
