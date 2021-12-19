import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors';
import {horizontalScale} from 'src/utils/helpers';
import {fontSize, headerStyles} from 'src/styles/typography';

export default StyleSheet.create({
  headerIconStyle: {
    paddingHorizontal: horizontalScale(10),
  },
  backButtonOverride: {
    marginHorizontal: 0,
  },
  headerStyle: {
    backgroundColor: colors.transparent,
    shadowColor: colors.transparent,
  },
  pinkHeaderStyle: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
  },
  subText: {
    ...headerStyles.x20,
    ...fontSize.x6,
    position: 'relative',
    top: -5,
    left: 5,
  },
  headerTitle: {
    ...headerStyles.x20,
  },
  smallHeaderTitle: {
    ...headerStyles.x10,
  },
});
