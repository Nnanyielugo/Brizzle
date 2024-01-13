import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamList = {
  Home: undefined;
  Drawer: undefined;
};

export type DrawerStackParamsList = {
  Main: NavigatorScreenParams<AppStackParamList>;
};

export type BrickPos = {
  left: number;
  right: number;
};

export type BrickObj = {
  id: string;
  width: number;
  transparent: boolean;
  pos: BrickPos;
};

export type RowObj = {
  id: string;
  row: BrickObj[];
};
