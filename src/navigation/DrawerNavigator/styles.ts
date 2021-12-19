import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors';
import {horizontalScale, moderateScaleToMax} from 'src/utils/helpers';
import {boldBodyStyles} from 'src/styles/typography';

export default StyleSheet.create({
  drawer: {
    width: moderateScaleToMax(250),
  },
  headerIconStyle: {
    paddingHorizontal: horizontalScale(10),
  },
  drawerLabel: {
    ...boldBodyStyles.x8,
    color: colors.darkBlue,
  },
  headerTitle: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: horizontalScale(15),
  },
  headerStyle: {
    backgroundColor: colors.transparent,
    shadowColor: colors.transparent,
  },
  webViewHeaderStyle: {
    backgroundColor: colors.white,
    shadowColor: colors.transparent,
  },
  closeIcon: {
    paddingRight: horizontalScale(10),
  },
  homeIconsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    width: horizontalScale(100),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
