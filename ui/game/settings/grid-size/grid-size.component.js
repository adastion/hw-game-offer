import { GRID_SIZE } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function GridSize() {
  const optionValue = GRID_SIZE;
  const optionContent = GRID_SIZE.map((size) => {
    return `${size}x${size}`;
  });
  const name = "Grid size";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  return selectElement;
}
