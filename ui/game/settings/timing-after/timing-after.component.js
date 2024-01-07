import { DECREASE_DELTA_IN_MS } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function TimingAfterCatch() {
  const optionValue = DECREASE_DELTA_IN_MS;
  const optionContent = DECREASE_DELTA_IN_MS.map((value) => {
    return `${value}-${value - 100} ms`;
  });

  const name = "ms after the catch";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  return selectElement;
}
