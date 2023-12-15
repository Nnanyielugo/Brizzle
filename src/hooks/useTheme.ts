import { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import colors from 'src/lib/colors';
import { get, save } from 'src/utils/functions/storage';

type ThemeType = 'dark' | 'light';

const APP_THEME = 'APP_THEME';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(
    useColorScheme() === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setAppTheme = useCallback(async () => {
    const appTheme = await get(APP_THEME);
    if (!appTheme) {
      await save(APP_THEME, theme);
    }
  }, [theme]);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return { theme, toggleTheme, colors: colors[theme] };
}
