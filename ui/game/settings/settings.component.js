import { GridSize } from "./grid-size/grid-size.component.js";
// import { MaxMisses } from "./misses/misses.component.js";
// import { PointsToWin } from "./points-to-win/points-to-win.component.js";
// import { TimingAfterCatch } from "./timing-after/timing-after.component.js";

export function Settings() {
  const containerElement = document.createElement("div");

  containerElement.append("settings will be here");

  const gridSize = GridSize();
  containerElement.append(gridSize);

  // const pointsToWin = PointsToWin();
  // containerElement.append(pointsToWin);

  // const timingAfterCatchElement = TimingAfterCatch();
  // containerElement.append(timingAfterCatchElement);

  // const missesElement = MaxMisses();
  // containerElement.append(missesElement);

  return containerElement;
}
