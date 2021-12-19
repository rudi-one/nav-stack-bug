import React from 'react';
import {Switch, Text, View} from 'react-native';
import {colors, transparentColors} from 'src/styles/colors';
import {moderateScale} from 'src/utils/helpers';
import {OFF_SWITCH_COLOR, SWITCH_COLOR, SWITCH_TRACK_COLOR_IOS} from './consts';
import styles from './styles';
import {SwitchRowProps} from './types';

const SwitchRow: React.FC<SwitchRowProps> = props => {
  const {type, text, value} = props;

  const isDrawerSwitch = type === 'drawer';
  const isSmallSwitch = type === 'small';

  return (
    <View style={[styles.switchRow, isDrawerSwitch ? {} : styles.margin]}>
      <Text
        style={
          isDrawerSwitch
            ? styles.drawerTextStyle
            : isSmallSwitch
            ? styles.smallTextStyle
            : styles.textStyle
        }>
        {text}
      </Text>
      <Switch
        {...props}
        ios_backgroundColor={SWITCH_TRACK_COLOR_IOS}
        trackColor={{
          true: isDrawerSwitch ? colors.lightGreen : transparentColors.white,
          false: transparentColors.darkBlue,
        }}
        thumbColor={value ? SWITCH_COLOR : OFF_SWITCH_COLOR}
        style={{
          transform: [
            {scaleX: moderateScale(1, 0.2)},
            {scaleY: moderateScale(1, 0.2)},
          ],
        }}
      />
    </View>
  );
};

export default SwitchRow;
