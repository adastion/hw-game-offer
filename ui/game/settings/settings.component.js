import { MaxMisses } from "./misses/misses.component.js";
import { TimingAfterCatch } from "./timing-after/timing-after.component.js";

export function Settings() {
  const containerElement = document.createElement("div");

  containerElement.append("settings will be here");

  const timingAfterCatchElement = TimingAfterCatch();
  containerElement.append(timingAfterCatchElement);

  const missesElement = MaxMisses();
  containerElement.append(missesElement);

  return containerElement;
}
