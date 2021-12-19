import {SwitchProps} from 'react-native';

export interface SwitchRowProps extends SwitchProps {
  text: String;
  type?: 'normal' | 'small' | 'drawer';
}
