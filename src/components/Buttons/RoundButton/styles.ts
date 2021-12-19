import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors';
import {fontFamily, fontSize} from 'src/styles/typography';
import {moderateScaleToMax} from 'src/utils/helpers';
import {buttonSizeProperties} from './helpers';

const bigButtonSize = moderateScaleToMax(150);
const smallButtonSize = moderateScaleToMax(100);

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
  },
  bigButton: {
    ...buttonSizeProperties(bigButtonSize),
  },
  smallButton: {
    ...buttonSizeProperties(smallButtonSize),
  },
  text: {
    color: colors.darkBlue,
    textAlign: 'center',
    textTransform: 'uppercase',
    ...fontFamily.coreMellow,
    ...fontSize.x40,
  },
  smallText: {
    ...fontSize.x20,
  },
  disabled: {
    opacity: 0.9,
    backgroundColor: colors.darkMagenta,
  },
});
