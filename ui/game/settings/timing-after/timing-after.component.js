import { data } from "../../../../data/game.data.js";

export function TimingAfterCatch() {
  const selectElement = document.createElement("select");
  const optionElement = document.createElement("option");

  optionElement.name = data.settings.decreaseDeltaInMs;
  optionElement.textContent = data.settings.decreaseDeltaInMs;
  selectElement.append(optionElement);

  return selectElement;
}
