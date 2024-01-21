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

export const data = {
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

let subscribers = [];

function notify() {
  subscribers.forEach((subscriber) => subscriber());
}

export function subscribe(newSubscriber) {
  subscribers.push(newSubscriber);
}

export function getStatusSounds() {
  return data.settings.isMuted;
}

export function setStatusSounds(state) {
  data.settings.isMuted = state;

  notify();
}

export function setSettingsGrid(grid) {
  data.settings.rowsCount = grid;
  data.settings.columnsCount = grid;
  notify();
}

export function getSettingsGrid() {
  return data.settings.rowsCount;
}

export function setSettingsPointsToWin(points) {
  data.settings.pointsToWin = points;
  notify();
}

export function getSettingsPointsToWin() {
  return data.settings.pointsToWin;
}

export function setTimeInterval(time) {
  data.settings.decreaseDeltaInMs = time;
  notify();
}

export function getTimeInterval() {
  return data.settings.decreaseDeltaInMs;
}

export function setMaxMisses(miss) {
  data.settings.maximumMisses = miss;
  notify();
}

export function getMaxMisses() {
  return data.settings.maximumMisses;
}

let stepIntervalId;

function runStepInterval() {
  stepIntervalId = setInterval(() => {
    missOffer();
    moveOfferToRandomPosition();
    notify();
  }, data.settings.decreaseDeltaInMs * 10);
}

export function start() {
  data.gameStatus = GAME_STATE.game;
  timeCounter();
  runStepInterval();
  notify();
}

function timeCounter() {
  data.gemeTime = 0;
  let minutes = 0;
  let seconds = 0;

  const timer = setInterval(() => {
    seconds++;
    
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    
    data.gemeTime = `${minutes}m ${seconds}s`;
    // clearInterval(timer)
  }, 1000);
}

export function getGameTime() {
  return data.gemeTime;
}

function gameWin() {
  if (data.score.caughtCount === data.settings.pointsToWin) {
    clearInterval(stepIntervalId);
    data.gameStatus = GAME_STATE.finishGame.win;
  }
}

function gameOver() {
  if (data.score.missCount === data.settings.maximumMisses) {
    clearInterval(stepIntervalId);
    data.gameStatus = GAME_STATE.finishGame.lose;
  }
}

function moveOfferToRandomPosition() {
  let newX = null;
  let newY = null;

  do {
    newX = getRandom(data.settings.columnsCount - 1);
    newY = getRandom(data.settings.rowsCount - 1);
  } while (data.coords.current.x === newX && data.coords.current.y === newY);

  data.coords.current.x = newX;
  data.coords.current.y = newY;
}

function missOffer() {
  data.offerStatus = OFFER_STATUSES.miss;
  data.score.missCount++;

  data.coords.previous = {
    ...data.coords.current,
  };

  setTimeout(() => {
    data.offerStatus = OFFER_STATUSES.default;
    notify();
  }, (data.settings.decreaseDeltaInMs - 100) * 10);
  gameOver();
}

export function catchOffer() {
  data.offerStatus = OFFER_STATUSES.caught;
  data.score.caughtCount++;
  data.coords.previous = {
    ...data.coords.current,
  };
  setTimeout(() => {
    data.offerStatus = OFFER_STATUSES.default;
    notify();
  }, (data.settings.decreaseDeltaInMs - 100) * 10);

  moveOfferToRandomPosition();
  notify();
  clearInterval(stepIntervalId);
  runStepInterval();
  gameWin();
}

function getRandom(N) {
  return Math.floor(Math.random() * (N + 1));
}

export function newStartGame() {
  data.gameStatus = GAME_STATE.beginning;
  data.score.caughtCount = 0;
  data.score.missCount = 0;
  notify();
}

export function getFinishResult() {
  return data.score;
}
