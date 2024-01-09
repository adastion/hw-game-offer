import {
  POINTS_WIN,
  getSettingsPointsToWin,
  setSettingsPointsToWin,
} from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function PointsToWin() {
  const optionValue = POINTS_WIN;
  const optionContent = POINTS_WIN.map((pts) => {
    return `${pts} pts`;
  });
  const name = "Points to win";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  const currentValue = getSettingsPointsToWin();
  selectElement.querySelector("select").value = currentValue;

  selectElement.querySelector("select").addEventListener("change", (e) => {
    setSettingsPointsToWin(e.target.value);
  });

  return selectElement;
}
