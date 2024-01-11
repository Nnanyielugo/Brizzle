import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamList = {
  Home: undefined;
  Drawer: undefined;
};

export type DrawerStackParamsList = {
  Main: NavigatorScreenParams<AppStackParamList>;
};
