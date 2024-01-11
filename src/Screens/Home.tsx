import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Board from 'src/components/board';
// import { useTheme } from 'src/hooks/useTheme';
import { useTheme } from 'src/context';

const Home = () => {
  const { theme, colors } = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  const isDarkMode = theme === 'dark';
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Board />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
