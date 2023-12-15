import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    return false;
  }
};

export const get = async (key: string) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    if (!itemString) {
      return null;
    }
    return JSON.parse(itemString);
  } catch (err) {
    return null;
  }
};
