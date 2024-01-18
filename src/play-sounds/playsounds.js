import {
  GAME_STATE,
  OFFER_STATUSES,
  SWITCHING_SOUNDS,
  data,
  subscribe,
} from "../data/game.data.js";

export function playSounds() {
  const audioPath = {
    catch: "src/assets/sounds/catch.wav",
    miss: "src/assets/sounds/miss.wav",
    win: "src/assets/sounds/win.wav",
    lose: "src/assets/sounds/game-over.wav",
  };

  const audioPlayer = new Audio();

  let prevStatus = data.offerStatus;

  subscribe(() => {
    update(audioPath, audioPlayer, prevStatus);
  });

  update(audioPath, audioPlayer, prevStatus);
}

function update(audioPath, audioPlayer, prevStatus) {
  if (
    data.offerStatus === OFFER_STATUSES.caught &&
    prevStatus !== OFFER_STATUSES.caught &&
    data.settings.isMuted === SWITCHING_SOUNDS.off
  ) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.catch;
    audioPlayer.play();
  }

  if (
    data.offerStatus === OFFER_STATUSES.miss &&
    data.settings.isMuted === SWITCHING_SOUNDS.off
  ) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.miss;
    audioPlayer.play();
  }

  if (
    data.gameStatus === GAME_STATE.finishGame.win &&
    data.settings.isMuted === SWITCHING_SOUNDS.off
  ) {
    audioPlayer.src = audioPath.win;
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  }

  if (
    data.gameStatus === GAME_STATE.finishGame.lose &&
    data.settings.isMuted === SWITCHING_SOUNDS.off
  ) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.lose;
    audioPlayer.play();
  }

  prevStatus = data.offerStatus;
}
