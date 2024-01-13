import { SAFE_MARGIN, BOARD_WIDTH } from '../constants';
import { BrickObj, RowObj, BrickPos } from '../interfaces';

export function moveBrick(
  brick: BrickObj,
  rowIndex: number,
  brickIndex: number,
  board: RowObj[],
) {
  const dropRowIndex = rowIndex - 1;
  let dropRow = board[dropRowIndex];
  let duplicateBoard: RowObj[] = JSON.parse(JSON.stringify(board));

  function dropAtStart() {
    duplicateBoard[dropRowIndex].row.unshift(brick);
    duplicateBoard[rowIndex].row.splice(brickIndex, 1);
  }

  function dropAtEnd() {
    duplicateBoard[dropRowIndex].row.push(brick);
    duplicateBoard[rowIndex].row.splice(brickIndex, 1);
  }

  if (brick.pos?.left === 0) {
    // case 1: lapping left border
    dropAtStart();
  } else if (brick.pos?.right === BOARD_WIDTH) {
    // case 2: brick lapping right border
    dropAtEnd();
  } else {
    // case 3: brick lapping neither border
    if (dropRow.row.length === 1) {
      // case 3.1: drop row only has 1 item
      if ((dropRow.row[0].pos as BrickPos).left >= brick.width) {
        // case 3.1.a: item can fit between left border and item in drop row
        dropAtStart();
      } else if (
        BOARD_WIDTH - (dropRow.row[0].pos as BrickPos).right >=
        brick.width
      ) {
        // case 3.1.b: item can fit between right border and item in drop row
        dropAtEnd();
      }
    } else {
      // case 3.2: drop row has more than one item
      for (let i = 0; i < dropRow.row.length; i++) {
        const iterBrick = dropRow.row[i];
        const nextIterBrick = dropRow.row[i + 1];
        if (i === 0 && (iterBrick.pos as BrickPos).left >= brick.width) {
          // case 3.2.a: space between left and droprow's first brick can fit brick
          dropAtStart();
          break;
        } else if (
          i === dropRow.row.length - 1 &&
          BOARD_WIDTH - (iterBrick.pos as BrickPos).right >= brick.width
        ) {
          // case 3.2.b: space between right and droprow's last brick can fit brick
          dropAtEnd();
          break;
        } else if (nextIterBrick) {
          if (
            (nextIterBrick.pos as BrickPos).left -
              (iterBrick.pos as BrickPos).right >=
            brick.width - SAFE_MARGIN
          ) {
            // case 3.2.c: space between currently iteirated brick and the next one can fit moved brick
            // case 4: flush to left or right adjacent bricks
            let newBrick = { ...brick };
            if (
              (newBrick.pos as BrickPos).left <
              (iterBrick.pos as BrickPos).right
            ) {
              // case 4.1: brick's left pos is greater than lefthand's brick right pos. Adjust brick's left pos
              (newBrick.pos as BrickPos).left = (
                iterBrick.pos as BrickPos
              ).right;
            }

            if (
              (newBrick.pos as BrickPos).right >
              (nextIterBrick.pos as BrickPos).left
            ) {
              // case 4.2: brick's right pos is greater than righthand's brick right pos. Adjust brick's right pos
              (newBrick.pos as BrickPos).right = (
                nextIterBrick.pos as BrickPos
              ).left;
            }

            // since [dropRowIndex].row[i] represents the brick to the left
            // and we have ascertained that there is space between left and right
            // to drop our brick,
            // we drop our brick (with modified position values above) in the index after i,
            // and move all the bricks after our dropped brick downward by one index

            duplicateBoard[dropRowIndex].row[i + 1] = newBrick;
            let indexShifted = i + 2;
            while (indexShifted <= dropRow.row.length) {
              duplicateBoard[dropRowIndex].row[indexShifted] =
                dropRow.row[indexShifted - 1];

              indexShifted += 1;
            }

            duplicateBoard[rowIndex].row.splice(brickIndex, 1);
            break;
          }
        }
      }
    }
  }

  return duplicateBoard;
}
