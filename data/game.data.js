export const GRID_SIZE = {
  threeByThree: 3,
  fourByFour: 4,
  fiveByFive: 5,
  sixBySix: 6,
  sevenBySeven: 7,
  eightByEight: 8,
};

console.log(GRID_SIZE);
export const GAME_STATE = {
  beginning: "beginning",
  game: "game",
  finishGame: {
    win: "win",
    loss: "loss",
  },
};

export const OFFER_STATUSES = {
  default: "default",
  miss: "miss",
  caught: "caught",
};

export const data = {
  // array for cells: cell = {x,y}
  settings: {
    rowsCount: GRID_SIZE.fiveByFive,
    columnsCount: GRID_SIZE.fiveByFive,
    pointsToWin: 10,
    maximumMisses: 3,
    decreaseDeltaInMs: 100,
    isMuted: true,
  },
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
    missCount: 3,
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

let stepIntervalId;

function runStepInterval() {
  stepIntervalId = setInterval(() => {
    missOffer();
    moveOfferToRandomPosition();
    notify();
  }, 1000);
}

runStepInterval();

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
  }, 500);
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
}

function getRandom(N) {
  return Math.floor(Math.random() * (N + 1));
}
