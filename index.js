import { GAME_STATE, data, subscribe } from "./src/data/game.data.js";
import { playSounds } from "./src/play-sounds/playsounds.js";
import { Game } from "./src/ui/game/game.component.js";
import { Settings } from "./src/ui/game/settings/settings.component.js";
import { LoseGame } from "./src/ui/lose-out/lose-out.component.js";
import { StartGeme } from "./src/ui/start/start.component.js";
import { WinGame } from "./src/ui/winning/winning.component.js";

const rootElement = document.querySelector("#root");
rootElement.classList.add("wrapper");

subscribe(playSounds);

function renderApp() {
  rootElement.innerHTML = "";

  const settingsElement = Settings();
  rootElement.append(settingsElement);

  if (data.gameStatus === GAME_STATE.beginning) {
    const beginning = StartGeme();
    rootElement.append(beginning);
    subscribe(renderApp);
  }

  if (data.gameStatus === GAME_STATE.game) {
    const gameEl = Game();
    const mainElement = document.createElement("main");
    mainElement.classList.add("content");
    mainElement.append(gameEl);
    rootElement.append(mainElement);
  }
  if (data.gameStatus === GAME_STATE.finishGame.win) {
    const winGame = WinGame();
    rootElement.append(winGame);
  }
  if (data.gameStatus === GAME_STATE.finishGame.lose) {
    const loseGame = LoseGame();
    rootElement.append(loseGame);
  }
}

renderApp();
