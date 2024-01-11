import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'src/context';
import { BOARD_HEIGHT, BOARD_WIDTH } from 'src/utils/constants';

const Board = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: BOARD_WIDTH + 1,
    height: BOARD_HEIGHT,
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default Board;
