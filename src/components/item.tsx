import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = () => {
  return (
    <View style={styles.container}>
      <Text>Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Item;