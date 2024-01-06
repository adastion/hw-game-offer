import { data } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function PointsToWin() {
  const optionValue = data.settings.pointsToWin;
  const selectElement = CreateSelectEl(optionValue);

  return selectElement;
}
