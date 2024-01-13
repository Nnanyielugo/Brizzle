import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { BrickObj, RowObj } from 'src/utils/interfaces';
import Brick from 'assets/brick.jpeg';
import { useTheme } from 'src/context';

type ItemProps = {
  item: BrickObj;
  rowIndex: number;
  itemIndex: number;
  row: RowObj;
  // updateBrickPos: (
  //   brick: BrickObj,
  //   left: number,
  //   rowIndex: number,
  //   brickIndex: number,
  // ) => void;
};
const Item = ({ item, row, rowIndex, itemIndex }: ItemProps) => {
  const { colors } = useTheme();
  const left = React.useRef(
    new Animated.Value(item.pos?.left as number),
  ).current;
  const rowBottom = 50 * rowIndex + 1;
  const itemLeft = row.row[itemIndex - 1];
  const itemRight = row.row[itemIndex + 1];
  return (
    <Animated.Image
      source={Brick}
      style={[
        styles.image,
        {
          width: item.width,
          left: left,
          bottom: rowBottom,
          borderColor: colors.brickBorder,
        },
      ]}
      // {...panResponder.panHandlers}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    position: 'absolute',
  },
});

export default Item;
