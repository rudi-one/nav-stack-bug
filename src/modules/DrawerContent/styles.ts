import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors';
import {boldBodyStyles} from 'src/styles/typography';
import {verticalScale} from 'src/utils/helpers';

export default StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: verticalScale(5),
  },
  closeDrawer: {
    flexDirection: 'row-reverse',
  },
  label: {
    ...boldBodyStyles.x8,
    color: colors.darkBlue,
  },
  bottomButtons: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchItem: {
    width: '100%',
  },
  switchLabel: {
    minWidth: verticalScale(100),
  },
  switch: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
  },
});
