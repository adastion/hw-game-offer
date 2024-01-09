import { OFFER_STATUSES, catchOffer, data, subscribe } from "../../../../data/game.data.js";

export function Cell(x, y) {

    subscribe(() => {
        update(x, y, cellEl);
    })

    const cellEl = document.createElement('td');

    update(x, y, cellEl);


    return cellEl;
}

function update(x, y, cellEl) {
    cellEl.innerHTML = '';

    if (x === data.coords.current.x && y === data.coords.current.y)  {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/offer.png';
        offerEl.addEventListener('click', catchOffer);
        cellEl.append(offerEl);
    }

    if (data.offerStatus === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y)  {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/caught-offer.png';
        cellEl.append(offerEl);
    }

    if (data.offerStatus === OFFER_STATUSES.miss && x === data.coords.previous.x && y === data.coords.previous.y)  {
        const offerEl = document.createElement('img');
        offerEl.src = 'assets/images/missed-offer.png';
        cellEl.append(offerEl);
    }
}