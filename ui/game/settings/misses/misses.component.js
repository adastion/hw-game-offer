import { MAX_MISSES } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function MaxMisses() {
  const optionValue = MAX_MISSES;
  const optionContent = MAX_MISSES;

  const name = "Maximum misses";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  return selectElement;
}
