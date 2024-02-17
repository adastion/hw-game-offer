export const GRID_SIZE = [3, 4, 5, 6, 7, 8];
export const POINTS_WIN = [10, 20, 30, 40, 60, 80, 100];
export const DECREASE_DELTA_IN_MS = [180, 150, 130, 110, 90, 70];
export const MAX_MISSES = [3, 5, 7, 9, 11, 13];
export const SWITCHING_SOUNDS = { on: true, off: false };
export const GAME_STATE = {
  beginning: "beginning",
  game: "game",
  finishGame: {
    win: "win",
    lose: "lose",
  },
};
export const OFFER_STATUSES = {
  default: "default",
  miss: "miss",
  caught: "caught",
};

const _data = {
  settings: {
    rowsCount: Math.min(...GRID_SIZE),
    columnsCount: Math.min(...GRID_SIZE),
    pointsToWin: Math.min(...POINTS_WIN),
    maximumMisses: Math.min(...MAX_MISSES),
    decreaseDeltaInMs: Math.max(...DECREASE_DELTA_IN_MS),
    isMuted: SWITCHING_SOUNDS.off,
  },
  gemeTime: "",
  gameStatus: GAME_STATE.beginning,
  offerStatus: OFFER_STATUSES.default,
  coords: {
    current: {
      x: 1,
      y: 0,
    },
    previous: {
      x: 1,
      y: 2,
    },
  },
  score: {
    missCount: 0,
    caughtCount: 0,
  },
};

let _stepIntervalId;

let _subscribers = [];

function _notify() {
  _subscribers.forEach((subscriber) => subscriber());
}

function _runStepInterval() {
  _stepIntervalId = setInterval(() => {
    _missOffer();
    _moveOfferToRandomPosition();
    _notify();
  }, _data.settings.decreaseDeltaInMs * 10);
}

function _timeCounter() {
  _data.gemeTime = 0;
  let minutes = 0;
  let seconds = 0;

  const timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    _data.gemeTime = `${minutes}m ${seconds}s`;
    // clearInterval(timer)
  }, 1000);
}

function _gameWin() {
  if (_data.score.caughtCount === _data.settings.pointsToWin) {
    clearInterval(_stepIntervalId);
    _data.gameStatus = GAME_STATE.finishGame.win;
  }
}

function _gameOver() {
  if (_data.score.missCount === _data.settings.maximumMisses) {
    clearInterval(_stepIntervalId);
    _data.gameStatus = GAME_STATE.finishGame.lose;
  }
}

function _moveOfferToRandomPosition() {
  let newX = null;
  let newY = null;

  do {
    newX = _getRandom(_data.settings.columnsCount - 1);
    newY = _getRandom(_data.settings.rowsCount - 1);
  } while (_data.coords.current.x === newX && _data.coords.current.y === newY);

  _data.coords.current.x = newX;
  _data.coords.current.y = newY;
}

function _missOffer() {
  _data.offerStatus = OFFER_STATUSES.miss;
  _data.score.missCount++;

  _data.coords.previous = {
    ..._data.coords.current,
  };

  setTimeout(() => {
    _data.offerStatus = OFFER_STATUSES.default;
    _notify();
  }, (_data.settings.decreaseDeltaInMs - 100) * 10);
  _gameOver();
}

function _getRandom(N) {
  return Math.floor(Math.random() * (N + 1));
}

//
export function getData() {
  return _data;
}

export function subscribe(newSubscriber) {
  _subscribers.push(newSubscriber);
}

export function getStatusSounds() {
  return _data.settings.isMuted;
}

export function setStatusSounds(state) {
  _data.settings.isMuted = state;

  _notify();
}

export function setSettingsGrid(grid) {
  _data.settings.rowsCount = grid;
  _data.settings.columnsCount = grid;
  _notify();
}

export function getSettingsGrid() {
  return _data.settings.rowsCount;
}

export function setSettingsPointsToWin(points) {
  _data.settings.pointsToWin = points;
  _notify();
}

export function getSettingsPointsToWin() {
  return _data.settings.pointsToWin;
}

export function setTimeInterval(time) {
  _data.settings.decreaseDeltaInMs = time;
  _notify();
}

export function getTimeInterval() {
  return _data.settings.decreaseDeltaInMs;
}

export function setMaxMisses(miss) {
  _data.settings.maximumMisses = Number(miss);
  _notify();
}

export function getMaxMisses() {
  return _data.settings.maximumMisses;
}

export function start() {
  _data.gameStatus = GAME_STATE.game;
  _timeCounter();
  _runStepInterval();
  _notify();
}

export function getGameTime() {
  return _data.gemeTime;
}

export function catchOffer() {
  _data.offerStatus = OFFER_STATUSES.caught;
  _data.score.caughtCount++;
  _data.coords.previous = {
    ..._data.coords.current,
  };
  setTimeout(() => {
    _data.offerStatus = OFFER_STATUSES.default;
    _notify();
  }, (_data.settings.decreaseDeltaInMs - 100) * 10);

  _moveOfferToRandomPosition();
  _notify();
  clearInterval(_stepIntervalId);
  _runStepInterval();
  _gameWin();
}

export function newStartGame() {
  _data.gameStatus = GAME_STATE.beginning;
  _data.score.caughtCount = 0;
  _data.score.missCount = 0;
  _notify();
}

export function getFinishResult() {
  return _data.score;
}
