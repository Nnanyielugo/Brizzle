import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from 'src/Screens/Home';
import CustomDrawer from 'src/components/drawer-content';
import { AppStackParamList, DrawerStackParamsList } from 'src/utils/interfaces';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Drawer" component={Navigator} />
    </AppStack.Navigator>
  );
}

const Drawer = createDrawerNavigator<DrawerStackParamsList>();

export function Navigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={AppStackNavigator} />
    </Drawer.Navigator>
  );
}
