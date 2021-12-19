import {StyleSheet} from 'react-native';
import {fontSize, fontWeight} from 'src/styles/typography';
import {colors} from 'src/styles/colors';
import {horizontalScale, verticalScale} from 'src/utils/helpers';
import {BORDER_RADIUS, BORDER_WIDTH, TRANSPARENT_BUTTON_SCALE} from './consts';

export default StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: colors.white,
    borderRadius: BORDER_RADIUS,
    marginHorizontal: horizontalScale(2),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  pressable: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
  },
  text: {
    color: colors.darkBlue,
    textAlign: 'center',
    ...fontWeight.bold,
    ...fontSize.x10,
  },
  disabled: {
    opacity: 0.9,
    backgroundColor: colors.darkMagenta,
  },
  transparentContainer: {
    borderColor: colors.white,
    borderWidth: BORDER_WIDTH,
    backgroundColor: colors.transparent,
    transform: [{scaleY: TRANSPARENT_BUTTON_SCALE}],
  },
  darkContainer: {
    backgroundColor: colors.darkBlue,
  },
  whiteText: {
    color: colors.white,
  },
});
