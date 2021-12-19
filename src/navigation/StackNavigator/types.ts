import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ScreenName = 'Home' | 'Information';

export type StackParamList = {
  Home: undefined;
  Information: undefined;
};

// Type used for annotating useNavigation hook
export type StackNavigationProps = NativeStackNavigationProp<StackParamList>;
export type RouteProps = RouteProp<StackParamList>;

export interface StackOptionProps {
  route: RouteProp<StackParamList, keyof StackParamList>;
  navigation: any;
  onPress?: () => void;
}
