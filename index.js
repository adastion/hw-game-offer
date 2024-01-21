import { GAME_STATE, data, subscribe } from "./src/data/game.data.js";
import { playSounds } from "./src/play-sounds/playsounds.js";
import { FinishGame } from "./src/ui/Finish/finish.component.js";
import { Game } from "./src/ui/game/game.component.js";
import { Settings } from "./src/ui/game/settings/settings.component.js";
import { StartGeme } from "./src/ui/start/start.component.js";
import { SettigsMobile } from "./src/ui/button-settings/button-settings.component.js";

const rootElement = document.querySelector("#root");
rootElement.classList.add("wrapper");

renderApp();
playSounds();

function renderApp() {
  const settingsElement = Settings();
  rootElement.append(settingsElement);

  const openSettingsMobile = SettigsMobile();
  if (openSettingsMobile.classList.contains("settings__btn-visible")) {
    rootElement.append(openSettingsMobile);
  }
  
  const mainElement = document.createElement("main");
  mainElement.classList.add("content");
  rootElement.append(mainElement);

  subscribe(() => {
    mainElement.innerHTML = "";
    update(mainElement);
  });

  update(mainElement);
}

function update(parentElement) {
  if (data.gameStatus === GAME_STATE.beginning) {
    const beginning = StartGeme();
    parentElement.append(beginning);
  }

  if (data.gameStatus === GAME_STATE.game) {
    const gameEl = Game();
    parentElement.append(gameEl);
  }
  if (data.gameStatus === GAME_STATE.finishGame.win) {
    const winGame = FinishGame();
    parentElement.append(winGame);
  }
  if (data.gameStatus === GAME_STATE.finishGame.lose) {
    const loseGame = FinishGame();
    parentElement.append(loseGame);
  }
}
