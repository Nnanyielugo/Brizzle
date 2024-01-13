// import { v4 as uuidV4 } from 'uuid';

import { obtainRowPermutations, rows } from '../board-rows';
import { BrickObj, RowObj } from '../interfaces';
import { BOARD_WIDTH } from '../constants';

export function generateId(): string {
  let id =
    (Math.random() * new Date().getTime()).toString() +
    '-' +
    (Math.random() * 1e4).toString() +
    '-' +
    (Math.random() * new Date().getTime()).toString() +
    '-' +
    (Math.random() * 1e5).toString();
  return id;
}

export function generateBoardFromRows() {
  const generatedRows = obtainRowPermutations(rows);
  let result: RowObj[] = [];
  const boardHeight = 6;
  for (let i = 0; i < boardHeight; i++) {
    let randomRowNumber = Math.ceil(Math.random() * generatedRows.length);
    result.push(generatedRows[randomRowNumber]);
  }

  return result;
}

export function generateBoard() {
  let board = generateBoardFromRows();
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.row.length; j++) {
      const brick = row.row[j];
      const pos = getBrickPosition(brick, row);
      board[i].row[j].pos = pos;
    }
  }

  // remove empty bricks
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    let visibleRow = row.row.filter(brick => !brick.transparent);
    board.splice(i, 1, {
      id: row.id,
      row: visibleRow,
    });
  }

  return board;
}

function getBrickPosition(target: BrickObj, currentRow: RowObj) {
  const brickIndex = currentRow.row.findIndex(
    rowItem => rowItem.id === target.id,
  );
  let left: number = 0;
  let right: number = 0;
  if (brickIndex === 0) {
    left = 0;
  } else {
    for (let i = 0; i < currentRow.row.length; i++) {
      if (i === brickIndex) {
        break;
      }

      left += currentRow.row[i].width;
    }
  }

  if (brickIndex === currentRow.row.length - 1) {
    right = BOARD_WIDTH;
  } else {
    right = left + target.width;
  }

  return { left, right };
}
