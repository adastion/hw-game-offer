import { SWITCHING_SOUNDS, data } from "../data/game.data.js";
import { Player } from "./sound/player.js";

export function playSounds() {
  if (data.settings.isMuted === SWITCHING_SOUNDS.off) {
    Player();
  }
}
