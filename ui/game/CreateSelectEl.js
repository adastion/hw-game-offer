export function CreateSelectEl(...optionContent) {
  const selectElement = document.createElement("select");
  const optionElement = document.createElement("option");
  optionElement.value = optionContent;
  optionElement.textContent = optionContent;
  selectElement.append(optionElement);

  return selectElement;
}
