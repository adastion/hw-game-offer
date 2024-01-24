import { start } from "../../data/game.data.js";

export function StartGeme() {
  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const nameGame = document.createElement("h1");
  nameGame.classList.add("title");
  nameGame.textContent = "Cath the offer";

  const buttonStart = document.createElement("button");
  buttonStart.classList.add("btn");
  buttonStart.textContent = "Start game";
  buttonStart.addEventListener("click", start);

  containerElement.append(nameGame);
  containerElement.append(buttonStart);
  return containerElement;
}
