import {
  OFFER_STATUSES,
  catchOffer,
  getData,
  subscribe,
} from "../../../../data/game.data.js";

export function Cell(x, y) {
  subscribe(() => {
    update(x, y, cellEl);
  });

  const cellEl = document.createElement("td");
  cellEl.classList.add("content__cell");

  update(x, y, cellEl);

  return cellEl;
}

function update(x, y, cellEl) {
  const _data = getData();
  cellEl.innerHTML = "";

  if (x === _data.coords.offer.current.x && y === _data.coords.offer.current.y) {
    const offerEl = document.createElement("img");
    offerEl.src = "src/assets/images/offer.png";
    offerEl.addEventListener("click", catchOffer);
    cellEl.append(offerEl);
  }

  if (
    _data.offerStatus === OFFER_STATUSES.caught &&
    x === _data.coords.offer.previous.x &&
    y === _data.coords.offer.previous.y
  ) {
    const offerEl = document.createElement("img");
    offerEl.src = "src/assets/images/caught-offer.png";
    cellEl.append(offerEl);
  }

  if (
    _data.offerStatus === OFFER_STATUSES.miss &&
    x === _data.coords.offer.previous.x &&
    y === _data.coords.offer.previous.y
  ) {
    const offerEl = document.createElement("img");
    offerEl.src = "src/assets/images/missed-offer.png";
    cellEl.append(offerEl);
  }
}
