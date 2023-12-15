import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { useTheme } from 'src/hooks/useTheme';
import { ThemeContext } from './context';

function App(): React.JSX.Element {
  const { theme, toggleTheme, colors } = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  const isDarkMode = theme === 'dark';

  console.log('dark mode', theme, colors);

  const themeValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <View style={[styles.container, { backgroundColor: 'green' }]} /> */}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
