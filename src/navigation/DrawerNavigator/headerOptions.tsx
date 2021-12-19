import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {headerStyles} from 'src/styles/typography';
import {
  renderBackButton,
  renderDrawerHomeIcon,
  renderDrawerIcon,
} from './icons';
import styles from './styles';
import {DrawerOptionsProps} from './types';

export const defaultScreenOptions = (props: DrawerOptionsProps) => {
  const options: DrawerNavigationOptions = {
    drawerStyle: styles.drawer,
    drawerPosition: 'right',
    drawerLabelStyle: styles.drawerLabel,
    headerShown: true,
    headerStyle: styles.headerStyle,
    headerTitleAlign: 'center',
    headerTitle: '',
    headerRight: () => renderDrawerIcon(props),
    headerLeft: () => renderBackButton(props),
    headerTitleStyle: headerStyles.x20,
    gestureEnabled: false,
    headerLeftContainerStyle: styles.headerIconStyle,
    headerRightContainerStyle: styles.headerIconStyle,
  };

  return options;
};

export const homeOptions = (props: DrawerOptionsProps) => {
  const options: DrawerNavigationOptions = {
    ...defaultScreenOptions(props),
    title: 'Home',
    headerTitle: '',
    drawerIcon: renderDrawerHomeIcon,
  };

  return options;
};
