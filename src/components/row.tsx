import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = () => {
  return (
    <View style={styles.container}>
      <Text>Row</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
