import { PlayAgain } from "../play-again/play-again.js";

export function LoseGame() {
  const containerElement = document.createElement("div");
  containerElement.classList.add("finish");
  containerElement.style.backgroundImage =
    'url("src/assets/images/icon-lose.svg")';

  const title = document.createElement("h2");
  title.classList.add("finish__title");
  title.textContent = "You Lose!";
  containerElement.append(title);

  const subtitle = document.createElement("p");
  subtitle.classList.add("finish__subtitle");
  subtitle.textContent = "You'll be lucky next time";
  containerElement.append(subtitle);
  
  const list = document.createElement("ul");
  list.classList.add("finish__results");
  containerElement.append(list);
  
  const resultItem = document.createElement("li");
  list.append(resultItem);
  const resultName = document.createElement("span");
  resultName.classList.add("finish__name");
  resultName.textContent = "Catch:";
  resultItem.append(resultName);
  
  const resultValue = document.createElement("span");
  resultValue.classList.add("finish__value");
  resultValue.textContent = 20;
  resultItem.append(resultValue);

  const buttonPlayAgain = PlayAgain("play again");
  containerElement.append(buttonPlayAgain);

  return containerElement;
}
