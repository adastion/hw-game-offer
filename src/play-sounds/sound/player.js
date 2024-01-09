import {
  GAME_STATE,
  OFFER_STATUSES,
  data,
  subscribe,
} from "../../data/game.data.js";

export function Player() {
  const audioPath = {
    catch: "src/assets/sounds/catch.wav",
    miss: "src/assets/sounds/miss.wav",
    win: "src/assets/sounds/win.wav",
    lose: "src/assets/sounds/game-over.wav",
  };

  const audioPlayer = new Audio();

  let prevStatus = data.offerStatus;

  subscribe(() => {
    if (
      data.offerStatus === OFFER_STATUSES.caught &&
      prevStatus !== OFFER_STATUSES.caught
    ) {
      audioPlayer.src = audioPath.catch;
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    }

    if (data.offerStatus === OFFER_STATUSES.miss) {
      audioPlayer.src = audioPath.miss;
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    }

    if (data.gameStatus === GAME_STATE.finishGame.win) {
      audioPlayer.src = audioPath.win;
      audioPlayer.play();
    }

    if (data.gameStatus === GAME_STATE.finishGame.lose) {
      audioPlayer.src = audioPath.lose;
      audioPlayer.play();
    }

    prevStatus = data.offerStatus;
  });
}
