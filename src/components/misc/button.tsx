import React from 'react';
import {
  Pressable,
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

type ButtonProps = {
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  text: string;
};
export const Button = ({
  viewStyle,
  textStyle,
  text,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={props => ({
        opacity: props.pressed ? 0.5 : 1,
      })}>
      <View style={[styles.view, viewStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {},
  text: {},
});
