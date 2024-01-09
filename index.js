import { GAME_STATE, data, subscribe } from "./src/data/game.data.js";
import { playSounds } from "./src/play-sounds/playsounds.js";
import { Game } from "./src/ui/game/game.component.js";
import { Settings } from "./src/ui/game/settings/settings.component.js";
import { LoseGame } from "./src/ui/lose-out/lose-out.component.js";
import { StartGeme } from "./src/ui/start/start.component.js";
import { WinGame } from "./src/ui/winning/winning.component.js";

subscribe(playSounds);

function renderApp() {
  document.body.innerHTML = "";

  const settingsElement = Settings();
  document.body.append(settingsElement);

  if (data.gameStatus === GAME_STATE.beginning) {
    const beginning = StartGeme();
    document.body.append(beginning);
    subscribe(renderApp);
  }

  if (data.gameStatus === GAME_STATE.game) {
    const gameEl = Game();
    document.body.append(gameEl);
  }
  if (data.gameStatus === GAME_STATE.finishGame.win) {
    const winGame = WinGame();
    document.body.append(winGame);
  }
  if (data.gameStatus === GAME_STATE.finishGame.lose) {
    const loseGame = LoseGame();
    document.body.append(loseGame);
  }
}

renderApp();
