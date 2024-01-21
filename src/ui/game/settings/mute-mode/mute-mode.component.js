import { setStatusSounds } from "../../../../data/game.data.js";

export function MuteMode() {
  const settingsItem = document.createElement("li");
  settingsItem.classList.add("select__title")
  settingsItem.textContent = "Mute mode";


  const labelElement = document.createElement("label");
  labelElement.classList.add("select__title--mute-mod")

  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";
  labelElement.append(muteModeElement)

  muteModeElement.addEventListener("change", (e) => {
    setStatusSounds(e.target.checked);
    labelElement.classList.toggle("active")
  });

  settingsItem.append(labelElement)

  return settingsItem;
}
