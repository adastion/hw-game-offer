export const GRID_SIZE = [2, 3, 4, 5, 6, 7, 8];
export const POINTS_WIN = [20, 30, 40, 60, 80, 100];
export const DECREASE_DELTA_IN_MS = [180, 150, 130, 110];
export const MAX_MISSES = [3, 5, 7, 9, 11, 13];
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
    maximumMisses: Math.max(...MAX_MISSES),
    decreaseDeltaInMs: Math.min(...DECREASE_DELTA_IN_MS),
    isMuted: true,
  },
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
    caughtCount: 2,
  },
};

let subscribers = [];

function notify() {
  subscribers.forEach((subscriber) => subscriber());
}

export function subscribe(newSubscriber) {
  subscribers.push(newSubscriber);
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

let stepIntervalId;

function runStepInterval() {
  stepIntervalId = setInterval(() => {
    missOffer();
    moveOfferToRandomPosition();
    notify();
  }, 1500);
}

export function start() {
  data.gameStatus = GAME_STATE.game;
  runStepInterval();
  notify();
}

function gameWin() {
  if (data.score.caughtCount === 10) {
    clearInterval(stepIntervalId);
    data.gameStatus = GAME_STATE.finishGame.win;
  }
}

function gameOver() {
  if (data.score.missCount === 3) {
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
  }, 1000);
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
  }, 200);

  moveOfferToRandomPosition();
  notify();
  clearInterval(stepIntervalId);
  runStepInterval();
  gameWin();
}

function getRandom(N) {
  return Math.floor(Math.random() * (N + 1));
}
