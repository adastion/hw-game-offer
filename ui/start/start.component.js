export function StartGeme() {
  const containerElement = document.createElement("div");
  const buttonStart = document.createElement("button");
  buttonStart.textContent = "Start game";
  containerElement.append(buttonStart);

  return containerElement;
}
