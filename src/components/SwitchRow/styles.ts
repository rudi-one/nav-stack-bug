import {StyleSheet} from 'react-native';
import {boldBodyStyles} from 'src/styles/typography';
import {verticalScale} from 'src/utils/helpers';
import {colors} from 'src/styles/colors';

export default StyleSheet.create({
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    marginVertical: verticalScale(6),
  },
  textStyle: {
    flex: 1,
    ...boldBodyStyles.x10,
  },
  smallTextStyle: {
    flex: 1,
    ...boldBodyStyles.x8,
  },
  drawerTextStyle: {
    flex: 1,
    ...boldBodyStyles.x8,
    color: colors.darkBlue,
  },
});
