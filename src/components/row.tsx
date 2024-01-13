import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RowObj } from 'src/utils/interfaces';
import Item from './item';

type RowProps = {
  row: RowObj;
  rowIndex: number;
};

const Row = ({ row, rowIndex }: RowProps) => {
  return (
    <View style={styles.container}>
      {row.row.map((item, index) => (
        <Item
          item={item}
          key={item.id}
          itemIndex={index}
          rowIndex={rowIndex}
          row={row}
          // updateBrickPos={updateBrickPos}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
