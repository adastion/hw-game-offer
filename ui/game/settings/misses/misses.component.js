import { data } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function MaxMisses() {
  const maxValue = data.settings.maximumMisses;
  const selectElement = CreateSelectEl(maxValue);

  return selectElement;
}
