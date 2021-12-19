import {Dimensions, PixelRatio} from 'react-native';
import {isAndroid} from './consts';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const fontPicker = (font: 'Roboto' | 'CoreMellow'): string => {
  if (font === 'Roboto') {
    return isAndroid ? 'Roboto' : 'Roboto-Bold';
  } else {
    return isAndroid ? 'CoreMellow' : 'CoreMellow55Medium';
  }
};

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// Scale based on width
export const horizontalScale = (size: number) =>
  PixelRatio.roundToNearestPixel((windowWidth / guidelineBaseWidth) * size);

// Scale based on height
export const verticalScale = (size: number) =>
  PixelRatio.roundToNearestPixel((windowHeight / guidelineBaseHeight) * size);

// Scale with both axis
export const moderateScale = (size: number, factor = 1.5) =>
  PixelRatio.roundToNearestPixel(
    size + (horizontalScale(size) - size) * factor,
  );

export const moderateScaleToMax = (size: number, factor = 1.7) =>
  PixelRatio.roundToNearestPixel(Math.min(moderateScale(size), size * factor));
