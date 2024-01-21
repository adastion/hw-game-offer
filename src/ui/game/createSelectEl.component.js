export function CreateSelectEl(optionContent, optionValue, name) {
  const title = document.createElement("li");
  title.classList.add("select__title");
  title.textContent = name;

  const selectElement = document.createElement("select");
  selectElement.classList.add("select")

  optionContent.forEach((content, index) => {
    const optionElement = document.createElement("option");
    optionElement.classList.add("select__option")
    optionElement.value = optionValue[index];
    optionElement.textContent = content;
    selectElement.append(optionElement);
  });

  title.append(selectElement);
  return title;
}
