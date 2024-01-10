import { Grid } from "./grid/grid.component.js";
import { Scores } from "./scores/scores.component.js";

export function Game() {
  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const scoresElement = Scores();
  containerElement.append(scoresElement);

  const gridElement = Grid();
  containerElement.append(gridElement);

  return containerElement;
}
