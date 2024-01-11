import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'src/context';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { colors, theme, toggleTheme } = useTheme();
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: colors.background,
        flexGrow: 1,
      }}>
      {/* <DrawerItemList {...props} /> */}
      {/* <Animated.View> */}
      <DrawerItem
        icon={({ color, size }) => (
          <Icon
            name={theme === 'dark' ? 'moon' : 'sunny'}
            size={size}
            color={color}
          />
        )}
        labelStyle={{ color: colors.text }}
        label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        onPress={toggleTheme}
      />
      {/* </Animated.View> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
