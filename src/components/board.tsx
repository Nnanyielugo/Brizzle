import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'src/context';
import { BOARD_HEIGHT, BOARD_WIDTH } from 'src/utils/constants';
import { RowObj } from 'src/utils/interfaces';
import Row from './row';

type BoardProps = {
  board: RowObj[];
};
const Board = ({ board }: BoardProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}>
      {board.map((row, rowIndex) => (
        <Row
          row={row}
          key={`row.id-${rowIndex}`}
          rowIndex={rowIndex}
          // updateBrickPos={updateBrickPos}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: BOARD_WIDTH + 1,
    height: BOARD_HEIGHT,
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'flex-end',
  },
});

export default Board;
