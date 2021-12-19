import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import DrawerContent from 'modules/DrawerContent';
import React from 'react';
import Home from 'scenes/Home';
import {defaultScreenOptions, homeOptions} from './headerOptions';
import {DrawerParamList} from './types';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerParamList>();

  return (
    <Drawer.Navigator
      backBehavior={'initialRoute'}
      screenOptions={props => defaultScreenOptions(props)}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <Drawer.Screen
        name="HomeContent"
        component={Home}
        options={homeOptions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
