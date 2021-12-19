import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CustomTheme, navigationRef} from './helpers';
import StackNavigator from './StackNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={CustomTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
