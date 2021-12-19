import {
  DefaultTheme,
  NavigationContainerRef,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {DrawerParamList} from './DrawerNavigator/types';
import {StackParamList} from './StackNavigator/types';

export const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

// @ts-ignore
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigateInStack(name: keyof StackParamList, params?: Object) {
  navigationRef.current?.navigate(name, params);
}

export function navigateInDrawer(name: keyof DrawerParamList, params?: Object) {
  navigationRef.current?.navigate(name, params);
}
