import { POINTS_WIN } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function PointsToWin() {
  const optionValue = POINTS_WIN;
  const optionContent = POINTS_WIN.map((pts) => {
    return `${pts} pts`;
  });
  const name = "Points to win";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  return selectElement;
}
