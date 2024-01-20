import { setStatusSounds } from "../../../../data/game.data.js";

export function MuteMode() {
  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";

  muteModeElement.addEventListener("change", (e) => {
    setStatusSounds(e.target.checked);
  });

  return muteModeElement;
}
