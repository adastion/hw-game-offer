export function CreateSelectEl(optionContent, optionValue, name) {
  const title = document.createElement("label");
  title.textContent = name;
  const selectElement = document.createElement("select");

  optionContent.forEach((content, index) => {
    const optionElement = document.createElement("option");
    optionElement.value = optionValue[index];
    optionElement.textContent = content;
    selectElement.append(optionElement);
  });

  title.append(selectElement);
  return title;
}
