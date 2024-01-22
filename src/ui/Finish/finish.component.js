import {
  GAME_STATE,
  getData,
  getFinishResult,
  getGameTime,
} from "../../data/game.data.js";
import { PlayAgain } from "../play-again/play-again.component.js";
import { ResultGame } from "./results/results.component.js";


export function FinishGame() {
  const _data = getData();
  const resultData = getFinishResult();

  const containerElement = document.createElement("div");
  containerElement.classList.add("finish");

  const title = document.createElement("h2");
  title.classList.add("finish__title");
  containerElement.append(title);

  const subtitle = document.createElement("p");
  subtitle.classList.add("finish__subtitle");
  containerElement.append(subtitle);

  if (_data.gameStatus === GAME_STATE.finishGame.lose) {
    containerElement.style.backgroundImage =
      'url("src/assets/images/icon-lose.svg")';
    title.textContent = "You Lose!";
    subtitle.textContent = "You'll be lucky next time";
  }

  if (_data.gameStatus === GAME_STATE.finishGame.win) {
    containerElement.style.backgroundImage =
      'url("src/assets/images/icon-win.svg")';
    title.textContent = "You Win!";
    subtitle.textContent = "Congratulations";
  }

  const list = document.createElement("ul");
  list.classList.add("finish__results");
  containerElement.append(list);

  let resultCatch = ResultGame("catch", resultData.caughtCount);
  list.append(resultCatch);

  let resultMiss = ResultGame("miss", resultData.missCount);
  list.append(resultMiss);

  const time = getGameTime();
  let resultGameTime = ResultGame("time", time);
  list.append(resultGameTime);

  const buttonPlayAgain = PlayAgain("play again");
  containerElement.append(buttonPlayAgain);

  return containerElement;
}
