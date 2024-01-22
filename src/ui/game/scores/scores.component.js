import { getData, subscribe } from "../../../data/game.data.js";

export function Scores() {
  subscribe(() => {
    containerElement.innerHTML = "";
    update(containerElement, catchElement, missElement, valueCatch, valueMiss);
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("score");

  const catchElement = document.createElement("div");
  catchElement.classList.add("score__item");

  const titleCatch = document.createElement("h3");
  titleCatch.classList.add("score__title");
  titleCatch.textContent = "catch:";

  const valueCatch = document.createElement("span");
  valueCatch.classList.add("score__score");

  const missElement = document.createElement("div");
  missElement.classList.add("score__item");

  const titleMiss = document.createElement("h3");
  titleMiss.classList.add("score__title");
  titleMiss.textContent = "miss:";

  const valueMiss = document.createElement("span");
  valueMiss.classList.add("score__score");

  catchElement.append(titleCatch);
  catchElement.append(valueCatch);
  missElement.append(titleMiss);
  missElement.append(valueMiss);

  update(containerElement, catchElement, missElement, valueCatch, valueMiss);

  return containerElement;
}

function update(
  containerElement,
  catchElement,
  missElement,
  valueCatch,
  valueMiss
) {
  const _data = getData();
  valueCatch.textContent = _data.score.caughtCount;
  valueMiss.textContent = _data.score.missCount;
  containerElement.append(catchElement);
  containerElement.append(missElement);
}
