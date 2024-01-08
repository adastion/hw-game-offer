import { GridSize } from "./grid-size/grid-size.component.js";
import { MaxMisses } from "./misses/misses.component.js";
import { MuteMode } from "./mute-mode/mute-mode.component.js";
import { PointsToWin } from "./points-to-win/points-to-win.component.js";
import { TimingAfterCatch } from "./timing-after/timing-after.component.js";

export function Settings() {
  const containerElement = document.createElement("div");

  const gridSize = GridSize();
  containerElement.append(gridSize);

  const pointsToWin = PointsToWin();
  containerElement.append(pointsToWin);

  const timingAfterCatchElement = TimingAfterCatch();
  containerElement.append(timingAfterCatchElement);

  const missesElement = MaxMisses();
  containerElement.append(missesElement);

  const muteModeElement = MuteMode();
  containerElement.append(muteModeElement);

  return containerElement;
}
