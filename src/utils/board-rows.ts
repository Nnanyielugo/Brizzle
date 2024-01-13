import { BOARD_WIDTH } from './constants';
import { generateId } from './functions';
import { BrickObj, RowObj } from './interfaces';

export const rows: RowObj[] = [
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.4,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: true,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.5,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.5,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.4,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.6,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.5,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.75,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.7,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: true,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: true,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.2,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.5,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.2,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.2,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: true,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.3,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.2,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.5,
        transparent: false,
      },
    ],
  },
  {
    id: generateId(),
    row: [
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.4,
        transparent: false,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.35,
        transparent: true,
      },
      {
        id: generateId(),
        width: BOARD_WIDTH * 0.25,
        transparent: false,
      },
    ],
  },
];

// NOTE: duplicate rows and swich up for
// a few combinations of each row type
// PRO TIP: Can we do it programatically instead of manually?

export function obtainRowPermutations(rows: RowObj[]) {
  const output: RowObj[] = [];
  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i];
    for (let j = 0; j <= currentRow.row.length - 1; j++) {
      const combi = swap(currentRow.row, j, currentRow.row.length - 1);
      output.push({ ...currentRow, row: combi });
    }
  }

  return output;
}

function swap(arr: BrickObj[], left: number, right: number) {
  let duplicate = [...arr];
  let temp: BrickObj;
  temp = duplicate[left];
  duplicate[left] = duplicate[right];
  duplicate[right] = temp;

  return duplicate;
}
