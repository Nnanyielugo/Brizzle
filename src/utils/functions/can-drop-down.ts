import { SAFE_MARGIN, BOARD_WIDTH } from '../constants';
import { BrickObj, RowObj, BrickPos } from '../interfaces';

export function canDropDown(target: BrickObj, rowUnder: RowObj) {
  let targetPos = target.pos as BrickPos;
  const leftClears: boolean[] = [];
  const rightClears: boolean[] = [];

  let isClear = false;

  for (let i = 0; i < rowUnder.row.length; i++) {
    let brickPos = rowUnder.row[i].pos as BrickPos;
    let nextBrick = rowUnder.row[i + 1];
    let prevBrick = rowUnder.row[i - 1];

    if (targetPos.left === 0) {
      // case 1: target is at the left border of the board
      leftClears.push(
        targetPos.right <= brickPos.left ||
          targetPos.right - SAFE_MARGIN <= brickPos.left,
      );
    } else if (targetPos.right === BOARD_WIDTH) {
      //case 2: target is at the right border of the board
      rightClears.push(
        Boolean(
          targetPos.left >= brickPos.right ||
            targetPos.left + SAFE_MARGIN >= brickPos.right,
        ),
      );
    } else {
      if (!prevBrick && nextBrick) {
        // case 3: s this means the first brick on the under row where
        // target is neither extreme right nor extreme left
        // we need there to be enough space under the target,
        // and between brickPos and the next brixk's pos

        if (targetPos.right + SAFE_MARGIN <= brickPos.left) {
          isClear = true;
        } else if (
          (targetPos.left >= brickPos.right &&
            targetPos.right <= (nextBrick.pos as BrickPos).left) ||
          (targetPos.left + SAFE_MARGIN >= brickPos.right &&
            targetPos.right <= (nextBrick.pos as BrickPos).left) ||
          (targetPos.left >= brickPos.right &&
            targetPos.right - SAFE_MARGIN <= (nextBrick.pos as BrickPos).left)
        ) {
          isClear = true;
        }
      } else if (prevBrick && !nextBrick) {
        // as this means the last brick on the under row, we only need
        // target to find space between previous and current bricks
        // or find enough space between current brick and right border

        if (targetPos.left >= brickPos.right - SAFE_MARGIN) {
          isClear = true;
        } else if (
          (targetPos.left >= (prevBrick.pos as BrickPos).right &&
            targetPos.right <= brickPos.left) ||
          (targetPos.left + SAFE_MARGIN >= (prevBrick.pos as BrickPos).right &&
            targetPos.right <= brickPos.left + SAFE_MARGIN)
        ) {
          isClear = true;
        }
      } else if (
        !prevBrick &&
        !nextBrick &&
        targetPos.left !== 0 &&
        targetPos.right !== BOARD_WIDTH
      ) {
        // only one brick on the under row
        if (
          targetPos.right <= brickPos.left ||
          targetPos.right + SAFE_MARGIN <= brickPos.left ||
          targetPos.right - SAFE_MARGIN <= brickPos.left
        ) {
          isClear = true;
        } else if (
          targetPos.left >= brickPos.right ||
          targetPos.left + SAFE_MARGIN >= brickPos.right
        ) {
          isClear = true;
        }
      } else if (prevBrick && nextBrick) {
        // at least 3 bricks on under row
        if (
          targetPos.left + SAFE_MARGIN >= (prevBrick.pos as BrickPos).right &&
          targetPos.right - SAFE_MARGIN <= brickPos.left
        ) {
          isClear = true;
        }
      }
    }
  }

  if (targetPos.left === 0) {
    isClear = !!leftClears.length && leftClears.every(clear => !!clear);
  } else if (targetPos.right === BOARD_WIDTH) {
    isClear = !!rightClears.length && rightClears.every(clear => !!clear);
  }

  return isClear;
}
