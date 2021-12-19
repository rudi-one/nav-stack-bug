import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color, colors} from 'src/styles/colors';
import {roundRippleConfig} from 'src/styles/consts';
import Settings from 'svg/Settings';
import {CLOSE_ICON_SIZE, DRAWER_ICON_SIZE} from './consts';
import styles from './styles';
import {DrawerOptionsProps} from './types';
import {LOGO_SIZE} from 'src/navigation/consts';

export const renderBackButton = (
  props: DrawerOptionsProps,
  color: Color = 'white',
) => (
  <Pressable
    onPress={() => props.navigation.goBack()}
    android_ripple={roundRippleConfig}></Pressable>
);

export const renderDrawerIcon = (
  props: DrawerOptionsProps,
  color: Color = 'white',
) => {
  return (
    <Pressable
      onPress={() => props.navigation.openDrawer()}
      android_ripple={roundRippleConfig}>
      <Settings width={LOGO_SIZE} height={LOGO_SIZE} color={colors[color]} />
    </Pressable>
  );
};

export const renderDrawerHomeIcon = () => {
  return (
    <Icon
      name={'home-outline'}
      color={colors.darkBlue}
      size={DRAWER_ICON_SIZE}
    />
  );
};

export const renderCloseIcon = () => {
  return (
    <Icon
      name={'close'}
      color={colors.darkBlue}
      size={CLOSE_ICON_SIZE}
      style={styles.closeIcon}
    />
  );
};

export const renderInformationIcon = () => {
  return (
    <Icon
      name={'information-outline'}
      color={colors.darkBlue}
      size={DRAWER_ICON_SIZE}
    />
  );
};
