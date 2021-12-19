import {ViewStyle} from 'react-native';

export const buttonSizeProperties = (size: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size * 0.5,
});
