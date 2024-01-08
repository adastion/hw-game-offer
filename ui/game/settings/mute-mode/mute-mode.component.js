import {
  getStatusSounds,
  setStatusSounds,
} from "../../../../data/game.data.js";

export function MuteMode() {
  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";

  let currentValue = getStatusSounds();
  muteModeElement.checked = currentValue;

  muteModeElement.addEventListener("change", (e) => {
    if (e.target.checked) {
      setStatusSounds(e.target.checked);
    }
  });

  return muteModeElement;
}
