import {
  GAME_STATE,
  OFFER_STATUSES,
  getData,
  subscribe,
} from "../data/game.data.js";

const _data = getData();
export function playSounds() {
  const audioPath = {
    catch: "src/assets/sounds/catch.wav",
    miss: "src/assets/sounds/miss.wav",
    win: "src/assets/sounds/win.wav",
    lose: "src/assets/sounds/game-over.wav",
  };

  const audioPlayer = new Audio();

  let prevStatus = _data.offerStatus;

  subscribe(() => {
    update(audioPath, audioPlayer, prevStatus);
  });

  update(audioPath, audioPlayer, prevStatus);
}

function update(audioPath, audioPlayer, prevStatus) {
  const isMuted = _data.settings.isMuted;

  if (
    _data.offerStatus === OFFER_STATUSES.caught &&
    prevStatus !== OFFER_STATUSES.caught &&
    !isMuted
  ) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.catch;
    audioPlayer.autoplay = true;
    audioPlayer.play();
  }

  if (_data.offerStatus === OFFER_STATUSES.miss && !isMuted) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.miss;
    audioPlayer.autoplay = true;
    audioPlayer.play();
  }

  if (_data.gameStatus === GAME_STATE.finishGame.win && !isMuted) {
    audioPlayer.src = audioPath.win;
    audioPlayer.currentTime = 0;
    audioPlayer.autoplay = true;
    audioPlayer.play();
  }

  if (_data.gameStatus === GAME_STATE.finishGame.lose && !isMuted) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath.lose;
    audioPlayer.autoplay = true;
    audioPlayer.play();
  }

  prevStatus = _data.offerStatus;
}
