import {
  DECREASE_DELTA_IN_MS,
  getTimeInterval,
  setTimeInterval,
} from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../createSelectEl.component.js";

export function TimingAfterCatch() {
  const optionValue = DECREASE_DELTA_IN_MS;
  const optionContent = DECREASE_DELTA_IN_MS.map((value) => {
    return `${value}-${Math.abs(value - 100)} ms`;
  });

  const name = "ms after the catch";
  const selectElement = CreateSelectEl(optionContent, optionValue, name);

  const currentValue = getTimeInterval();
  selectElement.querySelector("select").value = currentValue;

  selectElement.querySelector("select").addEventListener("change", (e) => {
    setTimeInterval(e.target.value);
  });
  return selectElement;
}
