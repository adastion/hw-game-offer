import { Player } from "./sound/player.js";
import { Game } from "./ui/game/game.component.js";
import { Settings } from "./ui/game/settings/settings.component.js";
import { StartGeme } from "./ui/start/start.component.js";
import { WinGame } from "./ui/winning/winning.component.js";
import { LoseGame } from "./ui/lose-out/lose-out.component.js";

Player();

function renderApp() {
  document.body.innerHTML = "";

  const settingsElement = Settings();
  const beginning = StartGeme();
  const gameEl = Game();
  const winGame = WinGame();
  const loseGame = LoseGame();

  document.body.append(settingsElement);
  document.body.append(gameEl);
  document.body.append(beginning);
  document.body.append(winGame);
  document.body.append(loseGame);
}

renderApp();
