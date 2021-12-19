import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Pressable} from 'react-native';
import {renderCloseIcon} from 'src/navigation/DrawerNavigator/icons';
import styles from './styles';

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainer}>
      <Pressable
        onPress={() => props.navigation.closeDrawer()}
        style={styles.closeDrawer}>
        {renderCloseIcon()}
      </Pressable>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
