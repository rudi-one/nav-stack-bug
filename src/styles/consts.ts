// eslint-disable-next-line react-native/split-platform-components
import {PressableAndroidRippleConfig} from 'react-native';
import {moderateScaleToMax} from 'src/utils/helpers';
import {colors} from './colors';

export const LOGO_SIZE = moderateScaleToMax(34);

export const ICON_SIZE = moderateScaleToMax(20);
export const APPBAR_ICON_SIZE = moderateScaleToMax(34);

export const standardRippleConfig: PressableAndroidRippleConfig = {
  color: colors.gray,
  borderless: false,
};

export const roundRippleConfig: PressableAndroidRippleConfig = {
  color: colors.gray,
  borderless: true,
  foreground: true,
};
