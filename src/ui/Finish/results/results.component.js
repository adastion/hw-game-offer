export function ResultGame(name, value) {
  const resultItem = document.createElement("li");

  const resultName = document.createElement("span");
  resultName.classList.add("finish__name");
  resultName.textContent = name;
  resultItem.append(resultName);

  const resultValue = document.createElement("span");
  resultValue.classList.add("finish__value");
  resultValue.textContent = value;
  resultItem.append(resultValue);

  return resultItem;
}
