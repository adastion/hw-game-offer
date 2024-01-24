import {
  MAX_MISSES,
  getMaxMisses,
  setMaxMisses,
} from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../createSelectEl.component.js";

export function MaxMisses() {
  const optionValue = MAX_MISSES;
  const optionContent = MAX_MISSES;

  const name = "Maximum misses";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  const currentValue = getMaxMisses();
  selectElement.querySelector("select").value = currentValue;

  selectElement.querySelector("select").addEventListener("change", (e) => {
    setMaxMisses(e.target.value);
    console.log(currentValue)
    console.log(e.target.value)
  });

  return selectElement;
}
