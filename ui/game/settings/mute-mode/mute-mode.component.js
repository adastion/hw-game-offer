export function MuteMode() {
  const muteModeElement = document.createElement("input");
  muteModeElement.type = "checkbox";
  muteModeElement.checked = false;

  return muteModeElement;
}
