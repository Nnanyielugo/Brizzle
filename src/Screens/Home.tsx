import React, { useMemo } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Board from 'src/components/board';
// import { useTheme } from 'src/hooks/useTheme';
import { useTheme } from 'src/context';
import { generateBoard } from 'src/utils/functions';
import { RowObj } from 'src/utils/interfaces';
// import { obtainRowPermutations, rows } from 'src/utils/board-rows';

const Home = () => {
  const { theme, colors } = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  const [board, setBoard] = React.useState<RowObj[]>(generateBoard());

  const isDarkMode = theme === 'dark';
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Board board={board} />
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
