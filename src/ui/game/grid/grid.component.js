import { getData } from "../../../data/game.data.js";
import { Cell } from "./cell/cell.component.js";


export function Grid() {
  const _data = getData();
  const containerElement = document.createElement("div");
  containerElement.classList.add("content__grid");

  for (let y = 0; y < _data.settings.rowsCount; y++) {
    const row = document.createElement("div");
    row.classList.add("content__row");

    for (let x = 0; x < _data.settings.columnsCount; x++) {
      const cell = Cell(x, y);
      row.append(cell);
    }

    containerElement.append(row);
  }

  return containerElement;
}
