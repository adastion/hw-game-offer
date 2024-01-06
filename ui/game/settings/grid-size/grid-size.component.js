import { data } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function GridSize() {
  const optionValue = data.gridStatus;
  const selectElement = CreateSelectEl(optionValue);

  return selectElement;
}
