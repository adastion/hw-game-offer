export function CreateSelectEl(optionContent) {
  const selectElement = document.createElement("select");

  console.log(optionContent);

  for (let key in optionContent) {
    console.log(key);
    const optionElement = document.createElement("option");
    optionElement.value = key;
    optionElement.textContent = optionContent[key];

    selectElement.append(optionElement);
  }

  return selectElement;
}
