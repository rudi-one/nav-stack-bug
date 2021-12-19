import {PressableProps} from 'react-native';

export interface RoundButtonProps extends PressableProps {
  text: String;
  size: 'small' | 'big';
}
