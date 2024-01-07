import { Player } from "./sound/player.js";
import { Game } from "./ui/game/game.component.js";
import { Settings } from "./ui/game/settings/settings.component.js";
import { StartGeme } from "./ui/start/start.component.js";
import { WinGame } from "./ui/winning/winning.component.js";
import { LoseGame } from "./ui/lose-out/lose-out.component.js";
import { GAME_STATE, data, subscribe } from "./data/game.data.js";

Player();

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
