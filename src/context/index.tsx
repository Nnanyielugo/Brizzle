import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { get, save } from 'src/utils/functions/storage';
import { useColorScheme } from 'react-native';
import colors, { Color } from 'src/lib/colors';

type ThemeType = 'dark' | 'light';

const APP_THEME = 'APP_THEME';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: Color;
};

const ThemeContext = React.createContext<ThemeContextType | any>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>(
    useColorScheme() === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = async () => {
    const change = theme === 'dark' ? 'light' : 'dark';
    setTheme(change);
    await save(APP_THEME, change);
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

  const themeValue = {
    theme,
    toggleTheme,
    colors: colors[theme],
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext<ThemeContextType>(ThemeContext);
}
