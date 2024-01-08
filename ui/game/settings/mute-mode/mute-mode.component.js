import { data } from "../../../../data/game.data.js";

export function MuteMode() {
  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";
  muteModeElement.checked = data.settings.isMuted;

  return muteModeElement;
}
