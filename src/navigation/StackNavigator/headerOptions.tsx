import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {isIOS} from 'src/utils/consts';
import styles from './styles';
import {StackOptionProps} from './types';

// General options
export const defaultScreenOptions = (props: StackOptionProps) => {
  return {
    headerTitleStyle: styles.headerTitle,
    headerTitleAlign: 'center',
    headerTitle: '',
    title: '',
    headerStyle: styles.headerStyle,
    gestureEnabled: false,
    headerShadowVisible: false,
    headerBackVisible: false,
    animation: isIOS ? 'none' : 'default',
  } as NativeStackNavigationOptions;
};

export const hiddenHeader: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export const InformationOptions = () => {
  const options: NativeStackNavigationOptions = {
    title: 'Information',
    headerTitle: 'Information',
    headerLeft: () => null,
  };

  return options;
};
