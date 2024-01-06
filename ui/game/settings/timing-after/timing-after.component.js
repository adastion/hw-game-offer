import { data } from "../../../../data/game.data.js";
import { CreateSelectEl } from "../../CreateSelectEl.js";

export function TimingAfterCatch() {
  const contentOption = data.settings.decreaseDeltaInMs;
  const selectElement = CreateSelectEl(contentOption);

  return selectElement;
}
