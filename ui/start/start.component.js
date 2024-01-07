import { start } from "../../data/game.data.js";

export function StartGeme() {
  const containerElement = document.createElement("div");
  const buttonStart = document.createElement("button");
  buttonStart.textContent = "Start game";
  buttonStart.addEventListener("click", start);
  containerElement.append(buttonStart);

  return containerElement;
}
