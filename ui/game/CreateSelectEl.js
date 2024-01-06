export function CreateSelectEl(optionContent) {
  const selectElement = document.createElement("select");

  optionContent.forEach((value) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = value;
    selectElement.append(optionElement);
  });

  return selectElement;
}
