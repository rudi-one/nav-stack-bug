import {StyleSheet} from 'react-native';
import {subHeaderStyles} from 'src/styles/typography';
import {horizontalScale, verticalScale} from 'src/utils/helpers';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(35),
    paddingBottom: verticalScale(15),
  },
  text: {
    color: 'white',
  },
  sectionBottom: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  switchText: {
    ...subHeaderStyles.x8,
    textAlign: 'right',
  },
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: verticalScale(20),
  },
  switch: {
    marginLeft: horizontalScale(5),
  },
});
