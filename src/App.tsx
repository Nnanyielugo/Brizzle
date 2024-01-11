import React from 'react';

import { ThemeProvider } from './context';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigation';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
