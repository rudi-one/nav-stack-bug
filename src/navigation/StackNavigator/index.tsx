import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from 'navigation/DrawerNavigator';
import {
  defaultScreenOptions,
  hiddenHeader,
  InformationOptions,
} from 'src/navigation/StackNavigator/headerOptions';
import React from 'react';
import Information from 'scenes/Information';
import {StackParamList} from './types';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator
      screenOptions={props =>
        props.route.name === 'Home' ? hiddenHeader : defaultScreenOptions(props)
      }>
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen
        name="Information"
        component={Information}
        options={InformationOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
