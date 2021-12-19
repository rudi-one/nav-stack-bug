import {PressableProps} from 'react-native';

export interface ButtonProps extends PressableProps {
  text: String;
  type?: 'normal' | 'dark' | 'transparent';
}
