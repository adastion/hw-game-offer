import {
  setStatusSounds
} from "../../../../data/game.data.js";

export function MuteMode() {
  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";

  muteModeElement.addEventListener("change", (e) => {
    if (e.target.checked) {
      setStatusSounds(e.target.checked);
    }
    console.log(muteModeElement.checked)
  });


  return muteModeElement;
}
